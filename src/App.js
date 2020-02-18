import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error404 from './components/Error404';
import NavBar from './components/NavBar.jsx';
import { Navbar } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import NewProfileForm from './components/NewProfileForm';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    masterProfileList: []
  };
  this.handleAddingNewProfileToList = this.handleAddingNewProfileToList.bind(this);
}
  handleAddingNewProfileToList(newProfile){
    var newMasterProfileList = this.state.masterProfileList.slice();
    newMasterProfileList.push(newProfile);
    this.setState({masterProfileList: newMasterProfileList});
  }
  render(){
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' render={()=><ProfileList profileList={this.state.masterProfileList} />} />
          <Route path='/newprofile' render={()=><NewProfileForm onNewProfileCreation={this.handleAddingNewProfileToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}
export default App;
