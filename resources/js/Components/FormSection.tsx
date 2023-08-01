import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import SectionTitle from '@/Components/SectionTitle';

interface Props {
  title: string;
  description?: string;
  renderActions?(): JSX.Element;
  onSubmit(): void;
}

export default function FormSection({
  onSubmit,
  renderActions,
  title,
  description,
  children,
}: PropsWithChildren<Props>) {
  const hasActions = !!renderActions;

  return (
    <div className="bg-white shadow rounded-lg d-block d-sm-flex mb-3">
      <div className="p-4 p-md-5">
        <h3 className="mb-4">{title}</h3>
        <form
          onSubmit={e => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="row">{children}</div>

          {hasActions && <div>{renderActions?.()}</div>}
        </form>
      </div>
    </div>
  );
}
