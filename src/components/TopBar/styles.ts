import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0px 24px;
  margin-top: 40px;
  gap: 16px;
`;

export const Left = styled.View`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Medium = styled.View`
  justify-content: center;
  align-items: center;
  flex: 8;
`;

export const Right = styled.View`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
