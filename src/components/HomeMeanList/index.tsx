import { HomeMeanCard } from '@components/HomeMeanCard';
import { useNavigation } from '@react-navigation/native';
import { MeanStorageDTO } from '@storage/mean/MeanStorageDTO';
import React from 'react';
import { SectionList } from 'react-native';

import {
  Container,
  Footer,
  SeparatorItem,
  SeparatorSection,
  Title,
} from './styles';

type Data = {
  title: string;
  data: MeanStorageDTO[];
};

type HomeMeanListProps = {
  data: Data[];
};

export function HomeMeanList(props: HomeMeanListProps) {
  const navigation = useNavigation();

  function navTo(daily: string, mean: string) {
    navigation.navigate('meal', {
      daily,
      mean,
    });
  }

  return (
    <Container>
      <SectionList
        sections={props.data}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <HomeMeanCard
            data={item}
            onPress={() => navTo(item.created_at, item.name)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => <Title>{title}</Title>}
        ItemSeparatorComponent={() => <SeparatorItem />}
        SectionSeparatorComponent={() => <SeparatorSection />}
        ListFooterComponent={() => <Footer />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
