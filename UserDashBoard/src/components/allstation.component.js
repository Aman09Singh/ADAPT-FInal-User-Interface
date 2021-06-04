import React, { Component } from 'react'
import StationService from '../services/station-train'
import './all.css'
import Table from 'react-bootstrap/Table'
export class AllStation extends Component {

    constructor(props){

        super(props)

        this.state = {

            stations: []
        }
    }

    componentDidMount() {

        StationService.getAllStation().then((res) => {
            this.setState({stations: res.data})
        })
    }

    render() {
        return (
            <div>

                <div class="container">
                <h2 className = "text-center">Station</h2>
                    <Table striped bordered hover variant="dark"> 
                    <thead>
                            <tr>
                                <th>Station Name</th>
                                <th>Station Code</th>
                                <th>Zone</th>
                                <th>Destination</th>

                            </tr>
                        </thead>
                        <tbody>

                            {this.state.stations.map(
                                station =>
                                <tr key = {station.id}>
                                    <td>{station.name}</td>
                                    <td>{station.code}</td>
                                    <td>{station.zone}</td>
                                    <td>{station.state}</td>
                                </tr>
                            )}

                        </tbody>
                    </Table>

                {/* <div className="table">
                    <table className = "row header blue">

                        <thead>
                            <tr>
                                <th>Station Name</th>
                                <th>Station Code</th>
                                <th>Zone</th>
                                <th>Destination</th>

                            </tr>
                        </thead>

                        <tbody>

                            {this.state.stations.map(
                                station =>
                                <tr key = {station.id}>
                                    <td>{station.name}</td>
                                    <td>{station.code}</td>
                                    <td>{station.zone}</td>
                                    <td>{station.state}</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div> */}
                </div>
            </div>
        )
    }
}

export default AllStation