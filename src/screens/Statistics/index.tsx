import { Header } from '@components/Header';
import { PercentMeal } from '@components/PercentMeal';
import { StatisticsCard } from '@components/StatisticsCard';
import { dailyGetAll } from '@storage/daily/dailyGetAll';
import { meanGetAllByDaily } from '@storage/mean/meanGetAllByDaily';
import { AppError } from '@utils/AppError';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components/native';

import {
  CardsContainer,
  Container,
  Content,
  HeaderContent,
  Title,
} from './styles';

export function Statistics() {
  const [insidePercents, setInsidePercents] = useState(0);
  const [outside, setOutside] = useState(0);
  const [inside, setInside] = useState(0);
  const [total, setTotal] = useState(0);
  const [sequency, setSequency] = useState(0);

  const { COLORS } = useTheme();

  useEffect(() => {
    async function loadMeals() {
      try {
        const dailies = await dailyGetAll();

        let insides = 0;
        let outsides = 0;
        let totalMeals = 0;
        let sequencyInside = 0;

        for (const daily of dailies) {
          const storage = await meanGetAllByDaily(daily);
          totalMeals += storage.length;
          const insidesCurrent = storage.filter(
            (mean) => mean.inside_the_diet
          ).length;
          insides += insidesCurrent;
          outsides += storage.filter((mean) => !mean.inside_the_diet).length;
          if (sequencyInside < insidesCurrent) {
            sequencyInside = insidesCurrent;
          }
        }
        if (totalMeals !== 0) {
          const percent = Number(((insides / totalMeals) * 100).toFixed(2));
          setInsidePercents(percent);
        } else {
          setInsidePercents(0);
        }
        setOutside(outsides);
        setInside(insides);
        setTotal(outsides + insides);
        setSequency(sequencyInside);
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
      }
    }

    loadMeals();
  }, []);

  return (
    <Container inside={insidePercents > 30}>
      <HeaderContent>
        <Header />

        <PercentMeal
          percent={insidePercents}
          description="das refeições dentro da dieta"
          onPress={() => {}}
        />
      </HeaderContent>

      <Content>
        <Title>Estatísticas gerais</Title>

        <StatisticsCard
          title={sequency}
          description="melhor sequência de pratos dentro da dieta"
          width="full"
        />

        <StatisticsCard
          title={total}
          description="refeições registradas"
          width="full"
        />

        <CardsContainer>
          <StatisticsCard
            title={inside}
            description="refeições dentro da dieta"
            color={COLORS.GREEN_LIGHT}
          />

          <StatisticsCard
            title={outside}
            description="refeições fora da dieta"
            color={COLORS.RED_LIGHT}
          />
        </CardsContainer>
      </Content>
    </Container>
  );
}
