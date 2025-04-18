import { fetchUsers } from '@/containers/Users/api';
import { Suspense } from 'react';

export default function UsersContent() {
  return (
    <div className="w-full flex flex-col relative overflow-auto">
      <header className="sticky top-0 bg-gray-500">
        <h2 className="text-4xl m-2">Список пользователей</h2>
      </header>
      <Suspense fallback="Loading...">
        <ListItems />
      </Suspense>
      <footer className="bg-gray-500">Footer</footer>
    </div>
  );
}

const ListItems = async () => {
  const items = await fetchUsers();

  return (
    <div className="flex-1 grid gap-2 grid-cols-3 p-2">
      {items.map((item) => {
        return (
          <div key={String(item.id)} className="flex p-1">
            <div className="text-1xl">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};
