import React from 'react';
import TextLoop from 'react-text-loop';

import Button from './Button';

export default class Landing extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selection: "enjoy",
            interests: ["teaching", "solving problems","family time", "pro wrestling", "comic books", "video games"],
            knowledge: ["NodeJS", "ReactJS", "MongoDB", "Express", "Angular", "Bootstrap", 
                        "Google Maps API", "Grails", "Backbone", "jQuery", "SASS", "MySQL"]
        }
    };

     change = (event) => {
         this.setState({selection: event.target.value});
     };

    render() {
        return (
        	<div className="landingWrapper">
                <div className="bg"></div>
                <div className="text-center landingPage">
                    <h1>Hi I'm Ari Gonzalez</h1>
                    <h2>I'm a full stack web developer</h2>
                    <h2><span>I&nbsp;</span>
                        <span className="styled-select">
                            <select onChange={this.change} value={this.state.selection}>
                                <option value={"know"}>know</option>
                                <option value={"enjoy"}>enjoy</option>
                            </select>
                        </span>&nbsp;
                        <TextLoop speed={1500}>
                            { this.state.selection === "enjoy" ? 
                                this.state.interests.map(function(interest, i){
                                    return <span key={i}>{interest}</span>
                                })
                             : 
                                this.state.knowledge.map(function(interest, i){
                                    return <span key={i}>{interest}</span>
                                })
                            }
                        </TextLoop>
                    </h2>
                </div>
                <Button text={"Find Out More"} href="/about" />
                <div className={`contactBar text-center`}>
                    <a href="https://twitter.com/AriGonzoAri" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/arigonzoari/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    <a href="mailto:arigonzalez515@gmail.com?Subject=Let%27s%20Work%20Together" target="_blank"><i className="far fa-envelope"></i></a>
                </div>
                
        	</div>
        );
    }
}