import axios from 'axios'

const STATION_URL = "http://localhost:8082/train/station/getAll"

class StationService{

    getAllStation(){
        return axios.get(STATION_URL)
    }
}

export default new StationService;