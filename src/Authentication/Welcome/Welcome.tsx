import React from 'react';
import {Dimensions, Image} from "react-native";

import {Box, useTheme, Text, Button} from "../../components";
import {AuthNavigationProps} from "../../components/Navigation";

const { width } = Dimensions.get("window");

const picture = {
    src: require("../assets/1.png"),
    width: 730,
    height: 1095
}

export const assets = [picture.src];

const Welcome = ({ navigation }:  AuthNavigationProps<"Welcome">) => {
    const theme = useTheme();

    return (
        <Box flex={1} backgroundColor="background" >
            <Box flex={1} borderBottomRightRadius="xl" backgroundColor="background2" justifyContent="flex-end">
                <Image
                    source={picture.src}
                    style={{
                        width: width - theme.borderRadii.xl,
                        height: ((width - theme.borderRadii.xl) * picture.height) / picture.width
                    }}
                />
            </Box>
            <Box flex={1} borderTopLeftRadius="xl">
                <Box
                    backgroundColor="background2"
                    position="absolute"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                />
                <Box
                    backgroundColor="background"
                    borderTopLeftRadius="xl"
                    flex={1}
                    justifyContent="space-evenly"
                    alignItems="center"
                    padding="xl"
                >
                    <Text variant="title2">Hadi Başlayalım</Text>
                    <Text variant="body" textAlign="center">Uygulamayı keşfetmek için kayıt olun ya da giriş yapın</Text>
                    <Button
                        variant="primary"
                        label="Hesabın var mı? Giriş Yap"
                        onPress={() => navigation.navigate("Login")}
                    />
                    <Button label="Hemen Kayıt Ol" onPress={() => navigation.navigate("SignUp")} />
                    <Button
                        variant="transparent"
                        label="Şifreni mi unuttun?"
                        onPress={() => navigation.navigate("ForgotPassword")}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Welcome;
