import axios from "axios"

const BOOK_URL = "http://localhost:8083/reserve/add"

class BookingService{

    book(ticket){
        return axios.post(BOOK_URL, ticket);
    }
}

export default new BookingService()