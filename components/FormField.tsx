import { Image, StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

// Hàm để lấy biểu tượng dựa trên tên
const getIcon = (iconName: any) => {
    switch (iconName) {
        case 'user':
            return require('../assets/images/icon/iconUser.png');
        case 'password':
            return require('../assets/images/icon/iconPassword.png');
        case 'rePassword':
            return require('../assets/images/icon/iconRePassword.png');
        case 'gmail':
            return require('../assets/images/icon/iconGmail.png');
    }
};

const FormField = ({ type, title, icon, value }) => {
    if (type == 'text') {
        return (
            <View style={styles.container}>
                <Text>{title}</Text>
                <View style={styles.inputBox}>
                    <Image style={styles.icon} source={getIcon(icon)} />
                    <TextInput
                        style={styles.input}
                        placeholder={value} />
                </View>
            </View>
        );
    }
    else {
        return (

            <View style={styles.container}>
                <Text>{title}</Text>
                <View style={styles.inputBox}>
                    <Image style={styles.icon} source={getIcon(icon)} />
                    <TextInput
                        style={styles.input}
                        placeholder={value}
                        secureTextEntry />
                </View>
            </View>
        );
    }

};

export default FormField;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '90%',
        height: 72
    },
    inputBox: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        height: 40,
        marginTop: 12
    },
    icon: {
        height: 24,
        width: 24,
        marginLeft: 16,
        marginRight: 8,
    },
    input: {
        width: '100%',
        height: 24,
        fontSize: 14,
        marginRight: 16,
        marginLeft: 8,
    }
});
