import React from 'react';

import Button from './Button';

export default class About extends React.Component {

    constructor(props, context) {
        super(props, context);
    };

    render() {
        let settings = {
          dots: false,
          infinite: true,
          speed: 100,
          slidesToShow: 1,
          slidesToScroll: 1
        };


        return (
        	<div className={`aboutContainer`}>
                <div className={`info`}>
                    <h3 className="text-center subPageHeader">My Story</h3>
                    <br />
                    <div className="subPageContent">
                        <img className="banner8Bit" src="./images/8bitme.png" />
                        <p><strong>Short Version:</strong> I'm a Web developer, Dad, video game enthusiast and pro-wrestling aficionado</p>
                        <p><strong>Long Version:</strong> I'm a Florida native and a UCF Graduate. I studied Hospitality Management with a focus on Event Planning. After graduating I worked as a Project Manager handling transportation and dining logistics for large scale corporate events throughout North and South America. This included organizing arrival and departure transportation, meet & greet services, tours & recreation excursions, group prix fixe dining reservations and much more. Working as a Project Manager in Event Logistics help fine tune my attention to detail and solving logistical issues helped inspire my love of problem solving.</p>
                        <p>Working in events allowed me to travel to many places and afforded me the opportunity to spend 5 years living in New York City. It was an amazing experience but I realized traveling and working in events was not my passion. Each and every job I had, I found myself as the defacto IT in addition to my normal work duties. I came to a crossroads and decided to move back to Orlando and focus all of my efforts on become a developer. I found out about The Iron Yard coding bootcamp and enrolled in the November 2014 Front End Development course. It was a challenge but it was the best decision I have ever made.</p>
                        <p>After completing The Iron Yard course I began my journey as a Web Developer. Shortly after the course I began working as a Junior Developer with a SaaS startup called My One Resource. While at M1R I leveled up on my NodeJS, Backbone, and Sass skills. I also gained a lot of knowledge on the importance of user experience</p>
                        <p>Spending a year and a half at M1R I grew a lot as a developer in both tech skills and team lead skills. By the end of my time there I became a lead developer, working closely with the CEO to implement many advanced features on both the back and front end. It was my time to go and I began working at another small company in Orlando called Intrepid Networks as a Front End Development Engineer. Here I would learn about Grails (and, as a side effect Java), fall in love with React JS, work with WebRTC and many other exciting technologies. Working at Intrepid has also helped me work with production code and on a larger team with successful version control and git-flow processes.</p>
                        <p>There's many more details along the way and if you'd like to know more, reach out to me via email (<a href="mailto:arigonzalez515@gmail.com?Subject=Let%27s%20Work%20Together" target="_blank">arigonzalez515@gmail.com</a>) or via twitter <a href="http://twitter.com/AriGonzoAri" target="_blank">@AriGonzoAri</a></p>
                    </div>
                </div>
        	</div>
        );
    }
}