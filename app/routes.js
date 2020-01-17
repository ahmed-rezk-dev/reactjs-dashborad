// core components/views for Admin layout
// import HomePage from './containers/MainPage/Loadable';
import RolesPage from 'containers/Roles/Loadable';
import DashboardPage from './containers/Dashboard/Loadable';
import UserProfile from './containers/UserProfile/Loadable';

const dashboardRoutes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		rtlName: 'لوحة القيادة',
		icon: 'dashboard',
		component: DashboardPage,
		layout: '/admin',
	},
	{
		path: '/profile',
		name: 'User Profile',
		rtlName: 'ملف تعريفي للمستخدم',
		icon: 'user',
		component: UserProfile,
		layout: '/admin',
	},
	{
		path: '/users/groups',
		name: 'Users Groups',
		rtlName: 'ملف تعريفي للمستخدم',
		icon: 'like',
		component: RolesPage,
		layout: '/admin',
	},
	//   {
	//     path: '/table',
	//     name: 'Table List',
	//     rtlName: 'قائمة الجدول',
	//     icon: 'content_paste',
	//     component: TableList,
	//     layout: '/admin',
	//   },
	//   {
	//     path: '/typography',
	//     name: 'Typography',
	//     rtlName: 'طباعة',
	//     icon: LibraryBooks,
	//     component: Typography,
	//     layout: '/admin',
	//   },
	//   {
	//     path: '/icons',
	//     name: 'Icons',
	//     rtlName: 'الرموز',
	//     icon: BubbleChart,
	//     component: Icons,
	//     layout: '/admin',
	//   },
	//   {
	//     path: '/maps',
	//     name: 'Maps',
	//     rtlName: 'خرائط',
	//     icon: LocationOn,
	//     component: Maps,
	//     layout: '/admin',
	//   },
	//   {
	//     path: '/notifications',
	//     name: 'Notifications',
	//     rtlName: 'إخطارات',
	//     icon: Notifications,
	//     component: NotificationsPage,
	//     layout: '/admin',
	//   },
	//   {
	//     path: '/rtl-page',
	//     name: 'RTL Support',
	//     rtlName: 'پشتیبانی از راست به چپ',
	//     icon: Language,
	//     component: RTLPage,
	//     layout: '/rtl',
	//   },
	//   {
	//     path: '/upgrade-to-pro',
	//     name: 'Upgrade To PRO',
	//     rtlName: 'التطور للاحترافية',
	//     icon: Unarchive,
	//     component: UpgradeToPro,
	//     layout: '/admin',
	//   },
];

export default dashboardRoutes;
