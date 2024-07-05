// menu import
import samplePage from './sample-page';
import pages from './pages';
import dashboard from './dashboard';

// types
import { NavItemType } from 'types';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [dashboard, samplePage, pages]
};

export default menuItems;
