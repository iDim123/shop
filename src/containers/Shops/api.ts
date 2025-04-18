import { ShopItem } from '@/models';
import { sleep } from '@/utils';

function createInitialTodos() {
  const shopItems: ShopItem[] = [
    {
      id: '1',
      name: 'Умные часы SmartPro X',
      category: 'Электроника',
      description: 'Умные часы с мониторингом здоровья и NFC',
      cost: 24999,
      createdAt: '2023-01-15',
      updatedAt: '2023-05-20',
    },
    {
      id: '2',
      name: 'Беспроводные наушники SoundAir',
      category: 'Электроника',
      description: 'Наушники с активным шумоподавлением',
      cost: 12999,
      createdAt: '2023-03-10',
    },
    {
      id: '3',
      name: 'Электрический чайник RapidBoil',
      category: 'Бытовая техника',
      description: 'Чайник с быстрым нагревом и подсветкой',
      cost: 4599,
      updatedAt: '2023-06-05',
    },
    {
      id: '4',
      name: 'Фитнес-браслет HealthTrack 3',
      category: 'Спорт',
      description: 'Трекер активности с пульсометром',
      cost: 7999,
      createdAt: '2023-02-28',
      updatedAt: '2023-04-15',
    },
    {
      id: '5',
      name: "Книга 'Искусство программирования'",
      category: 'Книги',
      description: 'Классический труд Дональда Кнута',
      cost: 5999,
      createdAt: '2022-11-10',
    },
    {
      id: '6',
      name: 'Геймпад UltraGame X',
      category: 'Игры',
      description: 'Беспроводной геймпад для ПК и консолей',
      cost: 8999,
    },
    {
      id: '7',
      name: 'Кофемашина CoffeeMaster 2000',
      category: 'Бытовая техника',
      description: 'Автоматическая кофемашина с жерновой помолом',
      cost: 34999,
      createdAt: '2023-01-05',
      updatedAt: '2023-07-12',
    },
    {
      id: '8',
      name: 'Рюкзак TravelComfort',
      category: 'Аксессуары',
      description: 'Водонепроницаемый рюкзак с USB-портом',
      cost: 5999,
    },
    {
      id: '9',
      name: 'Смартфон MegaPhone 12',
      category: 'Электроника',
      description: 'Флагманский смартфон с камерой 108 МП',
      cost: 89999,
      createdAt: '2023-04-01',
    },
    {
      id: '10',
      name: 'Электронная книга ReadEasy Pro',
      category: 'Электроника',
      description: 'Читалка с экраном E Ink и подсветкой',
      cost: 14999,
      createdAt: '2022-12-20',
      updatedAt: '2023-03-15',
    },
  ];
  return shopItems;
}


export const getShopItems = async (): Promise<ShopItem[]> => {
  await sleep(500);
  return new Promise((resolve) => resolve(createInitialTodos()));
};
