import ActiveLink from '@/components/ActiveLink';

const links = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Local',
    path: '/lists/local',
  },
  {
    label: 'JSONplaceholder',
    path: '/lists/users',
  },
];

export default function Sidebar() {
  return (
    <div className="w-[300px] bg-gray-400 flex flex-col gap-1 p-3">
      <nav>
        <ul className="m-0 p-0">
          {links.map(({ label, path }) => {
            return (
              <li key={`${label}-${path}`}>
                <ActiveLink href={path}>{label}</ActiveLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
