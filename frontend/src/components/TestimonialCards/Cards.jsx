import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsPersonCircle } from "react-icons/bs";

import "./style.scss";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// import { useContext } from 'react';
// import ContextProvider from '../../context/ContextProvider';
import { useState } from 'react';

function Cards() {
    // const { users, setUsers } = useContext();
    const [users, setUsers] = useState([]);
    // const [id, setId] = useState(undefined)


    const getData = async () => {
        const res = await axios.get("http://localhost:8080/users");
        setUsers(res.data);
        // console.log(res.data)
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <section className='cards'>
                <div className="container">
                    <Swiper
                        slidesPerView={3}
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        {
                            users && users.map((user) => (
                                <li key={user.id}>
                                    <SwiperSlide className='card'>
                                        <div className='user'>
                                            <BsPersonCircle style={{ fontSize: "40px" }} />
                                            <div>
                                                s<span>{user.name}</span>
                                                <span>{user.job}</span>
                                            </div>
                                        </div>
                                        <p>{user.comment}</p>
                                    </SwiperSlide>
                                </li>

                            ))
                        }
                    </Swiper>
                </div>
            </section>

        </>
    )
}

export default Cards