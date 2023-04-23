import classNames from 'classnames/bind';

import styles from './MovieSuggestions.module.scss';

const cx = classNames.bind(styles);

function MovieSuggestions() {
    return (
        <div
            className={cx('movie', 'd-flex', 'flex-column', 'align-items-start', 'justify-content-end')}
            style={{
                backgroundImage:
                    'url("https://cdnimg.vietnamplus.vn/uploaded/tpuohuo/2022_11_27/poster_1920x1080_1_.jpg")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <h2 className={cx('movie__title')}>Interstellar</h2>
            <p className={cx('movie__summary')}>
                Truyền Thuyết Tình Yêu kể về câu chuyện dân gian của Thái Lan. Vì muốn có được hai cô nàng xinh đẹp
                Tapaokaew và Tapaothong mà Vua cá sấu hung dữ Chalawan đã bắt họ về cung điện của mình. Mọi nỗ lực để
                cứu hai nàng đều thất bại cho đến khi Kraithong xuất hiện.
            </p>
            <div style={{ fontSize: '1.2rem' }}>
                <span>2014</span>
                <span className="mx-3">Fiction</span>
                <span>1h53min</span>
            </div>
        </div>
    );
}

export default MovieSuggestions;
