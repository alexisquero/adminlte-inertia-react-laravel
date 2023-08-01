import { useForm } from '@inertiajs/react';
import classNames from 'classnames';
import React, { useRef } from 'react';
import useRoute from '@/Hooks/useRoute';
import ActionMessage from '@/Components/ActionMessage';
import FormSection from '@/Components/FormSection';
import PrimaryButton from '@/Components/PrimaryButton';
import FormControlInput from '@/Components/FormControlInput';

export default function UpdatePasswordForm() {
  const route = useRoute();
  const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
  });
  const passwordRef = useRef<HTMLInputElement>(null);
  const currentPasswordRef = useRef<HTMLInputElement>(null);

  function updatePassword() {
    form.put(route('user-password.update'), {
      errorBag: 'updatePassword',
      preserveScroll: true,
      onSuccess: () => form.reset(),
      onError: () => {
        if (form.errors.password) {
          form.reset('password', 'password_confirmation');
          passwordRef.current?.focus();
        }

        if (form.errors.current_password) {
          form.reset('current_password');
          currentPasswordRef.current?.focus();
        }
      },
    });
  }

  return (
    <FormSection
      onSubmit={updatePassword}
      title={'Update Password'}
      description={
        'Ensure your account is using a long, random password to stay secure.'
      }
      renderActions={() => (
        <>
          <ActionMessage on={form.recentlySuccessful} className="mr-3">
            Saved.
          </ActionMessage>

          <PrimaryButton
            className={classNames({ 'opacity-25': form.processing })}
            disabled={form.processing}
          >
            Save
          </PrimaryButton>
        </>
      )}
    >
      <FormControlInput
        label="Current Password"
        name="current_password"
        type="password"
        colclass="col-md-6"
        ref={currentPasswordRef}
        value={form.data.current_password}
        onChange={e => form.setData('current_password', e.currentTarget.value)}
        autoComplete="current-password"
        error={form.errors.current_password}
      />

      <FormControlInput
        label="New Password"
        name="password"
        type="password"
        colclass="col-md-6"
        value={form.data.password}
        onChange={e => form.setData('password', e.currentTarget.value)}
        autoComplete="new-password"
        ref={passwordRef}
        error={form.errors.password}
      />

      <FormControlInput
        label="Confirm Password"
        name="password_confirmation"
        type="password"
        colclass="col-md-6"
        value={form.data.password_confirmation}
        onChange={e =>
          form.setData('password_confirmation', e.currentTarget.value)
        }
        autoComplete="new-password"
        error={form.errors.password_confirmation}
      />
    </FormSection>
  );
}
