import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  max-width: calc(
    100vw - 10rem
  ); /* 100% da largura da janela, menos a margem fixa */
  height: 100vh;
  background: var(--gray900);
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;
`

export const Hero = styled.div`
  max-width: 30rem;
  padding: 2.5rem;

  h1 {
    color: var(--with);
    font-size: 3.5rem;
    text-align: center;
  }

  p {
    margin-top: 0.5rem;
    color: var(--gray200);
    font-size: 1.7rem;
    text-align: center;
  }
`
export const Preview = styled.div`
  padding-right: 2rem;
  margin-left: auto;
  overflow: hidden;
`
