import React, { Component } from 'react';
import TrainService from '../../services/train'
import BookingForm from './BookingForm';
import Table from 'react-bootstrap/Table'
class BookingView extends Component {

    constructor(props){

        super(props)

        this.state = {
            trains: [],
            trainname: "",
           
        }
    
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(tname){

        this.setState({trainname: tname})
      
        console.log(tname)

        localStorage.setItem("s_train", tname)
        console.log(tname)
        this.props.history.push('/bform')
        
    }

    componentDidMount(){

        TrainService.getAllTrain().then((res)=>{
            this.setState({trains: res.data})
        })

    }


    render() {
        return (
            <>
            <div className="container">
                <h2 className="text-center">Available Trains</h2>
                <div className = "row">
                <Table striped bordered hover variant="dark">

                <thead>
                        <tr>
                            <th>Train Number</th>
                            <th>Train Name</th>
                            <th>Departure</th>
                            <th>Destination</th>
                            <th>FAC</th>
                            <th>SAC</th>
                            <th>Sleeper</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.state.trains.map(
                            train => 
                            <tr key={train.id}>
                                <th>{train.number}</th>
                                <th>{train.name}</th>
                                <th>{train.fromStationCode}</th>
                                <th>{train.toStationCode}</th>
                                <th>{train.firstAcSeats}</th>
                                <th>{train.secondAcSeats}</th>
                                <th>{train.sleeperSeats}</th>
                                <button onClick={()=> this.clickHandler(train.name)}>Book</button>
                            </tr>
                        )}
                    </tbody>
                </Table>

                    {/* <thead>
                        <tr>
                            <th>Train Number</th>
                            <th>Train Name</th>
                            <th>Departure</th>
                            <th>Destination</th>
                            <th>FAC</th>
                            <th>SAC</th>
                            <th>Sleeper</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.state.trains.map(
                            train => 
                            <tr key={train.id}>
                                <th>{train.number}</th>
                                <th>{train.name}</th>
                                <th>{train.fromStationCode}</th>
                                <th>{train.toStationCode}</th>
                                <th>{train.firstAcSeats}</th>
                                <th>{train.secondAcSeats}</th>
                                <th>{train.sleeperSeats}</th>
                                <button onClick={()=> this.clickHandler(train.name)}>Book</button>
                            </tr>
                        )}
                    </tbody> */}

                </div>
            </div>
        </>
        )
    }
}

export default BookingView
