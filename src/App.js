import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';


class App3 extends React.Component{

    state={
        isLoading : true,
        movies: [],
    };

    getMovies = async ()=>{
        const { 
                  data : {
                        data : {movies}
                } 
             } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        this.setState({movies, isLoading : false}); //소문자가 들어가면 새로운 변수가 추가됨
    };

    componentDidMount(){
        this.getMovies();
    }

    render(){
        const {isLoading, movies} = this.state;
        return (
            <div className="container">
                 {
                 isLoading ? (
                     <div className="loader">
                        <span className="loader__text">'Loading....'</span>
                     </div>
                     ) : (
                         <div className="movies">
                             {
                                movies.map( (item)=>{ 
                                                                       
                                    return <Movie 
                                        key={item.id}  
                                        id={item.id} 
                                        year={item.year} 
                                        title={item.title} 
                                        summary={item.summary} medium_cover_image={item.medium_cover_image}
                                        genres={item.genres}
                                    />;
                                } ) //end map
                             }
                         
                        </div>
                    )
                } 
            </div>
        );
    }

}

export default App3;