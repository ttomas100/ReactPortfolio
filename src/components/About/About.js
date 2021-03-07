import React, {Component} from 'react';
import './About.css';

class AboutContainer extends Component {
    state = {
        info: this.props.personalInfo || []
    };
    render() {
        return (
            <div className="card border-primary mb-3 profile-card" id="profile-link">
                <div className="card-header">
                    <h3>Profile
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </h3>
                </div>
                <div className="card-body">
                    <div className="card-block">
                        <div className="row">
                            <div className="col-lg-4">
                                <img
                                    className="img-responsive img-circle"
                                    src="https://media-exp1.licdn.com/dms/image/C4D03AQG47uW92hCbsA/profile-displayphoto-shrink_200_200/0/1607646509790?e=1620259200&v=beta&t=YTgYxsuvkPPvvVNtf5sw2MrQL3ydE8avz3TK0hPsoSM"
                                    alt="Tomas Utreras"/>
                                <p className="card-text">{this.props.personalInfo.about}</p>
                            </div>

                            <div className="col-lg-8">
                                <ul>
                                    <li className="about-self">Technical Project Manager, Full Stack Web developer</li>
                                    <li className="about-self">An online advertising expert with over 8+ years of experience in digital project management, SEO, digital marketing and data analysis .</li>
                                    <li className="about-self">Experienced in leading development teams for web- based applications.</li>
                                    <li className="about-self" id="hobbies">Hobbies
                                        <span>
                                            <i className="fa fa-code fa-2x" aria-hidden="true"></i>
                                        </span>
                                        <span>
                                            <i className="fa fa-music fa-2x" aria-hidden="true"></i>
                                        </span>
                                        <span>
                                            <i className="fa fa-bicycle fa-2x" aria-hidden="true"></i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AboutContainer;