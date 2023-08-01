import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function DangerButton({
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <button
      {...props}
      className={classNames(
        'btn btn-danger',
        props.className,
      )}
    >
      {children}
    </button>
  );
}
