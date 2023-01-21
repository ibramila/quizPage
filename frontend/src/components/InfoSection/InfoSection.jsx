import React from 'react'
import "./style.scss"
import { BsBell } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsLightning } from "react-icons/bs"
function InfoSection() {
    return (
        <>
            <section className='info'>
                <div className="container">
                    <ul>
                        <li>
                            <BsBell style={{ color: "gray ", fontSize: "50px" }} />
                            <span>Modern Design</span>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                        </li>
                        <li>
                            <BsHeart style={{ fontSize: "50px", color: "gray " }} />
                            <span>Build With Love</span>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                        </li>
                        <li>
                            <BsLightning style={{ fontSize: "50px", color: "gray " }} />
                            <span>Fast Loading</span>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default InfoSection