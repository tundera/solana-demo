import type { Idl } from '@project-serum/anchor'
import { Program, web3 } from '@project-serum/anchor'
import { PublicKey } from '@solana/web3.js'
import { useEffect, useState } from 'react'
import idl from 'src/idl.json'
import kp from 'src/keypair.json'
import { getProvider } from 'src/lib/solana'
import type { GifObject } from 'types'

// SystemProgram is a reference to the Solana runtime!
const { SystemProgram, Keypair } = web3

// Create a keypair for the account that will hold the GIF data.
const arr = Object.values(kp._keypair.secretKey)
const secret = new Uint8Array(arr)
const baseAccount = Keypair.fromSecretKey(secret)

// Get our program's id from the IDL file.
const programID = new PublicKey(idl.metadata.address)

export const useGifCollection = (walletAddress?: string) => {
  const [gifList, setGifList] = useState<GifObject[] | null>(null)

  const getGifList = async () => {
    try {
      const provider = getProvider()
      const program = new Program(idl as Idl, programID, provider)

      console.log('Fetching GIF collection...')
      const account = await program.account.baseAccount.fetch(baseAccount.publicKey)

      console.log('Got the account', account)
      setGifList(account.gifList)
    } catch (error) {
      console.log('Error in getGifList: ', error)
      setGifList(null)
    }
  }

  const createGifAccount = async () => {
    try {
      const provider = getProvider()
      const program = new Program(idl as Idl, programID, provider)
      console.log('ping')
      await program.rpc.startStuffOff({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount],
      })
      console.log('Created a new BaseAccount w/ address:', baseAccount.publicKey.toString())
      await getGifList()
    } catch (error) {
      console.log('Error creating BaseAccount account:', error)
    }
  }

  const addNewGif = async (data: GifObject) => {
    const provider = getProvider()
    const program = new Program(idl as Idl, programID, provider)

    await program.rpc.addGif(data.gifLink, data.gifDesc, {
      accounts: {
        baseAccount: baseAccount.publicKey,
        user: provider.wallet.publicKey,
      },
    })
    console.log('GIF successfully sent to program', data)

    await getGifList()
  }

  useEffect(() => {
    if (walletAddress) {
      getGifList()
    }
  }, [walletAddress])

  return { gifs: gifList, createGifAccount, addNewGif }
}
