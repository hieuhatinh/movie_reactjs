import classNames from 'classnames/bind';

import styles from './HotNews.module.scss';

const cx = classNames.bind(styles);

function HotNews() {
    return (
        <div className={cx('news')}>
            <img
                className={cx('news__img')}
                src="https://cdnimg.vietnamplus.vn/uploaded/tpuohuo/2022_11_27/poster_1920x1080_1_.jpg"
                alt=""
            />
            <span className={cx('news__title')}>Hot news</span>
            <p className={cx('news__info')}>
                'Resident Evil: Netflix takes on the film adaption of the cult horror game
            </p>
            <div className="d-flex justify-content-between align-items-center">
                <span>22 January</span>
                <span style={{ color: 'black' }}>1/5</span>
            </div>
        </div>
    );
}

export default HotNews;
