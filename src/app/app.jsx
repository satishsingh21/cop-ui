import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { history } from '../helpers/history';
import { HomePage } from '../components/homePage';
import { RegisterPage, RegisterInBulkPage } from '../components/registerPage';
import { PointPage, AddPointInBulkPage } from '../components/pointPage';
import { MemberDetailPage } from '../components/memberDetailPage';
import { ButtonAppBar } from '../components/navbarPage';

function App() {
    return (
        <div>
            <Router history={history}>
                    <ButtonAppBar></ButtonAppBar>
                    <div className="jumbotron">
                        <div className="col-lg-12">
                            <Switch>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/member/register" component={RegisterPage} />
                                <Route exact path="/member/point" component={PointPage} />
                                <Route exact path="/member/pointbulkregister" component={AddPointInBulkPage} />
                                <Route exact path="/member/bulkregister" component={RegisterInBulkPage} />
                                <Route exact path="/member/:id" component={MemberDetailPage} />
                                <Route exact path="/member/:id/edit" component={RegisterPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </div>
                    </div>
            </Router>
        </div>
    );
}

export { App };
