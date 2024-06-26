import { StyleSheet, Text, View } from 'react-native'
import { Tabs, Redirect, Stack } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
    return (
        <>
            <Tabs>
                <Stack.Screen
                    name='(tabs)/home'
                    options={{
                        title: 'Trang chủ',
                    }} />
                <Stack.Screen
                    name='(tabs)/classschedule'
                    options={{
                        title: 'Lịch học',
                    }} />
                <Stack.Screen
                    name='(tabs)/examschedule'
                    options={{
                        title: 'Lịch thi',
                    }} />
                <Stack.Screen
                    name='(tabs)/notification'
                    options={{
                        title: 'Thông báo',
                    }} />
                <Stack.Screen
                    name='(tabs)/menu'
                    options={{
                        // headerTitle: 'Menu',
                        title: 'Menu',
                    }} />
                <Tabs.Screen
                    name='profile'
                    options={{
                        tabBarButton: () => null,
                        // headerShown: false,
                    }} />
            </Tabs>
        </>
    )
}

export default TabsLayout

const styles = StyleSheet.create({})