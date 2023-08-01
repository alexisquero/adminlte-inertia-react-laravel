import React, { PropsWithChildren } from 'react';

interface Props {
  message?: string;
  className?: string;
}

export default function InputError({
  message,
  className,
  children,
}: PropsWithChildren<Props>) {
  if (!message && !children) {
    return null;
  }
  return (
    <div className={className}>
      <p className="text-sm-start text-danger">
        {message || children}
      </p>
    </div>
  );
}
