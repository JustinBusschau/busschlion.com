import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../components/ui/card';
import * as pallette from './pallette';

export const ServiceCardContainer = styled(motion.div).attrs({
  whileHover: { scale: 1.02 },
  transition: { type: 'spring', stiffness: 300 },
})``;

export const ServiceCardWrapper = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ServiceCardTitleWrapper = styled(CardTitle)`
  font-size: 1.5rem;
`;

export const ServiceCardDescriptionWrapper = styled(CardDescription)`
  color: hsl(${pallette.__muted_foreground});
`;

export const ServiceCardContentWrapper = styled(CardContent)`
  flex-grow: 1;
`;

export const ServiceFeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ServiceFeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    height: 1rem;
    width: 1rem;
    color: hsl(${pallette.__primary});
  }

  span {
    color: hsl(${pallette.__muted_foreground});
  }
`;

export const ServiceCardFooterWrapper = styled(CardFooter)`
  button {
    width: 100%;
  }
`;
