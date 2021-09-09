import axios from "axios";
import React from "react";
import Movie from "../components/Movie";
import './Home.css';
import '../components/Movie.css';

class Home extends React.Component{
    state={
        isLoading: true, 
        movies:[],
    }

    getMovies= async ()=>{
        const resultData=await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        console.log(resultData.data.data.movies);
        this.setState({movies:resultData.data.data.movies, isLoading:false});
    };

    componentDidMount(){
        this.getMovies();
    }
    
    render(){
        return(
            <div className="container">
                {this.state.isLoading? 'isLoading...' : (<div className='movies'>{
                    this.state.movies.map((item,index)=>{return <Movie key={index} id={item.id} year={item.year} title={item.title} summary={item.summary} medium_cover_image={item.medium_cover_image} genres={item.genres}/>})
                    }</div>)}
            </div>
        );
    }
}

export default Home;