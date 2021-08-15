import React from 'react';
// import { useSelector } from 'react-redux';

import { Router, Route, Switch, Redirect } from 'react-router-dom';


// import { history } from '../_helpers';
// import { alertActions } from '../_actions';
// import { PrivateRoute } from '../_components';

// import { LoginPage } from '../LoginPage';

import { HomePage } from '../components/homePage';
import { RegisterPage } from '../components/registerPage';

function App() {
    // const alert = useSelector(state => state.alert);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     history.listen((location, action) => {
    //         // clear alert on location change
    //         dispatch(alertActions.clear());
    //     });
    // }, []);

    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-md-8 offset-md-2">
                    {/* {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    } */}
                    <Router >
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/register" component={RegisterPage} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export { App };