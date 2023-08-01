import React, { PropsWithChildren } from 'react';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo';
interface Props {
  title?: string;
  
}

export default function AuthenticationCard({
  children,
  title,
}: PropsWithChildren<Props>) {
  return (
    <div className="container-login-box form-login-box">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <AuthenticationCardLogo />
          </div>

          <div className="card-body">
            <p className="login-box-msg">{title}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
