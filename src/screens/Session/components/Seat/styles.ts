import styled from 'styled-components/native';

type SeatStyleProps = {
  background?: string;
};

export const Container = styled.TouchableOpacity<SeatStyleProps>`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => props.background};
`;
