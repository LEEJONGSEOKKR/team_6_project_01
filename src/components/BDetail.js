import axios from "axios";
import React from "react";


class BDetail extends React.Component{


getBoards=async ()=>{
    const resultData =await axios.get('http://localhost:9999/boardList2');
    console.log(resultData);
}

componentDidMount(){
    const {location, history}=this.props;
    if(location.state===undefined){
        history.push('/');
    }else{
        this.getBoards();
    }
}    


render(){
    const {location} = this.props;
    console.log({location});
    if(location.state){
        return(
            <div className="board-detail-container">
                <p><span>글번호:</span>{location.state.item.articleNo}</p>
                <p><span>글제목:</span>{location.state.item.title}</p>
                <p><span>내용:</span>{location.state.item.content}</p>
                <p><span>작성자:</span>{location.state.item.id}</p>
            </div>
        )
    }else{
        return null;
    }
}
}
export default BDetail;