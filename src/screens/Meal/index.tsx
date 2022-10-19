import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { MeanInsideCard } from '@components/MeanInsideCard';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MeanStorageDTO } from '@storage/mean/MeanStorageDTO';
import { meanGetByDailyAndMean } from '@storage/mean/meanGetByDailyAndMean';
import { meanRemove } from '@storage/mean/meanRemove';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import {
  ButtonsFooter,
  ButtonsSeparator,
  Container,
  Content,
  DateHour,
  DateHourLabel,
  Description,
  HeaderContent,
  Name,
} from './styles';

type RouteParams = {
  daily: string;
  mean: string;
};

export function Meal() {
  const [currentMean, setCurrentMean] = useState({} as MeanStorageDTO);
  console.log(currentMean);

  const route = useRoute();
  const navigation = useNavigation();

  const { daily, mean } = route.params as RouteParams;

  function navTo() {
    navigation.navigate('new', {
      daily,
      mean,
    });
  }

  async function removeMean() {
    try {
      await meanRemove(currentMean);
      navigation.navigate('home');
    } catch (e) {
      console.error(e);
      Alert.alert('Remover refeição', 'Não foi possível remover a refeição.');
    }
  }

  async function handleRemove() {
    Alert.alert('Remover', 'Deseja remover a refeição?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => removeMean() },
    ]);
  }

  useEffect(() => {
    async function load() {
      if (route?.params) {
        const { daily, mean } = route.params as RouteParams;
        if (daily && mean) {
          const meanFind = await meanGetByDailyAndMean(daily, mean);

          console.log(meanFind);

          if (meanFind) {
            setCurrentMean(meanFind);
          }
        }
      }
    }

    load();
  }, []);

  return (
    <Container inside={currentMean.inside_the_diet}>
      <HeaderContent>
        <Header title="Refeição" />
      </HeaderContent>

      <Content>
        <Name>{currentMean.name}</Name>

        <Description>{currentMean.description}</Description>

        <DateHourLabel>Data e hora</DateHourLabel>

        <DateHour>
          {currentMean.created_at} às {currentMean.hour}
        </DateHour>

        <MeanInsideCard inside={currentMean.inside_the_diet} />

        <ButtonsFooter />

        <Button icon="edit" title="Editar refeição" onPress={navTo} />

        <ButtonsSeparator />

        <Button
          icon="delete"
          type="SECONDARY"
          title="Excluir refeição"
          onPress={handleRemove}
        />
      </Content>
    </Container>
  );
}
