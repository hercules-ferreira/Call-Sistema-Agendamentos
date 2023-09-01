import { useForm } from 'react-hook-form'
import { Container, Form, FormAnnotation, FullPageCentered, Header } from './styles'
import { MultiStep } from '@ignite-ui/react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Icons } from '@/src/components/Icons'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter no mínimo 3 letras' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens',
    })
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, { message: 'O nome precisa ter no mínimo 3 letras' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  async function handleRegister(data: RegisterFormData) {
    console.log(data)
  }

  return (

    <FullPageCentered>
    <Container>
      <Header>
        <header>
          <h2>Bem vindo a nossa página de Sistema de Agendamentos</h2>
        </header>
        <p>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          ditar essas informações depois.
        </p>
        <MultiStep size={4} currentStep={1} />
      </Header>
      <Form onSubmit={handleSubmit(handleRegister)}>
        <label>
          <p>Nome de usuário</p>
          <div className="input-container">
            <span className="prefix">hercules.com/</span>
            <input placeholder="seu-usuário" {...register('username')} />
          </div>
          <FormAnnotation>
            {errors.username ? (
              errors.username.message
            ) : (
              <span>Digite o nome do usuário desejado</span>
            )}
          </FormAnnotation>
        </label>
        <label>
          <p>Nome completo</p>
          <div className="input-container">
            <input placeholder="Seu nome" {...register('name')} />
          </div>
          <FormAnnotation>
            {errors.name ? (
              errors.name.message
            ) : (
              <span>Digite o nome desejado</span>
            )}
          </FormAnnotation>
        </label>
        <div className="buttonIcon">
          <button type="submit" disabled={isSubmitting}>
            Próximo passo
            <Icons svg="arrowRight" />
          </button>
        </div>
      </Form>
    </Container>
    </FullPageCentered>
  )
}

