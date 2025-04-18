import { UserItem } from '@/models';
import { sleep } from '@/utils';

const baseUrl = 'https://jsonplaceholder.typicode.com/users';

export async function fetchUsers(): Promise<UserItem[]> {
  'use server';
  const res = await fetch(baseUrl);
  await sleep(500);
  return await res.json();
}
