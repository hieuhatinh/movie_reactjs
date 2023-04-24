import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faStar } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './MovieCard.module.scss';

const cx = classNames.bind(styles);

const getPosterURL = (posterPath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`;
};

const getYear = (date) => {
    return date.split('-')[0];
};

function MovieCard({ movie }) {
    return (
        <div className="col col-3" style={{ margin: '8px 0' }}>
            <div className={cx('special__img')}>
                <Link>
                    <img className={cx('image')} src={getPosterURL(movie.poster_path)} alt={movie.title} />
                </Link>
                <FontAwesomeIcon className={cx('icon-save')} icon={faBookmark} width={24} height={24} />
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <Link className={cx('link')}>{movie.title}</Link>
                <div className={cx('info-movie')}>
                    <span className="me-3">{getYear(movie.release_date)}</span>
                    <FontAwesomeIcon className={cx('icon-star', 'me-1')} icon={faStar} />
                    <span>{movie.vote_count}</span>
                </div>
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default MovieCard;
