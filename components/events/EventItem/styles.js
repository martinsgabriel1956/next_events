import styled from "styled-components";

export const Container = styled.li`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 10rem;

    @media (min-width: 768px) {
      width: 40%;
      height: 14rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 0 1rem;
  text-align: center;

  h2 {
    margin: 0.5rem 0;

    @media (min-width: 768px) {
      margin: 1rem 0;
    }
  }

  @media (min-width: 768px) {
    width: 60%;
    padding: 0;
    text-align: left;
  }
`;

export const Summary = styled.div``;

export const DateContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #666666;
  }

  time {
    color: #666666;
    font-weight: bold;
  }
`;

export const Address = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  margin: 0.5rem 0;
  color: #666666;
  white-space: pre;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #666666;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    display: block;

    & > span {
      vertical-align: middle;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;
