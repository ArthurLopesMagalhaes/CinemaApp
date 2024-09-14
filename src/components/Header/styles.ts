import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.surface.glass};
  padding: 12px 16px;
  padding-top: 40px;
`;

export const ImageBox = styled.View`
  flex: 1;
`;

export const ButtonBox = styled.View`
  flex: 1;
  height: 56px;
  justify-content: center;
`;

export const LocationBox = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  flex: 2;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-self: flex-end;
`;
