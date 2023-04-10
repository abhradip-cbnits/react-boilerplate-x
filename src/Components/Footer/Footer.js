import React from "react";
import styles from './index.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from "antd";

const text = <span>This site is developed using React, Ant Design & Tailwind CSS</span>;

const Footer = () => {
    return(
        <footer className="bg-gray-600 text-xs text-center p-6 bottom-0 w-full body-font font-ubuntu">
            <div className="flex flex-row w-full">
                <div className="w-full flex flex-row justify-start items-center">
                    <p className={styles.footer_text}>Copyright © 2023, All Right Reserved</p>
                    <span className="pl-2 flex">
                        <Tooltip placement="topLeft" title={text}>
                            <FontAwesomeIcon icon={faCircleInfo} style={{ height: "15px" , color: "white"}}/>
                        </Tooltip>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

