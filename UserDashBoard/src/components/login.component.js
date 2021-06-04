import { React, Component} from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import 'bootstrap';
import 'react-bootstrap';
import './all.css';
import homeImage from '../assets/hI.jpg'
import AuthService from "../services/auth-service";
import { Jumbotron } from 'react-bootstrap';
import Footer from './footer.component';

const required = value => {
    if(!value){
        return (
            <div className="alert alert-danger" role = "alert">
                This field is required!
            </div>
        );
    }
};

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: "",
            varname:""
        };
    }

    

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
        if(e.target.value === "admin"){
            this.setState({varname: e.target.value})
            console.log(true)
        }
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.username, this.state.password).then(
                () => {

                    if(this.state.varname === "admin"){
                        window.location.replace("http://localhost:3001")
                    }else {
                        this.props.history.push("/profile");
                    window.location.reload();
                    }
                    
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        return (
        <>
            <div >
            <Jumbotron style={{
                        backgroundImage: `url(${homeImage})`,
                        backgroundRepeat: `no-repeat`,
                        width: `100%`,
                        backgroundSize: `cover`,
                        height: `65rem`,
                    }}
                    className="blur"
                    fluid>
                <div className="card card-container">
                    <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className=" profile-img-card"
                    />

                    <Form
                        onSubmit={this.handleLogin}
                        ref={c => {
                            this.form = c;
                        }}
                    >
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <button
                                className="btn btn-info btn-block"
                                disabled={this.state.loading}
                            >
                                {this.state.loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                        </div>

                        {this.state.message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{ display: "none" }}
                            ref={c => {
                                this.checkBtn = c;
                            }}
                        />
                    </Form>
                </div>
                </Jumbotron>
                
            </div>
           
        </>
        );
    }
    
}