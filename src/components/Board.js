import axios from "axios";
import React from "react";
import {Link} from 'react-router-dom';
import './Board.css';


class Board extends React.Component{
    state={

        boardList:[],
    }

getBoards=async ()=>{
    const resultData =await axios.get('http://localhost:9999/boardList2')
    console.log(resultData.data);
    this.setState({boardList: resultData.data})
}

componentDidMount(){
    this.getBoards();
}    


render(  ){
    return (
        <div className="about__container board-table">
            <table className='table table-striped'>
                <thead className='thead-dark'>
    
            <tr><th>글번호</th><th>글제목</th><th>글쓴이</th><th>작성일</th></tr>
                </thead>
                <tbody> 
                    {
                        this.state.boardList.map((item,index)=>{                               
                            if(item.parentNo===0){
                                return <tr key={index}><td>{item.articleNo}</td>
                                <td>
                                <Link to = {{pathname:'/board-detail', state:{item}}}> <font size="2" title={item.content}>{item.title}</font>
                                </Link></td>
                                <td>{item.id}</td><td>{item.writeDate}</td></tr>
                            }else{
                                let icon='↪️';
                                for(let i=2;i<item.level;i++){
                                    icon += icon;
                                }
                                return <tr key={index}>
                                    <td>{item.articleNo}</td>
                                    <td>
                                        <Link to = {{pathname:'/board-detail', state:{item}}}>
                                        <font size="2" title={item.content}>
                                            {icon}{item.title}</font>
                                        </Link>
                                            </td>
                                    <td>{item.id}</td><td>{item.writeDate}</td>
                                    </tr>
                            }
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
}
export default Board;