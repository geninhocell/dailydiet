import AsyncStorage from '@react-native-async-storage/async-storage';
import { DAILY_COLLECTION } from '@storage/storageConfig';

import { dailyGetAll } from './dailyGetAll';

export async function dailyCreate(newDaily: string) {
  try {
    const dailies = await dailyGetAll();

    const dailyAlreadyExists = dailies.includes(newDaily);

    if (dailyAlreadyExists) {
      return;
    }

    await AsyncStorage.setItem(
      DAILY_COLLECTION,
      JSON.stringify([...dailies, newDaily])
    );
  } catch (e) {
    throw e;
  }
}
