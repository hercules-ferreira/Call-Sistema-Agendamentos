import styled from 'styled-components'

export const Container = styled.main`
  max-width: 36rem;
  display: flex;
  flex-direction: column; /* Para centralizar verticalmente */
  align-items: center; /* Centralizar horizontalmente */
  justify-content: center; /* Centralizar verticalmente */
  /* min-height: 100vh;  */
   background: var(--gray800); 

  padding: 3rem;


`

export const FullPageCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Header = styled.div`
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;
`
export const Form = styled.form`
  width: 100%; /* Set input width to 100% */

  input {
    width: 100%; /* Set input width to 100% */

    color: #ffff;
    display: flex;
    background: transparent;
    border: none;
    align-items: center;
    font-size: 14px;

    &::placeholder {
      color: var(--gray400);
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 22.4px */
    }
  }

  .input-container {
    width: 100%; /* Set input width to 100% */

    display: flex;
    align-items: center;
    align-self: stretch;
    border-radius: 10px;
    background: var(--gray900);
    border-bottom: 1px solid #ffff;
    padding: 1rem;
  }

  .prefix {
    color: #756142;
    display: flex;
    border-radius: 10px;
    background: var(--gray900);
    align-self: stretch;
    margin-left: 0.4rem;

    &:hover {
      border: transparent;
    }
  }

  button {
    display: flex;
    padding: 12px;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 6px;
    color: var(--with);
    background: var(--ignite700);

    &:hover {
      border: transparent;
      background: #00875f;
    }
  }

  .buttonIcon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    margin: 1.5rem 0 0.5rem;
  }
`

export const FormAnnotation = styled.div`
  /* margin-top: 2rem; */
  color: red;
  font-size: 1rem;
  letter-spacing: 1px;
  margin-top: 0.8rem;

  span {
    color: var(--gray400);
  }
`
