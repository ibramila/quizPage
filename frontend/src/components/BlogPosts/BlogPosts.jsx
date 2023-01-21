import React from 'react'
import "./style.scss"
function BlogPosts() {
    return (
        <>
            <section className='blog'>
                <div className="container">
                    <div className="wrapper">
                        <div className='template template_simple'>
                            <img style={{ width: "200px", height: "160px" }} src="	https://preview.colorlib.com/theme/hexa/images/img_1.jpg" alt="template1" />
                            <div className='template_info'>
                                <span>FEB 26TH, 2018</span>
                                <h3>Free Website Template at Free-Template.co</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minus ipsa earum nemo consectetur cupiditate necessitatibus suscipit assumenda perspiciatis provident.</p>
                                <button>Read more</button>
                            </div>
                        </div>
                        <div className='template_more'>
                            <div className='template'>
                                <img style={{ width: "200px", height: "160px" }} src="	https://preview.colorlib.com/theme/hexa/images/img_2.jpg" alt="template1" />
                                <div className='template_info'>
                                    <span>FEB 26TH, 2018</span>
                                    <h3>Free Website Template at Free-Template.co</h3>
                                    <button>Read more</button>
                                </div>
                            </div>
                            <div className='template'>
                                <img style={{ width: "200px", height: "160px" }} src="	https://preview.colorlib.com/theme/hexa/images/img_3.jpg" alt="template1" />
                                <div className='template_info'>
                                    <span>FEB 26TH, 2018</span>
                                    <h3>Free Website Template at Free-Template.co</h3>
                                    <button>Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default BlogPosts