import axios from 'axios'

const TRAIN_URL = "http://localhost:8082/train/getAll"

class TrainService{

    getAllTrain(){
        return axios.get(TRAIN_URL)
    }
}

export default new TrainService