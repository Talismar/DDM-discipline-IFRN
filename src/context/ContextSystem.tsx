import React from "react";
import { createContext } from "react";
import { API } from "../services/api";

interface ISellerList {
  id: number;
  name: string;
  listsystem_set: {
    id?: number;
    name?: string;
    seller?: number;
    purchase_set?: {
      id?: number;
      amount_of_liters?: string;
      name_list?: number;
    }[];
  }[];
}

interface MainContextData {
  sellerList: ISellerList[];
  setSellerList: React.Dispatch<React.SetStateAction<ISellerList[]>>;
  systemPrice: number;
  fetchSellerList: () => void;
  fetchSystemSettings: () => void;
}

export const CoreContext = createContext({} as MainContextData);

type Props = {
  children: JSX.Element;
};

function CoreProvider({ children }: Props) {
  const [sellerList, setSellerList] = React.useState<ISellerList[]>([]);
  const [systemPrice, setSystemPrice] = React.useState(0);

  function fetchSellerList() {
    API.get_seller_list().then((res) => {
      setSellerList(res.data);
    });
  }

  function fetchSystemSettings() {
    // Get Price Per Liter
    API.get_system_settings().then((res) => {
      setSystemPrice(res.data[0].price_per_liter);
    });
  }

  React.useEffect(() => {
    fetchSystemSettings();
    console.log("Setting System Settings");
  }, []);

  return (
    <CoreContext.Provider
      value={{
        sellerList,
        setSellerList,
        fetchSellerList,
        fetchSystemSettings,
        systemPrice,
      }}
    >
      {children}
    </CoreContext.Provider>
  );
}

export default CoreProvider;
