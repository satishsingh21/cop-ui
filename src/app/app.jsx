import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { history } from '../helpers/history';
import { HomePage } from '../components/homePage';
import { RegisterPage, RegisterInBulkPage } from '../components/registerPage';
import { MemberDetailPage } from '../components/memberDetailPage';
import { ButtonAppBar } from '../components/navbarPage';

function App() {
    return (
        <div>
            <ButtonAppBar></ButtonAppBar>
            <div className="jumbotron">
                <div className="col-lg-12">
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/member/register" component={RegisterPage} />
                            <Route exact path="/member/bulkregister" component={RegisterInBulkPage} />
                            <Route exact path="/member/:id" component={MemberDetailPage} />
                            <Route exact path="/member/:id/edit" component={RegisterPage} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export { App };
