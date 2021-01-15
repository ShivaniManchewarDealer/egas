import axios from 'axios';

const DEALER_API_BASE_URL = "http://localhost:8080/dealers";

class DealerService {

    getConnections(){
        return axios.get(`${DEALER_API_BASE_URL}`+'/viewCustomerConnections');
    }
    getPendingConnections(){
        return axios.get(`${DEALER_API_BASE_URL}`+'/viewPendingConnections');
    }
    login(login)
    {
        return axios.post(DEALER_API_BASE_URL+'/login',login);
    }
    changeConnectionStatus(data)
    {
        return axios.patch(DEALER_API_BASE_URL+'/changeConnectionStatus',data);
    }
    dealerRegistration(dealer){
        return axios.post(`${DEALER_API_BASE_URL}/register`, dealer);

    }

}

export default new DealerService()