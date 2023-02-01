import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'; 
// id는 파라미터의 값 임으로 react-router-dom에 써야함
import './Detail.scss';
const Detail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    const getMovie = async () => {
        const json= await (
           await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            // movie와 id의 값이 같아야한다.
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }

    useEffect(()=>{
        getMovie();
    })
      return (
            <div className='movie-detail'>
                {loading ? (
                    <div className="loadings">
                        <span className="loading">데이터 불러오는 중...</span>
                    </div>
                ) : (
                    <div className="movies">
                        <h2 className="title">{movie.slug}</h2>
                        <div className="img-box">
                            <img src={movie.large_cover_image} alt={movie.title} />
                        </div>
                        <div className="content">
                            <div className="info">
                                <span className="movie-title">{movie.title}</span>
                                <span className="movie-rating">별점 : {movie.rating}</span>
                                <span className="movie-runtime">상영시간 : {movie.runtime}</span>
                            </div>
                            <div className="genres">
                                <span className='genre'>장르 :&nbsp;</span>
                                <ul className="list">
                                    {
                                        movie.genres.map((genre, idx)=>(<li key={idx}>{genre}</li>))
                                    }
                                </ul>
                            </div>
                            <div className="summarys">
                                <p className="summary">내용 : {movie.description_full}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
}

export default Detail;