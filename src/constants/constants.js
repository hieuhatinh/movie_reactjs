import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faGear, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

import routes from '~/configs/routes';

// list item sidebar
export const sidebarItems = [
    {
        title: 'Trang chủ',
        to: routes.home,
        icon: <FontAwesomeIcon icon={faHouse} width={24} height={24} />,
    },
    {
        title: 'Trang cá nhân',
        to: routes.profile,
        icon: <FontAwesomeIcon icon={faUser} width={24} height={24} />,
    },
    {
        title: 'Cài đặt',
        to: routes.setting,
        icon: <FontAwesomeIcon icon={faGear} width={24} height={24} />,
    },
    {
        title: 'Lịch sử',
        to: routes.history,
        icon: <FontAwesomeIcon icon={faClock} width={24} height={24} />,
    },
    {
        title: 'Tìm kiếm',
        to: routes.search,
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} width={24} height={24} />,
    },
];
