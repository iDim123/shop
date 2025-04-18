export type ShopItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  cost: number;
  createdAt?: string;
  updatedAt?: string;
};

export type UserItem = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
