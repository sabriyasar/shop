import React, {useRef} from 'react';
import {useFormik} from "formik";
import {TextInput} from "react-native";
import * as yup from "yup";

import TextInputField from "../../components/Form/TextInputField";
import {Box, Button, Container, Text} from "../../components";
import {AuthNavigationProps} from "../../components/Navigation";
import Footer from "../components/Footer";

const signUpSchema = yup.object().shape({
    email: yup.string().email().trim().lowercase().required(),
    password: yup.string().trim().min(5).required(),
    passwordConfirmation: yup.string()
        .equals([yup.ref("password")], "Şifre eşleşmedi")
        .trim()
        .min(5)
        .required()
});

const SignUp = ({ navigation }:  AuthNavigationProps<"SignUp">) => {


    const footer = (
        <Footer
            title="Hesabınız var mı?"
            action="Giriş Yap"
            onPress={() => navigation.navigate("Login")}
        />
    );

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched
    } = useFormik({
        validationSchema:signUpSchema,
        initialValues:{
            email: "",
            password: "",
            passwordConfirmation: ""
        },
        onSubmit: values => console.log(values)
    });

    const password = useRef<TextInput>(null)
    const passwordConfirmation = useRef<TextInput>(null)

    return (
        <Container pattern={1} {... { footer }}>
            
            <Text variant="title1" textAlign="center">Hesap Oluştur</Text>
            <Text variant="body" textAlign="center" marginBottom="l" marginTop="l">
               Ad Soyad, E-Posta ve Şifrenizi giriniz.
            </Text>

            <Box>
                <Box marginBottom="m">
                    <TextInputField
                        icon="mail"
                        placeholder="E-Posta adresiniz"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        error={errors.email}
                        touched={touched.email}
                        autoCompleteType="email"
                        autoCapitalize="none"
                        returnKeyType="next"
                        returnKeyLabel="Next"
                        onSubmitEditing={() => password.current?.focus()}
                    />
                </Box>
                <Box marginBottom="m">
                    <TextInputField
                        ref={password}
                        icon="lock"
                        placeholder="Şifre giriniz"
                        secureTextEntry={true}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        error={errors.password}
                        touched={touched.password}
                        autoCompleteType="password"
                        autoCapitalize="none"
                        returnKeyType="next"
                        returnKeyLabel="Next"
                        onSubmitEditing={() => passwordConfirmation.current?.focus()}
                    />
                </Box>
                <TextInputField
                    ref={passwordConfirmation}
                    icon="lock"
                    placeholder="Şifre tekrar"
                    secureTextEntry={true}
                    onChangeText={handleChange('passwordConfirmation')}
                    onBlur={handleBlur('passwordConfirmation')}
                    value={values.passwordConfirmation}
                    error={errors.passwordConfirmation}
                    touched={touched.passwordConfirmation}
                    autoCompleteType="password"
                    autoCapitalize="none"
                    returnKeyType="go"
                    returnKeyLabel="Go"
                    onSubmitEditing={() => handleSubmit()}
                />

                <Box alignItems="center" marginTop="xl">
                    <Button variant="primary" onPress={handleSubmit} label="Hesap Oluştur" />
                </Box>
            </Box>
           
        </Container>
    );
};

export default SignUp;
