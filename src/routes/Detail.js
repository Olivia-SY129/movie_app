import React from 'react';
import './Detail.css'

class Detail extends React.Component{
    componentDidMount() {
        const {location, history} = this.props;
        console.log(location.state);
        if(location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const {location} =this.props
        if(location.state){
            return (
                <div className = "movie__detail">
                        <div className="movie__detail__posterContainer">
                            <img className="movie__detail__poster" alt ={location.state.title} src = {location.state.poster} title = {location.state.title} />
                        </div>
                        <div className = "movie__detail__data">
                            <h4 className="movie__detail__title">{location.state.title}</h4>
                            <h5 className="movie__detail__year">{location.state.year}</h5>
                            <h5 className="movie__detail__genres">{location.state.genres.join(', ')}</h5>
                            <p className="movie__detail__summary">{location.state.summary}</p>    
                        </div>
                        
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Detail;