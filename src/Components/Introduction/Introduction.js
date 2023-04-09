import React from "react";
import { Col, Row } from 'antd';

const Introduction = () => {
    return(
        <>
           <Row className="p-10">
                <Col span={6}  className="flex justify-center items-center">
                    <img src={'assets/profile.png'} alt="abhradip-profile"/>
                </Col>
                <Col span={18} className="body-font font-courier p-6">
                        <Row className="pb-10">
                            <Col span={24} className="body-font font-cookie text-5xl">
                                Meet Abhradip
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                               <div className="flex">
                                    <span>
                                        <p className="body-font font-courier text-lg" style={{textAlign: "justify"}}>
                                        Hi there, This is Abhradip Ghosh, an experienced Software Developer adept in bringing forth expertise in design,
architect, develop, testing and maintenance of software systems. I am equipped with
a diverse and promising skill-set. Specialized on MERN stack with experience of
more than 6 years on the same domain. I am also having the working experience of
Ruby on Rails domain and related tech stack. I have the proficiency in various platforms, languages, and embedded systems.
                                        </p>
                                    </span>
                               </div>
                            </Col>
                        </Row>
                </Col>
        </Row>
        </>
    )
}

export default Introduction;
