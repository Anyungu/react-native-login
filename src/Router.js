import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';

import LoginPage from './components/pages/LoginPage';
import HomePage from './components/pages/HomePage';

const RouterComponent = () => {


    return (
        <Router>
            <Stack key="root" hideNavBar>

                <Scene key="all">

                    <Scene
                        key="LoginPage"
                        component={LoginPage}
                        hideNavBar
                        initial
                    />

                    <Scene
                        key="HomePage"
                        component={HomePage}
                        hideNavBar
                    />

                </Scene>

            </Stack>
        </Router>
    );

};

export default RouterComponent;