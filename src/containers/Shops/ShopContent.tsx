import { getShopItems } from './api';
import { Suspense } from 'react';

export default async function ShopContent() {
  return (
    <div className="w-full flex flex-col relative overflow-auto">
      <header className="sticky top-0 bg-gray-500">
        <h2 className="text-4xl m-2">Список товаров</h2>
      </header>
      <Suspense fallback="Loading...">
        <ListItems />
      </Suspense>
      <footer className="bg-gray-500">Footer</footer>
    </div>
  );
}

const ListItems = async () => {
  const items = await getShopItems();

  return (
    <div className="flex-1 grid gap-3 grid-cols-2 m-2">
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className="border flex flex-col justify-center p-3 bg-gray-20 rounded"
          >
            <div className="text-2xl">{item.name}</div>
            <div className="text-1xl">{item.description}</div>
          </div>
        );
      })}
    </div>
  );
};
