import { Button } from '@components/Button';
import { HomeHeader } from '@components/HomeHeader';
import { HomeMeanList } from '@components/HomeMeanList';
import { Loading } from '@components/Loading';
import { PercentMeal } from '@components/PercentMeal';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { dailyGetAll } from '@storage/daily/dailyGetAll';
import { MeanStorageDTO } from '@storage/mean/MeanStorageDTO';
import { meanGetAllByDaily } from '@storage/mean/meanGetAllByDaily';
import { AppError } from '@utils/AppError';
import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';

import { Container, Title } from './styles';

type DataProps = {
  title: string;
  data: MeanStorageDTO[];
};

export function Home() {
  const [insidePercents, setInsidePercents] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DataProps[]>([]);

  const navigation = useNavigation();

  function handleNavToStatistics() {
    navigation.navigate('statistics');
  }

  function handleNavToNew() {
    navigation.navigate('new');
  }

  useFocusEffect(
    useCallback(() => {
      async function loadMeals() {
        try {
          setIsLoading(true);
          const dailies = await dailyGetAll();

          const meals: DataProps[] = [];
          let insides = 0;
          let totalMeals = 0;

          for (const daily of dailies) {
            const storage = await meanGetAllByDaily(daily);
            totalMeals += storage.length;
            insides += storage.filter((mean) => mean.inside_the_diet).length;

            meals.push({
              title: daily,
              data: storage,
            });
          }
          if (totalMeals !== 0) {
            const percent = Number(((insides / totalMeals) * 100).toFixed(2));
            setInsidePercents(percent);
          } else {
            setInsidePercents(0);
          }

          setData(meals);
        } catch (e) {
          if (e instanceof AppError) {
            Alert.alert('Nova refeição', e.message);
          } else {
            Alert.alert(
              'Nova refeição',
              'Não foi possível criar uma nova refeição.'
            );
            console.error(e);
          }
        } finally {
          setIsLoading(false);
        }
      }

      loadMeals();
    }, [])
  );

  return (
    <Container>
      <HomeHeader />

      <PercentMeal
        percent={insidePercents}
        description="das refeições dentro da dieta"
        icon
        onPress={handleNavToStatistics}
      />

      <Title>Refeições</Title>

      <Button title="Nova refeição" icon="add" onPress={handleNavToNew} />

      {isLoading ? <Loading /> : <HomeMeanList data={data} />}
    </Container>
  );
}
