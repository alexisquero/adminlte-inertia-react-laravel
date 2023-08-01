import { Link, useForm, Head } from '@inertiajs/react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import AuthenticationCard from '@/Components/AuthenticationCard';
import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import FormControlInput from '@/Components/FormControlInput';

export default function Register() {
  const page = useTypedPage();
  const route = useRoute();
  const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('register'), {
      onFinish: () => form.reset('password', 'password_confirmation'),
    });
  }

  return (
    <AuthenticationCard title="Register a new membership">
      <Head title="Register" />

      <form onSubmit={onSubmit}>
        <FormControlInput
          label="Name"
          name="name"
          type="text"
          colclass="col-md-auto"
          value={form.data.name}
          onChange={e => form.setData('name', e.currentTarget.value)}
          //required
          //autoFocus
          autoComplete="name"
          error={form.errors.name}
        />
        <FormControlInput
          label="Email"
          name="email"
          type="email"
          colclass="col-md-auto"
          value={form.data.email}
          onChange={e => form.setData('email', e.currentTarget.value)}
          //required
          error={form.errors.email}
        />

        <FormControlInput
          label="Password"
          name="password"
          type="password"
          colclass="col-md-auto"
          value={form.data.password}
          onChange={e => form.setData('password', e.currentTarget.value)}
          //required
          autoComplete="new-password"
          error={form.errors.password}
        />

        <FormControlInput
          label="Confirm Password"
          name="password_confirmation"
          type="password"
          colclass="col-md-auto"
          value={form.data.password_confirmation}
          onChange={e =>
            form.setData('password_confirmation', e.currentTarget.value)
          }
          //required
          autoComplete="new-password"
          error={form.errors.password_confirmation}
        />

        {page.props.jetstream.hasTermsAndPrivacyPolicyFeature && (
          <div className="mt-4">
            <InputLabel htmlFor="terms">
              <div className="flex items-center">
                <Checkbox
                  name="terms"
                  id="terms"
                  checked={form.data.terms}
                  onChange={e => form.setData('terms', e.currentTarget.checked)}
                  required
                />

                <div className="ml-2">
                  I agree to the
                  <a
                    target="_blank"
                    href={route('terms.show')}
                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Terms of Service
                  </a>
                  and
                  <a
                    target="_blank"
                    href={route('policy.show')}
                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
              <InputError className="mt-2" message={form.errors.terms} />
            </InputLabel>
          </div>
        )}

        <div className="flex items-center justify-end mt-4">
          <Link
            href={route('login')}
            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Already registered?
          </Link>

          <PrimaryButton
            className={classNames('btn-block', { 'opacity-25': form.processing })}
            disabled={form.processing}
          >
            Register
          </PrimaryButton>
        </div>
      </form>
    </AuthenticationCard>
  );
}
