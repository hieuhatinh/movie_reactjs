import classNames from 'classnames/bind';

import styles from './NavigationHome.module.scss';
import { NavLink } from 'react-router-dom';
import { navigationHomeItems } from '~/constants/constants';

const cx = classNames.bind(styles);

function NavigationHome() {
    return (
        <div className="row">
            {navigationHomeItems.map((item) => (
                <div className="col col-2">
                    <NavLink
                        key={item.title}
                        to={item.to}
                        className={cx('badge-pill', 'd-flex', 'justify-content-center', 'align-items-center')}
                        style={({ isActive }) => {
                            return { backgroundColor: isActive ? 'var(--primary)' : '' };
                        }}
                    >
                        <img src={item.image} alt={item.title} className="me-2" width={20} height={20} />
                        {item.title}
                    </NavLink>
                </div>
            ))}
        </div>
    );
}

export default NavigationHome;
