import AsyncStorage from "@react-native-async-storage/async-storage";
import { TELEPHONE_BOOK } from "../storageConfig";
import { contactGetAll } from "./getContact";

export async function removeContact(id: number) {
  try {
    const storedContact = await contactGetAll();

    const newStored = storedContact.filter((contact) => {
      if (parseInt(contact.split("-")[0]) === id) {
        // console.log(contact);
      } else {
        return contact;
      }
    });

    const storage = JSON.stringify([...newStored]);

    await AsyncStorage.setItem(TELEPHONE_BOOK, storage);
  } catch (error) {
    throw error;
  }
}
