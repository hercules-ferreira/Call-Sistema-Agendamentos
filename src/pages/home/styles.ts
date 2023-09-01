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
    font-size: 4rem;
  }

  p {
    margin-top: 0.5rem;
    color: var(--gray200);
    font-size: 1.7rem;
  }
`
export const Preview = styled.div`
  padding-right: 2rem;
  margin-left: auto;
  overflow: hidden;
`

// export const Container = styled.div`
//   max-width: 100vw;
//   height: 100vh;
//   background: var(--gray900);
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   gap: 5rem;

//   @media (max-width: 1260px) {
//     width: 1060px;
//   }

//   @media (max-width: 1160px) {
//     width: 960px;
//   }

//   @media (max-width: 1060px) {
//     width: 860px;
//   }

//   @media (max-width: 960px) {
//     gap: 1rem;
//     margin: auto;
//     flex-direction: column;
//   }

//   @media (max-width: 880px) {
//     width: 660px;
//     gap: 1rem;
//     img {
//       width: 90%;
//     }
//   }

//   @media (max-width: 700px) {
//     width: 560px;
//     gap: 1rem;
//     img {
//       width: 90%;
//     }
//   }

//   @media (max-width: 700px) {
//     width: 560px;
//     gap: 1rem;
//     img {
//       width: 90%;
//     }
//   }

//   @media (max-width: 600px) {
//     width: 400px;
//     gap: 1rem;
//     img {
//       width: 100%;
//     }
//   }

//   @media (max-width: 460px) {
//     div {
//       width: auto;

//       p {
//         text-align: justify;
//         align-items: center;
//         justify-content: center;
//         margin: auto;
//         max-width: 300px;
//         margin-bottom: 1rem;
//         margin-top: 1rem;
//       }
//     }
//     width: 250px;
//     display: flex;
//   }
// `

// export const Hero = styled.div`
//   max-width: 480px;
//   padding: 2.5rem;

//   h1 {
//     color: var(--with);
//     font-size: 4rem;
//   }

//   p {
//     margin-top: 0.5rem;
//     color: var(--gray200);
//     font-size: 1.7rem;
//   }

//   @media (max-width: 600px) {
//     h1 {
//       font-size: 2.2rem;
//     }

//     p {
//       font-size: 1.3rem;
//     }
//   }

//   @media (max-width: 460) {
//     h1 {
//       font-size: 2.1rem;
//     }

//     p {
//       font-size: 1.1rem;
//     }
//   }
// `
// export const Preview = styled.div`
//   padding-right: 2rem;
//   margin-left: auto;
//   overflow: hidden;

//   @media (max-width: 560px) {
//     display: none;
//   }

//   @media (max-width: 600px) {
//     padding-right: 0;
//   }
// `
