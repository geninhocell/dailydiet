import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAN_COLLECTION } from '@storage/storageConfig';

import { MeanStorageDTO } from './MeanStorageDTO';

export async function meanGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAN_COLLECTION);

    const meals: MeanStorageDTO[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (e) {
    throw e;
  }
}
