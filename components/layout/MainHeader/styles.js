import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 10%;
  height: 5rem;
  background-color: #202020;
`;

export const LogoContainer = styled.div`
  font-size: 1.5rem;
  color: white;
  font-family: "Fira", sans-serif;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #94fdfd;

  a {
    text-decoration: none;
    color: #94fdfd;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Navigation = styled.div`
  a {
    text-decoration: none;
    color: #74dacc;
    font-size: 1rem;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;
