import React from 'react';
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm';
import LogoutOtherBrowserSessions from '@/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm';
import TwoFactorAuthenticationForm from '@/Pages/Profile/Partials/TwoFactorAuthenticationForm';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm';
import useTypedPage from '@/Hooks/useTypedPage';
import SectionBorder from '@/Components/SectionBorder';
import AppLayout from '@/Layouts/AppLayout';
import { Session } from '@/types';
import MainLayout from '@/Layouts/MainLayout';
import ContentHeader from '@/Components/ContentHeader';
import FormControlInput from '@/Components/FormControlInput';

interface Props {
  sessions: Session[];
  confirmsTwoFactorAuthentication: boolean;
}

export default function Show({ sessions, confirmsTwoFactorAuthentication }: Props) {
  const page = useTypedPage();

  return (
    <MainLayout title={'Profile'}>
      <div>
        <ContentHeader title="Perfil" />
        <section className="content">
          <div className="container-fluid">
            {page.props.jetstream.canUpdateProfileInformation ? (
              <div>
                <UpdateProfileInformationForm user={page.props.auth.user!} />

                <SectionBorder />
              </div>
            ) : null}

            {page.props.jetstream.canUpdatePassword ? (
              <div className="mt-10 sm:mt-0">
                <UpdatePasswordForm />

                <SectionBorder />
              </div>
            ) : null}

            {page.props.jetstream.canManageTwoFactorAuthentication ? (
              <div className="mt-10 sm:mt-0">
                <TwoFactorAuthenticationForm
                  requiresConfirmation={confirmsTwoFactorAuthentication}
                />

                <SectionBorder />
              </div>
            ) : null}

            <div className="mt-10 sm:mt-0">
              <LogoutOtherBrowserSessions sessions={sessions} />
            </div>

            {page.props.jetstream.hasAccountDeletionFeatures ? (
              <>
                <SectionBorder />

                <div className="mt-10 sm:mt-0">
                  <DeleteUserForm />
                </div>
              </>
            ) : null}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

