import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { InsideMeal, InsideMealResult } from '@components/InsideMeal';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MeanStorageDTO } from '@storage/mean/MeanStorageDTO';
import { meanCreate } from '@storage/mean/meanCreate';
import { meanGetByDailyAndMean } from '@storage/mean/meanGetByDailyAndMean';
import { meanUpdate } from '@storage/mean/meanUpdate';
import { AppError } from '@utils/AppError';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { Container, Form, FormHorizontal, HeaderContent } from './styles';

type RouteParams = {
  daily?: string;
  mean?: string;
};

export function NewMeal() {
  const [isUpdate, setIsUpdate] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [hour, setHour] = useState('');
  const [oldMean, setOldMean] = useState({} as MeanStorageDTO);
  const [insideTheDiet, setInsideTheDiet] = useState<InsideMealResult>('void');

  const navigation = useNavigation();
  const route = useRoute();

  async function handleCreate() {
    try {
      if (!name) {
        throw new AppError('Preencha o nome da refeição.');
      }
      if (!createdAt) {
        throw new AppError('Preencha a data da refeição.');
      }
      if (!hour) {
        throw new AppError('Preencha a hora da refeição.');
      }
      if (insideTheDiet === 'void') {
        throw new AppError('Preencha! Está dentro da dieta?.');
      }
      if (!description) {
        throw new AppError('Preencha a descrição da dieta?.');
      }

      const inside_the_diet = insideTheDiet === 'true';
      await meanCreate({
        name,
        description,
        created_at: createdAt,
        hour,
        inside_the_diet,
      });

      navigation.navigate('createMeanDone', { inside_the_diet });
    } catch (e) {
      if (e instanceof AppError) {
        Alert.alert('Nova refeição', e.message);
      } else {
        console.error(e);
      }
    }
  }

  async function handleUpdate() {
    try {
      if (!name) {
        throw new AppError('Preencha o nome da refeição.');
      }
      if (!createdAt) {
        throw new AppError('Preencha a data da refeição.');
      }
      if (!hour) {
        throw new AppError('Preencha a hora da refeição.');
      }
      if (insideTheDiet === 'void') {
        throw new AppError('Preencha! Está dentro da dieta?.');
      }
      if (!description) {
        throw new AppError('Preencha a descrição da dieta?.');
      }

      const inside_the_diet = insideTheDiet === 'true';
      await meanUpdate(oldMean, {
        name,
        description,
        created_at: createdAt,
        hour,
        inside_the_diet,
      });

      navigation.navigate('createMeanDone', { inside_the_diet });
    } catch (e) {
      if (e instanceof AppError) {
        Alert.alert('Atualizar refeição', e.message);
      } else {
        console.error(e);
      }
    }
  }

  useEffect(() => {
    async function load() {
      if (route?.params) {
        const { daily, mean } = route.params as RouteParams;
        if (daily && mean) {
          const meanFind = await meanGetByDailyAndMean(daily, mean);

          console.log(meanFind);

          if (meanFind) {
            setOldMean(meanFind);
            setName(meanFind.name);
            setDescription(meanFind.description);
            setCreatedAt(meanFind.created_at);
            setHour(meanFind.hour);
            setInsideTheDiet(meanFind.inside_the_diet ? 'true' : 'false');
            setIsUpdate(true);
          }
        }
      }
    }

    load();
  }, []);

  return (
    <Container>
      <HeaderContent>
        <Header title={isUpdate ? 'Editar refeição' : 'Nova refeição'} />
      </HeaderContent>

      <Form>
        <Input label="Nome" value={name} onChangeText={setName} />

        <Input
          label="Descrição"
          multi
          value={description}
          onChangeText={setDescription}
        />

        <FormHorizontal>
          <Input
            label="Data"
            width="middle"
            value={createdAt}
            onChangeText={setCreatedAt}
          />

          <Input
            label="Hora"
            width="middle"
            value={hour}
            onChangeText={setHour}
          />
        </FormHorizontal>

        <InsideMeal result={insideTheDiet} onResult={setInsideTheDiet} />

        <Button
          title={isUpdate ? 'Salvar alterações' : 'Cadastrar refeição'}
          onPress={isUpdate ? handleUpdate : handleCreate}
        />
      </Form>
    </Container>
  );
}
