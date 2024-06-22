import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';

const forgotpassword = () => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <LinearGradient
                colors={['#2F80ED', '#A6D6FF']}
                style={styles.gradient}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/images/logo/logo-bdu-02.png')} />
                </View>
            </LinearGradient>
            <ScrollView style={styles.container}>
                <View style={styles.formContainer}>
                    <Text style={styles.titleForm}>Thông tin tài khoản</Text>
                    <FormField title='Mssv' icon='user' value='Mã số sinh viên' type='text' />
                    <FormField title='Email' icon='gmail' value='Email đã đăng ký trong hệ thống' type='text' />
                    <CustomButton
                        title='Tiếp tục'
                        to='/newpassword'
                    />
                    <Link style={styles.link} href='/'>Quay lại</Link>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        marginTop: 50
    },
    logo: {
        width: 279,
        height: 63,
    },
    container: {
        flex: 1,
        marginTop: -30,
        backgroundColor: '#FFFFFF',
        borderRadius: 30


    },
    formContainer: {
        alignItems: 'center'
    },
    titleForm: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: 20,
    },
    link: {
        fontSize: 14,
        fontWeight: 'medium',
        marginTop: 20
    }
});

export default forgotpassword;
