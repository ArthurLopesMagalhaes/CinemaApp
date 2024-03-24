import { FlatList } from "react-native";

import FilterSvg from "@assets/sort.svg";

import { Container, DividerLine, FilterButton, FilterOption } from "./styles";

import { Text } from "@components/Text";

import { capitalizeFirstLetter } from "@utils/capitalizeFirstLetter";

export type FilterType = "active" | "closed";

type FilterProps = {
  filterMenuVisible: boolean;
  onOptionPress: (filterOption: FilterType) => void;
  setFilterMenuVisible: (visible: boolean) => void;
};

const FiltersOptions: FilterType[] = ["active", "closed"];

export const Filter = ({
  filterMenuVisible,
  onOptionPress,
  setFilterMenuVisible,
}: FilterProps) => {
  return (
    <Container>
      {filterMenuVisible ? (
        <FlatList
          data={FiltersOptions}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <DividerLine />}
          renderItem={({ item }) => (
            <FilterOption onPress={() => onOptionPress(item)}>
              <Text>{capitalizeFirstLetter(item)}</Text>
            </FilterOption>
          )}
        />
      ) : (
        <FilterButton onPress={() => setFilterMenuVisible(true)}>
          <FilterSvg />
        </FilterButton>
      )}
    </Container>
  );
};
