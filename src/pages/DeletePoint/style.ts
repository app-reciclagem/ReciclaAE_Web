import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-family: 'Kalam', cursive;
  font-size: 3em;
`;

export const UserContainer = styled.div`
  margin: 1rem;
`;

export const PointPicture = styled.img`
  max-width: 100%;
  max-height: 200px;
  margin-top: 10px;
`;

export const Text = styled.p`
  margin: .25rem;
`;

export const Paragraph = styled.p`
  margin: 1rem;
  font-size: 1.25rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
`;

export const Input = styled.input`
  padding: .5em 1em;
  border-radius: .5em;
  box-shadow: 0 .25em .25em rgba(0, 0, 0, .1);
`;

export const Button = styled.button`
  padding: .5em 5.3em;
  border-radius: .5em;
  margin: 10px;
  color: var(--bright);
  background-color: var(--cancel);
  cursor: pointer;
`;

export const Link = styled(RouterLink)`
  padding: .5em 5.3em;
  border-radius: .5em;
  
  color: var(--bright);
  background-color: #000000;
  cursor: pointer;
`;
