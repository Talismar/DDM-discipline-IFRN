import axios from "axios";

export const instance = axios.create({
  baseURL: "http://34.203.200.182:8000/",
});

export interface ISeller {
  name: string;
}

interface IUser {
  name: string;
  photo: string;
  email: string;
  password: string;
}

interface ISellerList {
  name: string;
  seller: number;
}

interface IPurchase {
  amount_of_liters: string;
  name_list: number;
}

interface ISystemSettings {
  id: number;
  price_per_liter: number;
}

// local
const url_json_server = "http://10.112.4.0:3001/";

export const API = {
  get_seller_list: () => instance.get("SellerList/"),
  get_system_list: instance.get("SystemList/"),
  get_purchase_list: instance.get("purchase/"),
  delete_seller: (id: number) => instance.delete("SellerList/" + id + "/"),
  post_seller: (data: ISeller) => instance.post("SellerList/", data),
  post_newSellerList: (data: ISellerList) => instance.post("SystemList/", data),
  post_newPurchaseIntoList: (data: IPurchase) =>
    instance.post("purchase/", data),

  // USERS
  get_user_list: () => axios.get(url_json_server + "users/"),
  post_user: (data: IUser) => axios.post(url_json_server + "users/", data),
  put_user: (id: number, data: IUser) =>
    axios.put(`${url_json_server}users/${id}/`, data),

  // System Settings
  get_system_settings: () => axios.get(url_json_server + "system-settings/"),
  put_system_settings: (data: ISystemSettings) =>
    axios.put(url_json_server + "system-settings/" + data.id, {
      price_per_liter: data.price_per_liter,
    }),
};
