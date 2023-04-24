import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import { sidebarItems } from '~/constants/constants';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper', 'd-flex', 'flex-column', 'align-items-start')}>
            {sidebarItems.map((item) => (
                <NavLink
                    key={item.title}
                    to={item.to}
                    className={cx('link', 'd-flex', 'align-items-center', 'my-2')}
                    style={({ isActive }) => {
                        let styles;
                        if (isActive) {
                            styles = {
                                backgroundColor: '#262d2f',
                                borderRadius: '8px',
                                color: '#fd0d9d',
                            };
                        }

                        return styles;
                    }}
                >
                    {item.icon}
                    <span className={cx('ms-1', 'mt-1')}>{item.title}</span>
                </NavLink>
            ))}
        </div>
    );
}

export default Sidebar;
