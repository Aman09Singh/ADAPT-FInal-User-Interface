import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth-service";
import Link from 'react-router-dom'
import './all.css'
import { Jumbotron } from "react-bootstrap";
import homeImage from '../assets/hI.jpg'
export default class Profile extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: { username: "" }
        };

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.history.push("/book")
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        const { currentUser } = this.state;

        return (
            <div >
                {(this.state.userReady) ?
                    <div>
                        <Jumbotron style={{
                        backgroundImage: `url(${homeImage})`,
                        backgroundRepeat: `no-repeat`,
                        width: `100%`,
                        backgroundSize: `cover`,
                        height: `65rem`,
                    }}
                    className="blur"
                    fluid>
                        {/* <header className="jumbotron">
                            <h3>
                                <strong>{currentUser.username}</strong> Profile
          </h3>
                        </header>
                        <p>
                            <strong>Token:</strong>{" "}
                            {currentUser.accessToken.substring(0, 20)} ...{" "}
                            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                        </p>
                        <p>
                            <strong>Id:</strong>{" "}
                            {currentUser.id}
                        </p>
                        <p>
                            <strong>Email:</strong>{" "}
                            {currentUser.email}
                        </p>
                        <strong>Authorities:</strong>
                        <ul>
                            {currentUser.roles &&
                                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                        </ul> */}
                        <div className="container">
                        <div className="card">
                            <img
                                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                                alt="profile-img"
                                className="profile-img-card"
                            />
                        
                            <div>
                                <h2 id = "h2uname"> Name : {currentUser.username}</h2>
                            </div>
                            <div>
                                <button id = "btnbook" onClick={this.handleClick}>
                                    Booking
                                </button>
                            </div>        
                            </div>
                        </div>
                        </Jumbotron>
                    </div> : null}
            </div>
        );
    }
}