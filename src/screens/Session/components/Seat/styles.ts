import styled from "styled-components/native";

import { SeatProps } from ".";

export const Container = styled.TouchableOpacity<SeatProps>`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => props.background};
`;
