import React, { useState, useEffect } from 'react'
import axios from "axios";
import Card from '../Card';
import "./Cards.css";
import Loading from './Loading/Loading';

const Cards = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        setLoading(false)
        const res = await axios.get(`https://api.nasa.gov/planetary/apod?start_date=2015-09-02&end_date=2015-09-08&api_key=ssgdnBGdT4QWKiisbgbQn8alp735Od5ZnkpDjdhP`);
        console.log(res.data);
        const data = res.data;
        setDatas(data)
        setLoading(true)

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="cards">

            { loading ?
                datas.map((data) => <Card data={data} />) : <Loading />
            }

        </div>
    )
}

export default Cards
