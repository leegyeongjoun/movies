import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.scss';

class Home extends React.Component {
  state = {//state값을 넣기 위해
    isLoading: true,
    movies: [],
  } 
  // async(비동기)를 사용하면 await 사용가능
  getMovies= async()=>{ //구조분해할당
    const {
      data :{
        data: {movies},
    },
  } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // console.log(movies);
    this.setState({movies, isLoading:false }) //key와 value값이 같으면 하나만 적어도된다. Movies
  }
  //1.state를 읽고 2. render실행 3.componentDidMount실행이 됨
  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({isLoading:false, }); //5초후에 false로 바꿔준다. 
    // },5000)
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    //console.log(this.state)
    return (
      <section className='container'>
        {isLoading ? (<div className='loader'><span className='loader_text'>'Loading...'</span></div>) : (
        <div className='movies'>
          {movies.map(movie => (
            
           <Movie
              key={movie.id} 
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
           />
          ))
          //Movies의 값을 받아와야함 상위 컴포넌트에서 하위 컴포넌트를 내려줄 때 이름을 넣어줘야 함 prop로 내려줌
          //반복해서 쓰는 친구들은 key값이 필요함
        }
        </div>
        )
      } 
      </section>
    );
  }
}

export default Home;
