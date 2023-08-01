import {useDispatch, useSelector} from 'react-redux';
import {toggleSidebarMenu} from '@/store/reducers/ui';
import {addWindowClass, removeWindowClass, sleep} from '@/utils/helpers';
import Header from '@/Modules/Header/Header';
import ControlSidebar from '@/Modules/control-sidebar/ControlSidebar';
import Footer from '@/Modules/footer/Footer';
import MenuSidebar from '@/Modules/menu-sidebar/MenuSidebar';
import { Head } from '@inertiajs/react';
import React, {useState, useEffect, useCallback, PropsWithChildren} from 'react';
import { PfImage } from '@profabric/react-components';
import useTypedPage from '@/Hooks/useTypedPage';

interface Props {
    title: string;    
  }
export default function MainLayout({
    title,
    children,
  }: PropsWithChildren<Props>) 
  {
    const dispatch = useDispatch();
    const menuSidebarCollapsed = useSelector(
      (state: any) => state.ui.menuSidebarCollapsed
    );
    const controlSidebarCollapsed = useSelector(
      (state: any) => state.ui.controlSidebarCollapsed
    );
    const screenSize = useSelector((state: any) => state.ui.screenSize);
    const authentication = useTypedPage();//useSelector((state: any) => state.auth.authentication);
    const [isAppLoaded, setIsAppLoaded] = useState(false);
  
    const handleToggleMenuSidebar = () => {
      dispatch(toggleSidebarMenu());
    };
  
    useEffect(() => {
      setIsAppLoaded(Boolean(authentication.props.auth));
    }, [authentication]);
  
    useEffect(() => {
      removeWindowClass('register-page');
      removeWindowClass('login-page');
      removeWindowClass('hold-transition');
  
      addWindowClass('sidebar-mini');
  
      // fetchProfile();
      return () => {
        removeWindowClass('sidebar-mini');
      };
    }, []);
  
    useEffect(() => {
      removeWindowClass('sidebar-closed');
      removeWindowClass('sidebar-collapse');
      removeWindowClass('sidebar-open');
      if (menuSidebarCollapsed && screenSize === 'lg') {
        console.log('lg');
        addWindowClass('sidebar-collapse');
      } else if (menuSidebarCollapsed && screenSize === 'xs') {
        console.log('xs');
        addWindowClass('sidebar-open');
      } else if (!menuSidebarCollapsed && screenSize !== 'lg') {
        console.log('lg');
        addWindowClass('sidebar-closed');
        addWindowClass('sidebar-collapse');
      }
    }, [screenSize, menuSidebarCollapsed]);
  
    useEffect(() => {
      if (controlSidebarCollapsed) {
        removeWindowClass('control-sidebar-slide-open');
      } else {
        addWindowClass('control-sidebar-slide-open');
      }
    }, [screenSize, controlSidebarCollapsed]);
  
    
    const getAppTemplate = useCallback(() => {
      if (!isAppLoaded) {
        return (
          <div className="preloader flex-column justify-content-center align-items-center">
            <PfImage
              className="animation__shake"
              src="/img/logo.png"
              alt="AdminLTELogo"
              height={60}
              width={60}
            />
          </div>
        );
      }
      return (
        <>
        <Head title={title} />
          <Header />
  
          <MenuSidebar />
  
          <div className="content-wrapper">
            <div className="pt-3" />
            <section className="content">
              {children}
            </section>
          </div>
          <Footer />
          <ControlSidebar />
          <div
            id="sidebar-overlay"
            role="presentation"
            onClick={handleToggleMenuSidebar}
            onKeyDown={() => {}}
          />
        </>
      );
    }, [isAppLoaded]);
  
    return <div className="wrapper">{getAppTemplate()}</div>;
  };
