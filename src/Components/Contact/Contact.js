import React from "react";
import { Col, Row } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <>
            <Row id="contact-me">
                <Col span={12} className="flex justify-center items-center">
                    <img src={'assets/Mailbox-bro.png'} alt="contact-illustration" style={{height: "80%"}}/>
                </Col>

                <Col span={12} className="flex flex-col justify-center content-center">
                    <Row className="p-4">
                        <Col span={24}>
                            <span>
                                <p className="body-font font-cookie text-5xl">
                                    Connect me
                                </p>
                            </span>
                        </Col>
                    </Row>

                    {/* For email */}
                    <Row className="p-3">
                        <Col span={24}>
                            <div className="flex flex-col">
                                <div>
                                    <span>
                                        <p className="body-font font-pacifico">Email</p>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <p className="body-font font-courier text-base">ghabhradip@gmail.com</p>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* For mobile number */}
                    <Row className="p-3">
                        <Col span={24}>
                            <div className="flex flex-col">
                                <div>
                                    <span>
                                        <p className="body-font font-pacifico">Mobile</p>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <p className="body-font font-courier text-base">+91 8617269309</p>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* For social handles */}
                    <Row className="p-3">
                        <Col span={24}>
                            <div className="flex flex-col">
                                <div className="pb-2">
                                    <span>
                                        <p className="body-font font-pacifico">Social handles</p>
                                    </span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <span className="pr-4">
                                        <a className="hover:text-black" href="https://instagram.com/charleemagnee?igshid=ZDdkNTZiNTM=" target='_blank' rel="noreferrer">
                                            <FontAwesomeIcon icon={faInstagram} style={{ height: "30px" }}/>
                                        </a>
                                    </span>
                                    <span className="pr-4">
                                        <a className="hover:text-black" href="https://www.linkedin.com/in/abhradip-ghosh-a47b90114" target='_blank' rel="noreferrer">
                                            <FontAwesomeIcon icon={faLinkedin} style={{ height: "30px" }}/>
                                        </a>
                                    </span>
                                    <span className="pr-4">
                                        <a className="hover:text-black" href="https://wa.me/qr/GTKQJCGFSJEFP1" target='_blank' rel="noreferrer">
                                            <FontAwesomeIcon icon={faWhatsapp} style={{ height: "30px" }}/>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Contact;
