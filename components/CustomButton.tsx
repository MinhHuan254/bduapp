import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const CustomButton = ({ title, to }) => {
    return (
        <View style={styles.btnDangNhap}>
            <Link href={to} style={styles.link} asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{title}</Text>
                </TouchableOpacity>
            </Link>

        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btnDangNhap: {
        marginTop: 20,
        width: '85%',
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 30,
    },
    link: {
        // backgroundColor: 'green',
        padding: 15,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})