import React, { Component, useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faBoxOpen, faFan, faKey, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'
import Menu from '../Menu';

const CarItem = () => {
    const [lock,setLock]=useState(false)

    const onPressLock=()=>{
        if(lock){
            setLock(false)
        }
        else{
            setLock(true)
        }
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/background.png')}
                style={styles.bgImage}
            />
            {/* Heder */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} icon={faCog} size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>My Model S</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} icon={faBoxOpen} size={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.status}>
                <View style={styles.batteryView}>
                    <Image
                        source={require('../../assets/battery.png')}
                        style={styles.batteryImage}
                    />
                    <Text style={styles.batteryText}>150 mi</Text>
                </View>
                <Text style={styles.statusText}>Parked</Text>
            </View>

            <ScrollView>
            <View style={styles.menu}>
                <TouchableOpacity>
                    <View style={styles.menuIcon}>
                        <FontAwesomeIcon style={styles.icon} icon={faFan} size={24} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.menuIcon}>
                        <FontAwesomeIcon style={styles.icon} icon={faKey} size={24} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onPressLock}
                >
                    <View style={styles.menuIcon}>
                        <FontAwesomeIcon style={styles.icon} icon={lock? faLock : faUnlock } size={24} />
                    </View>
                </TouchableOpacity>
            </View>
            <Menu/>
            </ScrollView>
        </View>
    );
};


export default CarItem;
