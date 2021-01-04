import React, {useState, useEffect} from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

interface TextFieldProps{
    placeholder: string;
    isSecure?: boolean;
    onTextChange: Function;
}


const TextField: React.FC<TextFieldProps> = ({
    placeholder, 
    isSecure = false,
    onTextChange
}) => {

    const [ isPassword, setIsPassword] = useState(false)

    useEffect(() => {
        setIsPassword(isSecure)
    }, []);

    return (

    <View style={styles.container}>
        <TextInput 
        placeholder={placeholder} 
        autoCapitalize="none"
        secureTextEntry={isPassword} 
        onChangeText={(text) => onTextChange(text)}
        style={styles.textField}
        />
        {isSecure && 
        <TouchableOpacity 
            style={{ justifyContent: 'center'}}
            onPress={() => setIsPassword(!isPassword)}
        >
            <Image 
                style={{ width:60, height: 30 }}
                source={
                    isPassword 
                    ? require('../../components/assets/patterns/show.png')
                    : require('../../components/assets/patterns/hide.png') 
                    } 
                    />
        </TouchableOpacity>
        }
        
    </View>
    );
};

export default TextField;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 30,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        paddingLeft: 20,
        paddingRight: 10,
    },
    textField: {
        flex: 1,
        height: 50,
        fontSize: 20,
        color: 'white',
    },
});