import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight, faMusic, faClock, faThermometerHalf, faCar } from '@fortawesome/free-solid-svg-icons'
import items from '../items';

const Menu = () => {
    return (
        <View style={styles.menuItem}>
            {items.map(item => (
                <TouchableOpacity key={item.id}>
                    <View style={styles.menuRow}>
                        <FontAwesomeIcon style={styles.icon} icon={item.icon} size={24} />
                        <View style={styles.menuText}>
                            <Text style={styles.text}>{item.title}</Text>
                            {item.subTitle && (
                                <Text style={styles.textInner}>{item.subTitle}</Text>
                            )}
                        </View>
                        <FontAwesomeIcon style={styles.arrowIcon} icon={faChevronRight} size={30} />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default Menu;