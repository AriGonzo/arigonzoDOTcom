import React from 'react';

import ListAndShow from './ListAndShow';

export default class Projects extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            projects: [{
                title: "Secret Santa",
                description: "Secret Santa Gift Exchange and Management",
                images: ["./images/projects/secretSanta/1.png"],
                github: "https://github.com/AriGonzo/secretSanta",
                live: "https://frozen-dusk-64399.herokuapp.com",
                technologies: ["ReactJS", "MongoDB", "Express", "NodeJS", "webpack", "Bootstrap"]
            }, {
                title: "Ballpark",
                description: "The More or Less Expense Tracker and Budget Forcaster",
                images: ["./images/projects/ballpark/1.png"],
                github: "https://github.com/AriGonzo/ballpark",
                technologies: ["MongoDB", "Express", "AngularJS", "NodeJS"]
            }, {
                title: "Marvel Card Deck",
                description: "A scrollable list of Marvel character cards",
                images: ["./images/projects/marvelCardDeck/1.gif"],
                github: "https://github.com/AriGonzo/MavelCardDeck",
                technologies: ["Express", "AngularJS", "NodeJS"]
            }, {
                title: "Random Pairing App",
                description: "A simple proof of concept showing random pairing for web socket powered chat",
                images: ['./images/projects/randomPairings/1.gif'],
                github: "https://github.com/AriGonzo/randomPairings/tree/dd658ff5724a965978baae93dd9b51188ec74c37",
                technologies: ["jQuery", "socket.io", "NodeJS", "MongoDB"]
            }, {
                title: "White Noise - Raspberry Pi App",
                description: "blah blah blah",
                images: ["./images/projects/whiteNoise/1.gif"],
                github: "https://github.com/AriGonzo/white-noise-raspberry-pi",
                technologies: ["ReactJS", "NodeJS", "Express", "socket.io", "webpack"]
            }]
        }
    };

    render() {

        return (
            <div className={`aboutContainer`}>
                <div className={`info`}>
                    <h3 className="text-center subPageHeader">My Personal Projects</h3>
                    <br />
                    <ListAndShow projects={this.state.projects}/>
                </div>
            </div>
        );
    }
}