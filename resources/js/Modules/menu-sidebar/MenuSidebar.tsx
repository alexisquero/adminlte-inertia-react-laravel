import React from 'react';
import { useSelector } from 'react-redux';
import { Link, router } from '@inertiajs/react';
import MenuItem from '../../Components/menu-item/MenuItem';
import { PfImage } from '@profabric/react-components';
import styled from 'styled-components';
import useTypedPage from '@/Hooks/useTypedPage';
import NavLink from '@/Components/NavLink';
import useRoute from '@/Hooks/useRoute';
//import {SidebarSearch} from '@Components/sidebar-search/SidebarSearch';
//import i18n from '@app/utils/i18n';

export interface IMenuItem {
  name: string;
  icon?: string;
  path?: string;
  children?: Array<IMenuItem>;
}

export const MENU: IMenuItem[] = [
  {
    name: 'dashboard',
    icon: 'fas fa-tachometer-alt nav-icon',
    path: 'dashboard',
  },

  {
    name: 'blank',
    icon: 'fas fa-wrench nav-icon',
    path: 'blank',
  },
  {
    name: 'Main Menu',
    icon: 'fas fa-folder',
    children: [
      {
        name: 'Sub Menu',
        icon: 'far fa-address-book',
        path: 'sub-menu-1',
      },
      {
        name: 'Blank',
        icon: 'fas fa-file',
        path: 'sub-blank',
      },
    ],
  },
];

const StyledBrandImage = styled(PfImage)`
  float: left;
  line-height: 0.8;
  margin: -1px 8px 0 6px;
  opacity: 0.8;
  --pf-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23) !important;
`;

const StyledUserImage = styled(PfImage)`
  --pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;
`;

const MenuSidebar = () => {
  //const authentication = useSelector((state: any) => state.auth.authentication);
  const page = useTypedPage();
  const sidebarSkin = useSelector((state: any) => state.ui.sidebarSkin);
  const menuItemFlat = useSelector((state: any) => state.ui.menuItemFlat);
  const menuChildIndent = useSelector((state: any) => state.ui.menuChildIndent);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link href="/" className="brand-link">
        <StyledBrandImage
          src="/img/logo.png"
          alt="AdminLTE Logo"
          width={33}
          height={33}
          rounded
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </Link>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <StyledUserImage
              src={page.props.auth.user?.profile_photo_url}
              fallbackSrc="/img/default-profile.png"
              alt="User"
              width={34}
              height={34}
              rounded
            />
          </div>
          <div className="info">
            <Link href="user/profile" className="d-block">
              {page.props.auth.user?.email}
            </Link>
          </div>
        </div>

        <div className="form-inline">{/* <SidebarSearch /> */}</div>

        <nav className="mt-2" style={{ overflowY: 'hidden' }}>
          <ul
            className={`nav nav-pills nav-sidebar flex-column${
              menuItemFlat ? ' nav-flat' : ''
            }${menuChildIndent ? ' nav-child-indent' : ''}`}
            role="menu"
          >
            {MENU.map((menuItem: IMenuItem) => (
              <MenuItem
                key={menuItem.name + menuItem.path}
                menuItem={menuItem}
              />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default MenuSidebar;
