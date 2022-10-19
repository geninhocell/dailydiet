import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAN_COLLECTION } from '@storage/storageConfig';

import { MeanStorageDTO } from './MeanStorageDTO';

export async function meanGetByDailyAndMean(daily: string, mean: string) {
  try {
    const storage = await AsyncStorage.getItem(`${MEAN_COLLECTION}-${daily}`);

    const meals: MeanStorageDTO[] = storage ? JSON.parse(storage) : [];

    return meals.find((m) => m.name === mean);
  } catch (e) {
    throw e;
  }
}
