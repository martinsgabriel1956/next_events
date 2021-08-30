import styled from "styled-components";

import { Button } from "../../UI/Button";

export const Container = styled.form`
  margin: 2rem auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background-color: white;
  border-radius: 6px;
  width: 90%;
  max-width: 40rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Controls = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 80%;
    flex-direction: row;
  }
`;

export const Control = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  label {
    font-weight: bold;
  }

  select {
    font: inherit;
    background-color: white;
    border-radius: 6px;
    width: 70%;
    padding: 0.25rem;

    @media (min-width: 768px) {
      width: 100%;
    }
  }
`;

export const ButtonEvents = styled(Button)`
  width: 100%;
  font: inherit;
  padding: 0rem 0.75rem;
  background-color: #03be9f;
  border: 1px solid #03be9f;
  color: #dafff7;
  border-radius: 4px;

  @media (min-width: 768px) {
    width: 20%;
  }
`;
