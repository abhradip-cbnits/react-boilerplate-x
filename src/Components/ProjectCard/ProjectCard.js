import React from "react";
import { Row, Col} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import styles from "./index.module.css";


const ProjectCard = (props) => {
    // console.log(props, "---");
    return (
        <>
            <Row>
                {/* For project logo */}
                <Col span={12} className="flex justify-center items-center">
                    <span className="flex justify-center items-center">
                        <img src="/assets/knovva.png" alt="knovva-logo" className={styles.resize_image}/>
                    </span>
                </Col>

                {/* For project description */}
                <Col span={12} className="pr-10">

                    {/* For project summary */}
                    <Row>
                        <Col span={24}>
                            <div className="pb-3">
                                <span>
                                    <p className="body-font font-pacifico text-lg">Project Description</p>
                                </span>
                            </div>

                            <div className="flex justify-start items-center">
                                <span>
                                    <p className="body-font text-base font-courier" style={{textAlign: "justify"}}>
                                        {props.data?.projectDescription}
                                    </p>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* For roles & responsibilities */}
            <Row className="p-10">
                <Col span={24} className="pb-36">
                    <div className="pb-3">
                        <span>
                            <p className="body-font font-pacifico text-lg">My Responsibilities</p>
                        </span>
                    </div>

                    {
                        props.data?.projectResponsibilities.map((responsibilty, index) => {
                            return (
                                <Row>
                                    <Col span={24} className="pb-1 flex flex-row items-center">
                                        <FontAwesomeIcon icon={faHandPointRight} style={{ height: "15px"}}/>
                                        <span>
                                            <p className="body-font text-base font-courier" style={{textAlign: "justify"}}>
                                               {responsibilty}
                                            </p>
                                        </span>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                </Col>
            </Row>
        </>
    )
}

export default ProjectCard;