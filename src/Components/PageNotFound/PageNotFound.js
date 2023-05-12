import React from 'react';
import {Row, Col} from 'antd';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () =>{

    const navigate = useNavigate();

    return(
        <>
            <Row>
                <Col span={24} className="flex justify-center items-center">
                    <img src={'/assets/404.png'} className={styles.resize_image} alt="404-not-found"/>
                </Col>
            </Row>
            <Row>
                <Col span={24} className="flex justify-center items-start">
                    <p onClick={()=> navigate('/')} className="font-courier text-lg underline" style={{cursor: "pointer"}}>
                        Navigate to Home Page
                    </p>
                </Col>
            </Row>
        </>
    );
}

export default PageNotFound;
