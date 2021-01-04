import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import { AuthenticationRoutes } from "../components/Navigation";
import MyFlow, { assets as onBoardingAssets } from './MyFlow';
import Welcome, { assets as welcomeAssets } from './Welcome';
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import PasswordChanged from "./PasswordChanged";

export const assets = [...onBoardingAssets, ...welcomeAssets];

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>()

export const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator headerMode="none">
            <AuthenticationStack.Screen name="MyFlow" component={MyFlow} />
            <AuthenticationStack.Screen name="Welcome" component={Welcome} />
            <AuthenticationStack.Screen name="Login" component={Login} />
            <AuthenticationStack.Screen name="SignUp" component={SignUp} />
            <AuthenticationStack.Screen name="ForgotPassword" component={ForgotPassword} />
            <AuthenticationStack.Screen name="PasswordChanged" component={PasswordChanged} />
        </AuthenticationStack.Navigator>
    );
}