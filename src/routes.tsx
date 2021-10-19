import {Switch, Route} from 'react-router-dom';
import ChatScreen from './components/screens/ChatScreen';
import LoginScreen from './components/screens/loginScreen';

const Routes = (props: any) => {
  return (
    <Switch>
      <Route exact component={LoginScreen} path='/' />
      <Route exact component={ChatScreen} path='/ChatScreen' />
    </Switch>
  );
};

export default Routes;
