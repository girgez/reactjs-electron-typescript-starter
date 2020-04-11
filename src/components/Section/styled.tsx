// @ts-ignore
import styled from "styled-components";

type Props = {
  titleColor?: string;
};

export const SectionTitle = styled.h1`
  font-size: 20px;
  color: ${ (props: Props) => props.titleColor ? props.titleColor : 'red' };
`;

export const SectionContent = styled.p`
  font-size: 14px;
  color: black;
`;

export const SectionAction = styled.button`
  border: none;
  background: blue;
  border-radius: 5px;
  width: 80px;
  height: 30px;
  cursor: pointer;
  color: white;
  &:hover {
    background: #0583FF;
  }
`;