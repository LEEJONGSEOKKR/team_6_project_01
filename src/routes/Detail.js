import React from "react";
import './Detail.css'
import axios from "axios";

class Detail extends React.Component{

state={
    rating:0,
    runtime:0,
}

getMovieDetail=async (id)=>{
    const movieDetail=await axios.get('https://yts-proxy.now.sh/movie_details.json?movie_id='+id);
    console.log(movieDetail);
    this.setState({rating:movieDetail.data.data.movie.rating, runtime:movieDetail.data.data.movie.runtime});
    
}

    componentDidMount(){
        const {location, history}=this.props;
        if(location.state===undefined){
            history.push('/');
        }else{
            console.log(location.state.id);
            this.getMovieDetail(location.state.id);  
        }
        
    }

    render(){
        console.log(this.props);
        const {location} =this.props;
        if(location.state){
            return(
                <div className="detail__container">
                    <img src={location.state.medium_cover_image} alt={location.state.title} title={location.state.title}/>
                    <h2 className="movie__tit_detail"><span > { location.state.title } </span> </h2>
                    <h3 className="movie__year_detail">Year : {location.state.year}</h3>
                    <h3>rating : {this.state.rating}</h3>
                    <h3>runtime : {this.state.runtime}</h3>
                    <ul className="movie__gen_detail">Genres : &nbsp; {location.state.genres.map((item,index) => { return <li key={index} 
                    className="movie__gen_detail">{item}</li>})}</ul>
                    <p className="movie__sum_detail">{location.state.summary}</p>
                    
                </div>
            );
        }else{
            return null;
        }
        
    }

}

export default Detail;