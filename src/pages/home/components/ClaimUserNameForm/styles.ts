import styled from 'styled-components'

export const Container = styled.div`
  input {
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

  button {
    display: flex;
    padding: 12px;
    margin-top: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 10px;
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
    color: inherit;
    text-decoration: none;
  }

  form {
    display: flex;
    width: 390px;
    padding: 12px 20px;
    margin-top: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    border-radius: 6px;
    border: 1px solid var(--gray600);
    background: var(--gray800);

    @media (max-width: 460px) {
      div {
        width: 95%;
      }
    }

    @media (max-width: 440px) {
      width: 320px;
    }

    @media (max-width: 360px) {
      width: 280px;
    }
  }

  .input-container {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    align-self: stretch;
    border-radius: 6px;
    background: var(--gray900);
    border-bottom: 1px solid #ffff;
  }

  .prefix {
    color: #756142;
    display: flex;
    border-radius: 6px;
    background: var(--gray900);
    padding: 12px 0;
    align-self: stretch;
    margin-left: 0.4rem;

    &:hover {
      border: transparent;
    }
  }
`

export const FormAnnotation = styled.div`
  margin-top: 2rem;
  color: red;
  font-size: 1.1rem;
  letter-spacing: 1px;
  margin-top: 0.8rem;

  span {
    color: var(--gray400);
  }
`
