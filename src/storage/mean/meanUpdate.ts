import { MeanStorageDTO } from './MeanStorageDTO';
import { meanCreate } from './meanCreate';
import { meanRemove } from './meanRemove';

export async function meanUpdate(
  oldMean: MeanStorageDTO,
  updateMean: MeanStorageDTO
) {
  try {
    await meanRemove(oldMean);
    await meanCreate(updateMean);
  } catch (e) {
    throw e;
  }
}
