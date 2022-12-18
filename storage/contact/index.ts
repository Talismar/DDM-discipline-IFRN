import AsyncStorage from "@react-native-async-storage/async-storage";
import { TELEPHONE_BOOK } from "../storageConfig";
import { contactGetAll } from "./getContact";

export async function NewContactStorage(
  id: number,
  name: string,
  number: string
) {
  try {
    const storedContact = await contactGetAll();

    const storage = JSON.stringify([
      ...storedContact,
      `${id}-${name}-${number}`,
    ]);

    await AsyncStorage.setItem(TELEPHONE_BOOK, storage);
  } catch (error) {
    throw error;
  }
}
