import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background.main};
`;
export const TopFixed = styled.View`
  background-color: ${(props) => props.theme.colors.surface.glass};
`;

export const DateAndTimeBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
`;
export const DateAndTimeButton = styled.TouchableOpacity`
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.border.main};
  height: 40px;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

export const Bottom = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background.main};
`;
export const ButtonWrapper = styled.View`
  flex-direction: row;
  padding: 0px 16px 16px;
`;
