import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {AuthNavigationProps} from "../../components/Navigation";
import TextField from '../components/TextField';
import Button from '../components/Button';

import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState, onLogin } from '../../redux';

const Login = ({ navigation }: AuthNavigationProps<"Login">) => {

    const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, error } = useSelector(
    (state: ApplicationState) => state.userReducer
  );

  const { token } = user;


  const onTapLogin = () => {
    dispatch(onLogin(email, password));
    };

    return (
        <View style={styles.container}>
            <View style={styles.navigation}>

            </View>
            <View style={styles.body}>
                <View style={styles.loginView}>
                <TextField placeholder="E-Posta" onTextChange={setEmail} />
                <TextField 
                    placeholder="Şifre" 
                    onTextChange={setPassword} 
                    isSecure={true} 
                    />
                <Button title="Login" onTap={onTapLogin}/>

                {token !== undefined && ( 
                <Text style={{marginLeft: 20, marginRight: 20}}>
                    {JSON.stringify(user)}
                </Text>
                )}

                </View>
            </View>

            <View style={styles.footer}></View>

        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navigation: {
        flex: 2,
    },
    body: {
        flex: 9,
    },
    loginView: {
        marginTop: 200,
        marginLeft: 20,
        marginRight: 20,
        height: 400,
    },
    footer: {
        flex: 1,
    },
});
