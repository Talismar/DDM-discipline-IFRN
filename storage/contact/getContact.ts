import AsyncStorage from "@react-native-async-storage/async-storage";
import { TELEPHONE_BOOK } from "../storageConfig";

export async function contactGetAll() {
  try {
    const storage = await AsyncStorage.getItem(TELEPHONE_BOOK);

    const contact: string[] = storage ? JSON.parse(storage) : [];

    return contact;
  } catch (error) {
    throw error;
  }
}
