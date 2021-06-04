import axios from 'axios'

const ROUTE_URL = "http://localhost:8082/train/trip-schedule/getAll"

class RouteService{

    getAllRoutes(){
        return axios.get(ROUTE_URL)
    }

}

export default new RouteService