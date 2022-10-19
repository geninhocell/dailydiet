import AsyncStorage from '@react-native-async-storage/async-storage';
import { dailyCreate } from '@storage/daily/dailyCreate';
import { MEAN_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

import { MeanStorageDTO } from './MeanStorageDTO';
import { meanGetAllByDaily } from './meanGetAllByDaily';

export async function meanCreate(newMean: MeanStorageDTO) {
  try {
    const meals = await meanGetAllByDaily(newMean.created_at);

    const meanAlreadyExists = meals.filter(
      (mean) => mean.name === newMean.name
    );

    if (meanAlreadyExists.length > 0) {
      throw new AppError('Essa refeição já foi cadastrada para essa data.');
    }

    await dailyCreate(newMean.created_at);

    await AsyncStorage.setItem(
      `${MEAN_COLLECTION}-${newMean.created_at}`,
      JSON.stringify([...meals, newMean])
    );
  } catch (e) {
    throw e;
  }
}
