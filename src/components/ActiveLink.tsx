'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  children: string | React.ReactElement;
};

export default function ActiveLink(props: Props) {
  const { href, children } = props;
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link 
      href={href}
      className={cn('block', `${isActive ? 'text-blue-500' : ''}`)}
    >
      {children}
    </Link>
  );
}
