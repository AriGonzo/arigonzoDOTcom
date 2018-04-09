import React from 'react';

import ProjectShow from './ProjectShow';

export default class ListAndShow extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: 0
        };
    };

    buildList = () => {
        return this.props.projects.map((project, i) => {
            return (
                    <div key={i} onClick={()=> { this.clickProject(i) }}>
                        <p>{project.title}</p>
                    </div>
                )
        })
            
    };

    clickProject = (i) => {
        this.setState({selected: i})
    };

    buildShow = () => {
        if (this.props.projects) {
            // Call Projects Show Component and pass state index
            return (
                    <ProjectShow model={this.props.projects[this.state.selected]} />
                )
        } else {
            //Used for Resume Show
        }
    };

    render() {

        return (
            <div className="listContainer subPageContent">
                <div className="list">
                    {this.buildList()}
                </div>
                <div className="show">
                    {this.buildShow()}
                </div>
            </div>
        );
    }
}