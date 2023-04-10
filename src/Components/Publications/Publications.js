import React from "react";
import {Row, Col} from "antd";
import styles from "./index.module.css";

const Publications = () => {
    return(
        <>
        <Row className="pt-32">
            <Col span={12} className="flex justify-center">
                <img src={'assets/Certification-bro.png'} className={styles.resize_image} alt="publication-illustration"/>
            </Col>
            <Col span={12} type="flex" style={{ alignItems: "center" }} justify="center" gutter={20} className="pr-14">
                <Row>
                    <Col span={24} className="p-4">
                        <p className="body-font font-cookie text-5xl">
                            Publications
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className="p-4">
                        <span>
                            <p className="body-font font-courier text-base" style={{textAlign: "justify"}}>Publications on Green Solutions: A Pilot Study on Green Technology and Green Computing</p>
                        </span>
                    </Col>
                </Row>

                <Row>
                    <Col span={24} className="p-4">
                        <span>
                            <p className="body-font font-roboto-mono text-xs" style={{textAlign: "justify"}}>Green Solutions: A Pilot Study on Green Technology and Green Computing</p>
                        </span>
                    </Col>
                </Row>

                <Row>
                    <Col span={24} className="p-4">
                        <span>
                            <p className="body-font font-roboto-mono text-xs" style={{textAlign: "justify"}}>International Journal of Advanced Research in Computer Science and Software Engineering. Volume 5, Issue 10, October-2015, ISSN: 2277 128X</p>
                        </span>
                    </Col>
                </Row>
            </Col>
        </Row>
        </>
    )
}

export default Publications;
