import React, {Component, Fragment} from 'react';
import EventDashboard from '../../features/event/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/event/eventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/peopleDashboard/PeopleDashboard';
import SettingsDashboard from '../../features/user/settings/SettingsDashboard';
import UserDetailedPage from '../../features/user/userDetailed/UserDetailedPage';
import EventForm from '../../features/event/EventForm/EventForm';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage} />
        <Route path='/(.+)' render={() => (
          <Fragment>
            <NavBar />
            <Container className='main'>
              
              <Route path='/events' component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route path='/people' component={PeopleDashboard} />
              <Route path='/profile/:id' component={UserDetailedPage} />
              <Route path='/settings' component={SettingsDashboard} />
              <Route path='/createEvent' component={EventForm} />
            </Container>
          </Fragment>
        )} />
      </Fragment>
      
      
    );
  }
}

export default App;