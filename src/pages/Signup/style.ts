import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  max-width: var(--tablet-bp);
  margin: 8rem auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
`;

export const FormFooter = styled.div`
  text-align: center;
`;

export const Text = styled.p`

`;

export const Link = styled(RouterLink)`
  font-weight: bold;
  text-decoration: underline;
`;
