import {Switch, Route} from 'react-router-dom';
import LoginScreen from './components/screens/loginScreen';

const Routes = (props: any) => {
  return (
    <Switch>
      <Route exact component={LoginScreen} path='/' />
      {/* <Route exact component={LoginScreen} path='/ChatRoom' /> */}
    </Switch>
  );
};

export default Routes;
