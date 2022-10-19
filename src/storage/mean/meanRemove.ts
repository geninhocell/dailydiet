import AsyncStorage from '@react-native-async-storage/async-storage';
import { dailyRemove } from '@storage/daily/dailyRemove';
import { MEAN_COLLECTION } from '@storage/storageConfig';

import { MeanStorageDTO } from './MeanStorageDTO';

export async function meanRemove(removeMean: MeanStorageDTO) {
  try {
    const storage = await AsyncStorage.getItem(
      `${MEAN_COLLECTION}-${removeMean.created_at}`
    );
    await AsyncStorage.removeItem(
      `${MEAN_COLLECTION}-${removeMean.created_at}`
    );

    const allMeals: MeanStorageDTO[] = storage ? JSON.parse(storage) : [];

    const meals = allMeals.filter((m) => m.name !== removeMean.name);

    if (meals.length === 0) {
      await dailyRemove(removeMean.created_at);
    } else {
      await AsyncStorage.setItem(
        `${MEAN_COLLECTION}-${removeMean.created_at}`,
        JSON.stringify(meals)
      );
    }
  } catch (e) {
    throw e;
  }
}
