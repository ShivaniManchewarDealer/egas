//import './Dealer Module/Component/node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import HomeComponent from './component/HomeComponent';
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'
import HeaderComponent from './component/HeaderComponent';
import AboutComponent from './AboutUs/Component/AboutComponent';
import AdminComponent from './Admin Module/AdminComponent';
import CustomerComponent from './CustomerModule/CustomerComponent';
import DealerComponent from './Dealer Module/Component/DealerComponent';
import menu1 from './Dealer Module/Component/menu1';
import ViewConnections from './Dealer Module/Component/ViewConnections';
import ChangeConnection from './Dealer Module/Component/changeConnection';
import DealerLogin from './Dealer Module/Component/DealerLogin';
import ViewBookings from './Dealer Module/Component/ViewBookings';
import profileDetail from './Dealer Module/Component/profileDetail';
import DealerUpdate from './Dealer Module/Component/DealerUpdate';
import StaffComponent from './Staff Module/StaffComponent';
import DealerRegistration from './Dealer Module/Component/DealerRegistration'
import ChangeGasBooking from './Dealer Module/Component/changeGasBooking';
import ViewStaff from './Dealer Module/Component/ViewStaff';
import ChangeStaff from './Dealer Module/Component/ChangeStaff';
import ViewAccessories from './Dealer Module/Component/ViewAccessories';
import ChangeAccessories from './Dealer Module/Component/ChangeAccessories';
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent/>
        <Switch>
        <Route exact path="/" component={HomeComponent}/>
        <Route path="/about" component={AboutComponent}/>
        <Route path="/admin" component={AdminComponent}/>
        <Route path="/customer" component={CustomerComponent}/>
        <Route path="/dealer" component={DealerComponent}/>
        <Route path="/staff" component={StaffComponent}/>
        <Route path="/menu1" component={menu1}/>
        <Route path="/viewconnections" component={ViewConnections}/>
        <Route path="/dealerlogin" component={DealerLogin}/>
        <Route path="/dealerregister" component={DealerRegistration}/>
        <Route path="/changeconnection" component={ChangeConnection}/>
        <Route path="/dealerupdate" component={DealerUpdate}/>
        <Route path="/profiledetail" component={profileDetail}/>
        <Route path="/viewbookings" component={ViewBookings}/>
        <Route path="/changegasbooking" component={ChangeGasBooking}/>
        <Route path="/viewstaff" component={ViewStaff}/>
        <Route path="/changestaff" component={ChangeStaff}/>
        <Route path="/viewaccessories" component={ViewAccessories}/>
        <Route path="/changeaccessories" component={ChangeAccessories}/>
        </Switch>
      </Router>
    </div>
  );
}

// 
export default App;
