import { Container, Hero, Preview } from './styles'
import previewImage from '../../assets/app-preview.png'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Container>
        <Hero>
          <div>
            <h1>Agendamento descomplicado</h1>
            <p>
              Conecte seu calendário e permita que as pessoas marquem
              agendamentos no seu tempo livre.
            </p>
          </div>
        </Hero>

        <Preview>
          <Image src={previewImage} height={400} quality={100} priority alt="Calendário" />
        </Preview>
      </Container>
    </div>
  )
}
