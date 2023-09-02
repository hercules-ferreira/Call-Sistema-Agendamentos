import styled from 'styled-components'

export const ContainerConnect = styled.main`
  max-width: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--gray900);
  border-radius: 10px;

  .multiStep {
    margin: 1rem 0 0;
  }
`

export const ConnectBox = styled.div`
  width: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--gray800);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  button {
    display: flex;
    padding: 12px;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 10px;
    color: var(--with);
    background: #00875f;
    margin-bottom: 1.5rem;

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
`

export const ConnectItem = styled.div`
  display: flex;
  border-radius: 10px;
  gap: 1rem;
  margin: 1.5rem 1.5rem 0rem;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border: 2px solid var(--gray600);
  letter-spacing: 2px;

  button {
    margin-bottom: 1rem;
    display: flex;
    padding: 12px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 10px;
    color: var(--with);
    background: transparent;
    border: 2px solid #00875f;

    &:hover {
      border: transparent;
    }
  }

  .buttonIcon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Container = styled.main`
  max-width: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--gray800);
  border-radius: 10px;
  padding: 3rem;

  .multiStep {
    margin: 1rem 0 0;
  }
`

export const Header = styled.div`
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;

  h2 {
    padding: 0 0 1rem;
    text-align: center;
  }
  > p {
    text-align: center;
  }
`
