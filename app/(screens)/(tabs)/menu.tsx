import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';

const Menu = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            {/* Frame chứa thông tin cá nhân */}
            <TouchableOpacity style={styles.frame} onPress={() => router.push('/profile')}>
                <Image source={require('../../../assets/images/logo/logo-bdu-02.png')} style={styles.logo} />
                <View style={styles.textContainer}>
                    <Text style={styles.boldText}>Trần Minh Huân</Text>
                    <Text style={styles.normalText}>22050068@student.bdu.edu.vn</Text>
                </View>
                <Image source={require('../../../assets/images/icon/arrowright.png')} style={styles.arrowIcon} />
            </TouchableOpacity>

            {/* Chữ "Chức năng" */}
            <Text style={styles.functionText}>Chức năng</Text>

            {/* Các frame chứa các chức năng */}
            <View style={styles.functionsContainer}>
                {/* Cột bên trái */}
                <View style={styles.column}>
                    <TouchableOpacity style={styles.functionFrame}>
                        <Image source={require('../../../assets/images/icon/hocphi.png')} style={styles.functionIcon} />
                        <Text style={styles.functionLabel} numberOfLines={2} ellipsizeMode="tail">Xem học phí</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionFrame}>
                        <Image source={require('../../../assets/images/icon/RSpass.png')} style={styles.functionIcon} />
                        <Text style={styles.functionLabel} numberOfLines={2} ellipsizeMode="tail">Đổi mật khẩu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionFrame}>
                        <Image source={require('../../../assets/images/icon/baocao.png')} style={styles.functionIcon} />
                        <Text style={styles.functionLabel} numberOfLines={2} ellipsizeMode="tail">Báo cáo vấn đề</Text>
                    </TouchableOpacity>
                </View>

                {/* Cột bên phải */}
                <View style={styles.column}>
                    <TouchableOpacity style={styles.functionFrame}>
                        <Image source={require('../../../assets/images/icon/xemDTV.png')} style={styles.functionIcon} />
                        <Text style={styles.functionLabel} numberOfLines={2} ellipsizeMode="tail">Xem điểm thư viện</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionFrame}>
                        <Image source={require('../../../assets/images/icon/xemdiem.png')} style={styles.functionIcon} />
                        <Text style={styles.functionLabel} numberOfLines={2} ellipsizeMode="tail">Xem điểm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionFrame}>
                        <Image source={require('../../../assets/images/icon/chucnangkhac.png')} style={styles.functionIcon} />
                        <Text style={styles.functionLabel} numberOfLines={2} ellipsizeMode="tail">Chức năng khác</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Văn bản "Ứng dụng" */}
            <Text style={styles.appText}>Ứng dụng</Text>

            {/* Frame mới */}
            <TouchableOpacity style={[styles.frame, styles.newFrame]}>
                <Image source={require('../../../assets/images/icon/caidat.png')} style={styles.functionIcon} />
                <Text style={styles.functionLabel} numberOfLines={2} ellipsizeMode="tail">Cài đặt ứng dụng</Text>
            </TouchableOpacity>

            {/* Văn bản "Tài khoản" */}
            <Text style={styles.accountText}>Tài khoản</Text>

            {/* Frame đăng xuất */}
            <TouchableOpacity style={[styles.frame, styles.logoutFrame]}>
                <Image source={require('../../../assets/images/icon/dangxuat.png')} style={styles.functionIcon} />
                <Link style={[styles.functionLabel, styles.logoutText]} href='/index.tsx'>Đăng xuất</Link>
            </TouchableOpacity>
        </View>
    );
}

export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        paddingTop: 50,
        backgroundColor: '#EAEAEA',
    },
    frame: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
        width: 390, 
    },
    logo: {
        width: 60, 
        height: 60,
        borderRadius: 30, 
    },
    textContainer: {
        marginLeft: 15, 
        flex: 1, 
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 18, 
    },
    normalText: {
        color: '#555',
        fontSize: 16,
    },
    arrowIcon: {
        width: 20,
        height: 20,
        marginLeft: 'auto', 
    },
    functionText: {
        marginTop: 20,
        marginRight: 300,
        fontSize: 18,
    },
    functionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        marginTop: 10, 
        paddingHorizontal: 10, 
        width: '100%', 
    },
    column: {
        flex: 1, 
        paddingHorizontal: 10, 
    },
    functionFrame: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 10,
        marginVertical: 10,
        width: '100%', 
        height: 80, // Set a fixed height for function frames
    },
    functionIcon: {
        width: 30, 
        height: 30,
        marginRight: 10, 
    },
    functionLabel: {
        fontSize: 14, // Smaller font size
        flex: 1, 
        flexWrap: 'wrap', 
    },
    appText: {
        marginTop: 20,
        marginRight: 300,
        fontSize: 18,
    },
    newFrame: {
        width: 390,
        marginTop: 20,
    },
    accountText: {
        marginTop: 20,
        marginRight: 300,
        fontSize: 18,
    },
    logoutFrame: {
        width: 390,
        marginTop: 20,
    },
    logoutText: {
        color: 'red',
    },
});
