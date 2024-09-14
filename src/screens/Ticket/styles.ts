import { styled } from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.colors.surface.main};
`;

export const QrCodeContent = styled.View`
  justify-content: center;
  align-items: center;
`;

export const QrCodeContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 16px;
  background-color: #fff;
`;

export const QrCodeImage = styled.Image``;
export const BottomView = styled.View`
  padding: 16px;
  flex: 1;
  justify-content: space-between;
`;
export const TicketInfos = styled.View``;

export const LabelsRow = styled.View`
  flex-direction: row;
  gap: 15px;
  margin-bottom: 8px;
`;
export const ButtonsBox = styled.View`
  flex-direction: row;
  gap: 15px;
`;

export const RefundButton = styled.TouchableOpacity`
  border-radius: 8px;
  height: 56px;
  border: 1px solid ${(props) => props.theme.colors.border.main};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
