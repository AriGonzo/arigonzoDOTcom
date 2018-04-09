import React from 'react';

export default class ProjectShow extends React.Component {

    constructor(props, context) {
        super(props, context);
    };

    componentDidUpdate() {
        console.log(this.props)
    }

    render() {

        return (
            <div>
                <h3 className="text-center">{this.props.model.title}</h3>
                <p className="text-center"><em>{this.props.model.description}</em></p>
                <div className="text-center">
                    {
                        this.props.model.images.length > 0 ? 
                        (<img src={this.props.model.images[0]} className={"projectImage"} />) : ""
                    }
                </div>
                <p className="text-center source">
                    <a href={this.props.model.github} target="_blank">
                        Source&nbsp;<i className="material-icons">code</i>
                    </a>
                </p>
                <ul className="techList text-center">
                    <li>Technologies Used:</li>
                    {this.props.model.technologies.map((tech) => {
                        return (
                                <li className="techListItem"><em>{tech}</em>&nbsp;</li>
                            )
                    })}
                </ul>
            </div>
        );
    }
}