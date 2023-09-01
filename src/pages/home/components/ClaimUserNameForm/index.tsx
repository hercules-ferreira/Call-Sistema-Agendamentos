import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Container, FormAnnotation } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { Icons } from '@/src/components/Icons'

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
    handleSubmit: handleSubmitForm, // Renomeie o handleSubmit para evitar conflitos de nomes
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsername(data: ClaimUsernameFormData){
    console.log(data)
  }

  return (
    <Container>
      {/* Use uma função intermediária para lidar com o evento onSubmit */}
      <form onSubmit={handleSubmitForm(handleClaimUsername)} >
        <div className="input-container">
          <span className="prefix">hercules.com/</span>
          <input
            placeholder="seu-usuário"
            {...register('username')}
   
          
          />
        </div>
   
          <button type="submit">
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
