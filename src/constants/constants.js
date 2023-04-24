import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faGear, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

import routes from '~/configs/routes';
import book from '~/assets/images/book.png';
import popcorn from '~/assets/images/popcorn.png';
import sad from '~/assets/images/sad.png';
import happy from '~/assets/images/happy.png';
import emotions from '~/assets/images/emotions.png';
import businessStrategy from '~/assets/images/business-strategy.png';

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
    {
        title: 'Đăng nhập',
        to: routes.login,
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} width={24} height={24} />,
    },
];

export const navigationHomeItems = [
    {
        title: 'All',
        image: popcorn,
        to: routes.home,
    },
    {
        title: 'Comedy',
        image: emotions,
        to: routes.comedyGenre,
    },
    {
        title: 'Fantasy',
        image: businessStrategy,
        to: routes.fantasyGenre,
    },
    {
        title: 'Drama',
        image: sad,
        to: routes.dramaGenre,
    },
    {
        title: 'History',
        image: book,
        to: routes.historyGenre,
    },
    {
        title: 'Horror',
        image: happy,
        to: routes.horrorGenre,
    },
];
