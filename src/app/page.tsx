import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <div>Hello</div>
      <div>
        <Link href={'/lists/local'}>Lists</Link>
      </div>
    </div>
  );
}
