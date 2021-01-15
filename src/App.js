import './Dealer Module/Component/node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import HomeComponent from './component/HomeComponent';
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'
import HeaderComponent from './component/HeaderComponent';
import AboutComponent from './component/AboutComponent';
import AdminComponent from './Admin Module/AdminComponent';
import CustomerComponent from './CustomerModule/CustomerComponent';
import DealerComponent from './Dealer Module/Component/DealerComponent';
import menu from './Dealer Module/Component/menu';
import ViewConnections from './Dealer Module/Component/ViewConnections';
import ChangeConnection from './Dealer Module/Component/changeConnection';
import DealerLogin from './Dealer Module/Component/DealerLogin';
import DealerUpdate from './Dealer Module/Component/DealerUpdate';
import StaffComponent from './Staff Module/StaffComponent';
import StaffRegistration from './Staff Module/StaffRegistration';

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
        <Route path="/staffreg" component={StaffRegistration}/>
        <Route path="/menu" component={menu}/>
        <Route path="/viewconnections" component={ViewConnections}/>
        <Route path="/dealerlogin" component={DealerLogin}/>
        <Route path="/changeconnection" component={ChangeConnection}/>
        <Route path="/dealerupdate" component={DealerUpdate}/>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
