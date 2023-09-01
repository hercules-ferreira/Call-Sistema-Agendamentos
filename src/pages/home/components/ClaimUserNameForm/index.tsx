import React from 'react'
import { Container } from './styles'
import { Icons } from '@/src/components/Icons'

export function ClaimUserNameForm() {

  return (
    <Container>
      {/* Use uma função intermediária para lidar com o evento onSubmit */}
      <form>
        <div className="input-container">
          <span className="prefix">hercules.com/</span>
          <input
            placeholder="seu-usuário"
           
          />
        </div>
     
          <button type="submit">
            Reservar
            <Icons svg="arrowRight" />
          </button>
    
      </form>
  
    </Container>
  )
}
