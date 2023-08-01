import { Link, useForm, Head } from '@inertiajs/react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import AuthenticationCard from '@/Components/AuthenticationCard';
import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import FormControlInput from '@/Components/FormControlInput';

interface Props {
  canResetPassword: boolean;
  status: string;
}

export default function Login({ canResetPassword, status }: Props) {
  const route = useRoute();
  const form = useForm({
    email: '',
    password: '',
    remember: '',
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('login'), {
      onFinish: () => form.reset('password'),
    });
  }

  return (

    <AuthenticationCard title="Sign in to start your session">
      <Head title="login" />

      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
      )}

      <form onSubmit={onSubmit}>

        <FormControlInput
          label="Email"
          name="email"
          type="email"
          colclass="col-md-auto"
          value={form.data.email}
          onChange={e => form.setData('email', e.currentTarget.value)}
          error={form.errors.email}
        />
        <FormControlInput
          label="Password"
          name="password"
          type="password"
          colclass="col-md-auto"
          value={form.data.password}
          onChange={e => form.setData('password', e.currentTarget.value)}
          error={form.errors.password}
        />

        <div>
          {canResetPassword && (
            <div className="mb-1">
              <Link href={route('password.request')}>
                Forgot your password?
              </Link>
            </div>
          )}

          <div className="mb-0">
            <Link href={route('register')}>Need an account?</Link>
            <div className="row">
              <div className="col-8">
                <Checkbox
                  name="remember"
                  checked={form.data.remember === 'on'}
                  onChange={e =>
                    form.setData(
                      'remember',
                      e.currentTarget.checked ? 'on' : '',
                    )
                  }
                />
                <span>Remember me</span>
              </div>
              <div className="col-8">
                <PrimaryButton
                  className={classNames('mb-2', {
                    'opacity-25': form.processing,
                  })}
                  disabled={form.processing}
                >
                  Log in
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </form>
    </AuthenticationCard>

  );
}
