import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import NavigationHome from '~/components/Navigations/NavigationHome';
import MovieSuggestions from '~/components/MovieSuggestions';
import HotNews from '~/components/HotNews';
import MovieCard from '~/components/MovieCard';

import tmdb from '~/api/tmdb';

const cx = classNames.bind(styles);

function Home() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const { data: dataPopular } = await tmdb.get('movie/popular');
            const { data: dataTopRated } = await tmdb.get('movie/top_rated');

            setPopularMovies(dataPopular.results);
            setTopRatedMovies(dataTopRated.results);
        };

        fetchApi();
    }, []);

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
                <h2 style={{ marginTop: '32px', marginBottom: '8px' }}>Thịnh hành</h2>
                {popularMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            <div className="row">
                <h2 style={{ marginTop: '32px', marginBottom: '8px' }}>Xếp hạng hàng đầu</h2>
                {topRatedMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;
