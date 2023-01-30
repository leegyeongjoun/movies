import React from 'react';

class App extends React.Component {
  state = {//state값을 넣기 위해
    isLoading: true,
    movies: [],
  } 

  //1.state를 읽고 2. render실행 3.componentDidMount실행이 됨
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading:false, }); //5초후에 false로 바꿔준다. 
    },5000)
  }
  render() {
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? 'Loading...' : 'We are ready'} 
      </div>
    );
  }
}

export default App;
