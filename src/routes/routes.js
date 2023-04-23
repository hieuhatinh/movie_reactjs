import routes from '~/configs/routes';
import History from '~/pages/History';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Setting from '~/pages/Setting';
import Register from '~/pages/Register';

const publicRoutes = [
    {
        path: routes.home,
        component: Home,
    },
    {
        path: routes.profile,
        component: Profile,
        protected: true,
    },
    {
        path: routes.setting,
        component: Setting,
    },
    {
        path: routes.history,
        component: History,
    },
    {
        path: routes.search,
        component: Search,
    },
    {
        path: routes.login,
        component: Login,
    },
    {
        path: routes.register,
        component: Register,
    },
];

export { publicRoutes };
