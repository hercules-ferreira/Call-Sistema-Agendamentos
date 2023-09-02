import { useForm } from 'react-hook-form'
import {
  Container,
  Form,
  FormAnnotation,
  FullPageCentered,
  Header,
} from './styles'
import { MultiStep } from '@ignite-ui/react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Icons } from '@/src/components/Icons'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { api } from '@/src/lib/axios'
import { AxiosError } from 'axios'

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
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const router = useRouter()

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegister(data: RegisterFormData) {
    try {
      await api.post('/users', {
        name: data.name,
        username: data.username,
      })

      await router.push('/register/connect-calendar')
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err.response.data.message)
        return
      }
      console.error(err)
    }
  }

  return (
    <FullPageCentered>
      <Container>
        <Header>
          <header>
            <h2>Bem vindo a nossa página de Sistema de Agendamentos</h2>
          </header>
          <p>
            Precisamos de algumas informações para criar seu perfil! Ah, você
            pode ditar essas informações depois.
          </p>
          <div className="multiStep">
            <MultiStep size={4} currentStep={1} />
          </div>
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
