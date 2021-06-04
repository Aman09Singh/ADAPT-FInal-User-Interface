import { React, Component } from 'react';
import { Switch, Route, Link} from "react-router-dom";
import "./App.css";


import AuthService from "./services/auth-service";
import { Jumbotron, Container, Card, Button, Col, Row } from "react-bootstrap";
import Login from './components/login.component';
import Booking from './components/booking/BookingView';
import Register from './components/register.component';
import Home from './components/Home.component';
import Profile from './components/profile.component';
import BoardUser from './components/userboard.component';
import BoardAdmin from './components/adminboard.component';
import AllTrain from './components/alltrain.component';
import AllStation from './components/allstation.component';
import BookingForm from './components/booking/BookingForm';
import Validation from './components/vaildation.component';
import CheckOut from './components/booking/checkOut';


class App extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),  
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Pakistan Railway
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/allstation"} className="nav-link">
                Stations
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/alltrain"} className="nav-link">
                Trains
              </Link>
            </li>
            

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className = "nav-item">
                <Link to={"/book"} className = "nav-link">
                  Book
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
                {/* <Link to = {"/login"}>
                <Button className = "nav-link">Login</Button>
                </Link> */}
                
              </li>

              <li className="nav-item">
                {/* <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link> */}
                <Link to = {"/register"}>
                <Button className = "nav-link">Register</Button>
                </Link>
              </li>
            </div>
          )}
        </nav>
        
        

        <div>
          
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/book" component={Booking} />
            <Route exact path="/alltrain" component = {AllTrain} />
            <Route exact path="/allstation" component = {AllStation}/>
            <Route exact path = "/bform" component = {BookingForm} />
            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path = "/validation" component = {Validation} />
            <Route path = "/checkout" component = {CheckOut} />
            
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;