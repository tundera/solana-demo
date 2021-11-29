import { Provider } from '@project-serum/anchor'
import type { Commitment } from '@solana/web3.js'
import { clusterApiUrl, Connection } from '@solana/web3.js'

// Set our network to devnet.
const network = clusterApiUrl('devnet')

// Controls how we want to acknowledge when a transaction is "done".
const opts = {
  preflightCommitment: 'processed',
}

export const getProvider = () => {
  const connection = new Connection(network, opts.preflightCommitment as Commitment)
  const provider = new Provider(connection, window.solana, {
    preflightCommitment: opts.preflightCommitment as Commitment,
  })
  return provider
}
