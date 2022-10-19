import AsyncStorage from '@react-native-async-storage/async-storage';
import { DAILY_COLLECTION } from '@storage/storageConfig';

export async function dailyRemove(daily: string) {
  try {
    const storage = await AsyncStorage.getItem(DAILY_COLLECTION);

    const dailies: string[] = storage ? JSON.parse(storage) : [];

    const dailiesFiltered = dailies.filter((d) => d !== daily);

    await AsyncStorage.setItem(
      DAILY_COLLECTION,
      JSON.stringify(dailiesFiltered)
    );
  } catch (e) {
    throw e;
  }
}
