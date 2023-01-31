import React from 'react';

class Detail extends React.Component {

    componentDidMount(){
        const {location, history} = this.props;
        console.log(location, history)
    }
    render() {
        return (
            <div>hello</div>
        );
    }
}

export default Detail;