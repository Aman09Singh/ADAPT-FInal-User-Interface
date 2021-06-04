import React, { Component } from 'react'
import TrainService from '../services/train'
import Table from 'react-bootstrap/Table'
import './all.css'
export class  AllTrain extends Component {

    constructor(props){

        super(props)

        this.state = {
            trains: []
        }
    }

    componentDidMount(){

        TrainService.getAllTrain().then((res)=>{
            this.setState({trains: res.data})
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                <h2 className = "text-center">Trains</h2>
                <div id = "tabletrains">
                <Table striped bordered hover variant="dark">
                <thead>
                            <tr>
                                <th>Train Name</th>
                                <th>Train Number</th>
                                <th>From </th>
                                <th>To</th>
                                

                            </tr>
                        </thead>

                        <tbody>

                            {this.state.trains.map(
                                train =>
                                <tr key = {train.id}>
                                    <td>{train.name}</td>
                                    <td>{train.number}</td>
                                    <td>{train.fromStationCode}</td>
                                    <td>{train.toStationCode}</td>
                                </tr>
                            )}

                        </tbody>
                </Table>
                </div>                 


                        {/* {/* <thead>
                            <tr>
                                <th>Train Name</th>
                                <th>Train Number</th>
                                <th>From </th>
                                <th>To</th>
                                

                            </tr>
                        </thead>

                        <tbody>

                            {this.state.trains.map(
                                train =>
                                <tr key = {train.id}>
                                    <td>{train.name}</td>
                                    <td>{train.number}</td>
                                    <td>{train.fromStationCode}</td>
                                    <td>{train.toStationCode}</td>
                                </tr>
                            )}

                        </tbody> */}
                    {/* </table> */}
              
                </div>
            </div>
        )
    }
}

export default AllTrain 
