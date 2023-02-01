import React from 'react';
import propTypes from 'prop-types';
import './Movie.scss';
import {Link} from 'react-router-dom'

// Home.js에서 id값을 props 해줬기 때문에 가능
const Movie = ({id, year, title, summary, poster, genres}) => {
    return (
        <div className="movie">
            {/* state값을 가져와야함 */}
            <Link to={`/detail/${id}`}>
                <img src={poster} alt={title} title={title} />
                <div className="movie_data">
                    <h3 className='movie_title'>{title}</h3>
                    <h5 className='movie_year'>{year}</h5>
                    <ul className="movie_genres">
                        {
                            genres.map((genres, idx) => { //genres의 값을 하나하나 넣기
                                return <li key={idx} className='moive_genre'>{genres}</li>;
                            })
                        }
                    </ul>
                    <p className='movie_summary'>{summary.slice(0, 180)}</p>
                    {/* 내용이 너무 길어서 짜르기위해 slice 0~180자 */}
                </div>
            </Link>
        </div>
    );
};

Movie.propTypes={
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired //배열구조이기 때문에
};//상태값을 쓰지 않기위해 propTypes를 만듬

export default Movie;