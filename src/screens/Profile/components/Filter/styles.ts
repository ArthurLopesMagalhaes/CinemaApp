import styled from "styled-components/native";

export const Container = styled.View`
  /* width: 40%; */
  background-color: ${(props) => props.theme.colors.surface.glass};

  border-radius: 10px;
  border-width: 2px;
  border-color: ${(props) => props.theme.colors.border.main};
  position: absolute;
  right: 0;
  z-index: 1;
`;

export const FilterButton = styled.TouchableOpacity`
  margin: 10px;
`;

export const FilterOption = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const DividerLine = styled.View`
  height: 1px;
  background-color: ${(props) => props.theme.colors.border.main};
`;
