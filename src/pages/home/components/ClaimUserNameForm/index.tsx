import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Container, FormAnnotation } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { Icons } from '@/src/components/Icons'
import { useRouter } from 'next/router'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter no mínimo 3 letras' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens',
    })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUserNameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  const router = useRouter()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
  }

  return (
    <Container>
      {/* Use uma função intermediária para lidar com o evento onSubmit */}
      <form onSubmit={handleSubmit(handleClaimUsername)}>
        <div className="input-container">
          <span className="prefix">hercules.com/</span>
          <input placeholder="seu-usuário" {...register('username')} />
        </div>

        <button type="submit" disabled={isSubmitting}>
          Reservar
          <Icons svg="arrowRight" />
        </button>
      </form>
      <FormAnnotation>
        {errors.username ? (
          errors.username.message
        ) : (
          <span>Digite o nome do usuário desejado</span>
        )}
      </FormAnnotation>
    </Container>
  )
}
