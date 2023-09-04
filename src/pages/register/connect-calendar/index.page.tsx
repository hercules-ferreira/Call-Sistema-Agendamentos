import { MultiStep } from '@ignite-ui/react'
import { Icons } from '@/src/components/Icons'
import { useRouter } from 'next/router'
import { FullPageCentered, Header } from '../styles'
import { ConnectBox, ConnectItem, ContainerConnect } from './styles'
import { signIn } from 'next-auth/react'

export default function ConnectCalendar() {
  const router = useRouter()

  // async function handleRegister(data: RegisterFormData) {
  // }

  return (
    <FullPageCentered>
      <ContainerConnect>
        <Header>
          <header>
            <h2>Conecte sua agenda!</h2>
          </header>
          <p>
            Conecte o seu calendário para verificar automaticamente as horas
            ocupadas e os novos eventos à medida em que são agendados.
          </p>
          <div className="multiStep">
            <MultiStep size={4} currentStep={2} />
          </div>
        </Header>

        <ConnectBox>
          <ConnectItem>
            <h2>Google Calendar</h2>
            <button
              className="buttonIcon"
              onClick={() => {
                signIn('google')
              }}
            >
              Conectar <Icons svg="arrowRight" />
            </button>
          </ConnectItem>
          <div className="buttonIcon">
            <button type="submit">
              Próximo passo
              <Icons svg="arrowRight" />
            </button>
          </div>
        </ConnectBox>
      </ContainerConnect>
    </FullPageCentered>
  )
}
