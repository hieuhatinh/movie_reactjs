import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faStar } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './SpecialMovieSuggestions.module.scss';

const cx = classNames.bind(styles);

function SpecialMovieSuggestions() {
    return (
        <div className="col col-3" style={{ margin: '4px 0' }}>
            <div className={cx('special__img')}>
                <Link>
                    <img
                        className={cx('image')}
                        src="https://cdnimg.vietnamplus.vn/uploaded/tpuohuo/2022_11_27/poster_1920x1080_1_.jpg"
                        alt=""
                    />
                </Link>
                <FontAwesomeIcon className={cx('icon-save')} icon={faBookmark} width={24} height={24} />
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <Link className={cx('link')}>The Mandalorian</Link>
                <div style={{ fontSize: '1.2rem' }}>
                    <span className="me-3">2019</span>
                    <FontAwesomeIcon className={cx('icon-star', 'me-1')} icon={faStar} />
                    <span>84</span>
                </div>
            </div>
        </div>
    );
}

export default SpecialMovieSuggestions;
