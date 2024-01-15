import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 80px;
  background-color: ${(props) => props.theme.colors.surface.deep};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 8px;
`;

export const MovieImg = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 4px;
`;

export const InfoBox = styled.View`
  flex: 1;
  height: 100%;
  justify-content: space-between;
`;
export const InfoBoxTop = styled.View``;
export const InfoBoxBottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
