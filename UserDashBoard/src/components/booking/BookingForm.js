import React, { Component } from 'react'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input"
import { isEmail } from "validator";
import BookingService from '../../services/booking.service'
import CheckButton from "react-validation/build/button";

const required = value => {
    if(!value){
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        )
    }
}

const userEmail = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
}

const userName = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
}

const userAge= value => {
    if(value < 0 && value > 100){
        return (
            <div className = "alert alert-danger" role = "alert">
                The age should be between 0 and 100
            </div>
        );
    }
}



class BookingForm extends Component {

    constructor(props){
        super(props)

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeAge = this.onChangeAge.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.selectSeat = this.selectSeat.bind(this)

        this.state = {
            name: "",
            age: "",
            email: "",
            date: "",
            quantity:"",
            seatType: "",
            trainid: "",
            fare:0
                     
        }
    }

    onChangeName(e){
        this.setState({name: e.target.value});
        
    }

    onChangeAge(e){
        this.setState({age: e.target.value});
        
    }

    onChangeDate(e){
        this.setState({date: e.target.value})
        
        console.log(e.target.value)
    }

    onChangeEmail(e){
        this.setState({email: e.target.value})
        
        console.log(this.state.email)
    }

    selectSeat(e){
        this.setState({seatType: e.target.value})
        
        console.log(e.target.value)
    }

    handleSubmit(e) {
        e.preventDefault();

        this.form.validateAll();

        let id = localStorage.getItem("s_train")
        this.setState({trainid: id})
        localStorage.setItem("uName", this.state.name)
        localStorage.setItem("uAge", this.state.age)
        localStorage.setItem("uDate", this.state.date)
        localStorage.setItem("uEmail", this.state.email)
        localStorage.setItem("uSeat", this.state.seatType)

        let val = 0
        let ageval = 0
        let cost = 0

        if(this.state.seatType === "FAC"){
            val = 1400
        }else if(this.state.seatType === "SAC"){
            val = 1200
        }else if(this.state.seatType === "TAC"){
            val = 1000
        }else if(this.state.seatType === "FC"){
            val = 800
        }else if(this.state.seatType === "CC"){
            val = 900
        }else if(this.state.seatType === "SL"){
            val = 700
        }

        ageval = this.state.age*0.75
        cost = ageval + val
        console.log(cost)

        localStorage.setItem("uFare", cost)
        

        let ticket = {trainid: this.state.trainid, name: this.state.name, age: this.state.age,
                        email: this.state.email, date: this.state.date, seatType: this.state.seatType}
    
        if (this.checkBtn.context._errors.length === 0){
            
            BookingService.book(ticket).then((res) => {
            })
    
            this.props.history.push('/checkout')
        }
    
        
        
    }

    render() {

        let x = localStorage.getItem("s_train")

        return (
            <div className="col-md-12">
                <div className = "card card-container">
                <Form
                onSubmit = {this.handleSubmit}
                ref={c => {
                    this.form = c;
                }}
                >

                    <div>
                        <div className = "form-group">
                            <label htmlFor="TName">Train Name</label>
                            <input placeholder = {x} disabled/>
                        </div>
                        
                        

                        <div className="form-group">
                            <label htmlFor = "email">Email</label>
                            <Input 
                                type = "email"
                                className = "form-control"
                                name = "email"
                                value = {this.state.email}
                                onChange = {this.onChangeEmail}
                                validations = {[required, userEmail]}
                            />
                        </div>

                        <div className = "form-group">
                                <label htmlFor = "date">Date</label>
                                <Input 
                                    type="date"
                                    className = "form-control"
                                    name = "date"
                                    value = {this.state.date}
                                    onChange = {this.onChangeDate}
                                />
                        </div>

                        {/* <div className = "form-group">
                            <label htmlFor="quantity">Number of Seats</label>
                            <Input 
                                type = "number"
                                className = "form-control"
                                name = "quantity"
                                value = {this.state.quantity}
                                onChange = {this.onChangeQuantity}
                            />
                        </div> */}

                            <div className="form-group">
                                <label htmlFor="seatType">Seat Type</label>
                                <select class="form-select md-12" required onChange={this.selectSeat}>
                                    <option selected>Select Seat Type</option>
                                    <option value="FAC">First AC (FAC)</option>
                                    <option value="SAC">Second AC (SAC)</option>
                                    <option value = "TAC">Third AC (TAC)</option>
                                    <option value = "FC">First Class (FC)</option>
                                    <option value = "CC">Chair Car (CC)</option>
                                    <option value = "SL"> Sleeper (SL)</option>                                     
                                </select>
                            </div>

                        <div className="form-group">
                            <label htmlFor = "name">Name</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="name"
                                value = {this.state.name}
                                onChange = {this.onChangeName}
                                validations = {[required, userName]}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <Input
                                type="number"
                                className = "form-control"
                                name="age"
                                value={this.state.age}
                                onChange = {this.onChangeAge}
                                validations = {[required, userAge]}
                            />
                        </div>

                    </div>
                    <div className = "form-group">
                        <button type="submit" class="btn btn-info" >CheckOut</button>
                    </div>

                    <CheckButton
                            style={{ display: "none" }}
                            ref={c => {
                                this.checkBtn = c;
                            }}
                        />
                </Form>
                </div>
            </div>
        )
    }
}

export default BookingForm
