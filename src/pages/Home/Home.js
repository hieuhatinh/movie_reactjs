import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import NavigationHome from '~/components/Navigations/NavigationHome';
import MovieSuggestions from '~/components/MovieSuggestions';
import HotNews from '~/components/HotNews';
import SpecialMovieSuggestions from '~/components/SpecialMovieSuggestions';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className="container mt-5 mx-4">
            <h1 className="mb-3">My cinema</h1>
            <NavigationHome />

            <div className="row" style={{ minHeight: '300px', marginTop: '32px' }}>
                <div className="col col-7">
                    <MovieSuggestions />
                </div>
                <div className="col col-5">
                    <HotNews />
                </div>
            </div>

            <div className="row">
                <h2 style={{ marginTop: '32px', marginBottom: '8px' }}>Special for you</h2>
                <SpecialMovieSuggestions />
                <SpecialMovieSuggestions />
                <SpecialMovieSuggestions />
                <SpecialMovieSuggestions />
                <SpecialMovieSuggestions />
                <SpecialMovieSuggestions />
            </div>
        </div>
    );
}

export default Home;
