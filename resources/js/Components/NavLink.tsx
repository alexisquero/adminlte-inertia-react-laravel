import { Link } from '@inertiajs/react';
import React, { PropsWithChildren } from 'react';

interface Props {
  href: string;
  active?: boolean;
}

export default function NavLink({
  active,
  href,
  children,
}: PropsWithChildren<Props>) {
  const classes = active
    ? 'nav-link active'
    : 'nav-link';

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
