import React from "react";
import styles from './index.module.css';
// import { ReactComponent as Github } from '';
// import { ReactComponent as Instagram } from './logo.svg';
// import { ReactComponent as Linkedin } from './logo.svg';


const Footer = () => {
    return(
        <footer className="bg-gray-600 text-xs text-center p-6 bottom-0 w-full body-font font-ubuntu">
            <div className="flex flex-row w-full">
                <div className="w-full flex flex-row justify-start">
                    <p className={styles.footer_text}>Copyright © 2023, All Right Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

