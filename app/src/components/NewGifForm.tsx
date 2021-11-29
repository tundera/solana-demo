import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  VisuallyHidden,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import type { GifObject } from 'types'
import * as z from 'zod'

const schema = z.object({
  source: z.string().url({ message: 'Required' }),
  description: z.string().nonempty({ message: 'Required' }),
})

type NewGifInputValues = {
  source: string
  description: string
}

type NewGifFormProps = {
  handleSubmitGif: (data: GifObject) => void
}

export const NewGifForm = ({ handleSubmitGif }: NewGifFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewGifInputValues>({ resolver: zodResolver(schema) })

  const onSubmit: SubmitHandler<NewGifInputValues> = (data) => {
    handleSubmitGif({ gifLink: data.source, gifDesc: data.description })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack py="2" w="container" align="center">
        <Heading as="h2" mb="4">
          Add a new GIF
        </Heading>
        <FormControl isInvalid={!!errors.source}>
          <VisuallyHidden>
            <FormLabel htmlFor="source">GIF Link</FormLabel>
          </VisuallyHidden>
          <Input id="source" placeholder="Enter GIF link" {...register('source')} rounded="base" />
          <FormErrorMessage>{errors.source && errors.source.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.description}>
          <VisuallyHidden>
            <FormLabel htmlFor="description">Description</FormLabel>
          </VisuallyHidden>
          <Input
            id="description"
            placeholder="Description of GIF"
            {...register('description')}
            rounded="base"
          />
          <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          w="full"
          colorScheme="blue"
          size="lg"
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          isLoading={isSubmitting}
        >
          Submit
        </Button>
      </Stack>
    </form>
  )
}
