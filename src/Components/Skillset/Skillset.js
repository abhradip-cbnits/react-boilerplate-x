import "d3-transition";
import { select } from "d3-selection";
import React from "react";
import {Row, Col} from 'antd';
import ReactWordcloud from 'react-wordcloud';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const callbacks = {
    getWordColor: word => "black",
    onWordClick: getCallback("onWordClick"),
    onWordMouseOut: getCallback("onWordMouseOut"),
    onWordMouseOver: getCallback("onWordMouseOver")
  }
const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: true,
    fontSizes: [5, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 0],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
  };

const words = [
      {
        text: 'React',
        value: 60,
      },
      {
        text: 'Javascript',
        value: 50,
      },
      {
        text: 'Ruby on Rails',
        value: 45,
      },
      {
        text: 'HTML',
        value: 40,
      },
      {
        text: 'CSS',
        value: 40,
      },
      {
        text: 'JQuery',
        value: 40,
      },
      {
        text: 'Typescript',
        value: 40,
      },
      {
        text: 'Git',
        value: 40,
      },
      {
        text: 'SVN',
        value: 40,
      },
      {
        text: 'Angular 7',
        value: 40,
      },
      {
        text: 'NodeJS',
        value: 50,
      },
      {
        text: 'ExpressJS',
        value: 50,
      },
      {
        text: 'Strapi',
        value: 45,
      },
      {
        text: 'KOA',
        value: 40,
      },
      {
        text: 'NextJS',
        value: 45,
      },
      {
        text: 'Ant Design',
        value: 40,
      },
      {
        text: 'Tailwind',
        value: 45,
      },
      {
        text: 'MongoDB',
        value: 45,
      },
      {
        text: 'Redis',
        value: 40,
      },
      {
        text: 'Postgres',
        value: 45,
      },
      {
        text: 'MySQL',
        value: 40,
      },
      {
        text: 'Amazon AWS',
        value: 40,
      },
      {
        text: 'Azure',
        value: 40,
      },
      {
        text: 'Docker',
        value: 40,
      },
      {
        text: 'Bootstrap',
        value: 40,
      },
      {
        text: 'Material UI',
        value: 40,
      },
      {
        text: 'Mantine',
        value: 35,
      },
      {
        text: 'Circle CI',
        value: 40,
      },
      {
        text: 'Travis CI',
        value: 40,
      },
  ];

function getCallback(callback) {
    return function (word, event) {
      const isActive = callback !== "onWordMouseOut";
      const element = event.target;
      const text = select(element);
      text
        .on("click", () => {
        })
        .transition()
        .attr("background", "white")
        .attr("text-decoration", isActive ? "underline" : "none");
    };
  }

const Skillset = () => {
    return(
        <>
            <Row>
                <Col span={24} className="pb-10">
                    <p className="body-font font-cookie text-5xl flex justify-center items-center">
                        Expertise
                    </p>
                </Col>
                <Col span={24} className="flex justify-center items-center pb-10">
                    <ReactWordcloud
                        callbacks={callbacks}
                        options={options}
                        words={words}
                    />
                </Col>
            </Row>
        </>
    )
}

export default Skillset;
