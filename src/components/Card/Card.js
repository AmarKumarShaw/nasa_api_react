import {useState} from "react";
import "./Card.css"




const Card = ({data}) => {
    const [like,setLike] = useState("like")
    return (
        <div className="card">
                <img className="card-img" src={data.url} alt="" />
            <div className="card-body">
                <h3 className="card-title">{data.title}</h3>
                <p className="card-date">{data.date}</p>
                <div><button className="card-btn" onClick={(e)=> setLike("Liked")} >{like}</button></div>
            </div>
        </div>
    )
}

export default Card
