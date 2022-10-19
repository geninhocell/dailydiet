import AsyncStorage from '@react-native-async-storage/async-storage';
import { DAILY_COLLECTION } from '@storage/storageConfig';

export async function dailyGetAll() {
  try {
    const storage = await AsyncStorage.getItem(DAILY_COLLECTION);

    const dailies: string[] = storage ? JSON.parse(storage) : [];

    return dailies;
  } catch (e) {
    throw e;
  }
}
