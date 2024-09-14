import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.surface.main};
`;

export const TopInfo = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.border.main};
  padding: 0 16px;
`;
export const BottomInfo = styled.View`
  padding: 16px 16px;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;
export const Footer = styled.View`
  flex-direction: row;
  padding: 16px;
`;
