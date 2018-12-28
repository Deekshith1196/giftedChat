import React, { Component } from 'react'

import { View, Text } from 'react-native'
import styles from './styles';


class CustomView extends Component {
    render() {
        // if (this.props.currentMessage.kp_transfer) {
            return (
                <View style={styles.containerStyle}>
                    <View style={styles.customViewStyle}>
                        <Text style={styles.customTextStyle}>you shared 2 kp</Text>
                    </View>
                    <Text style={styles.sayThanksStyle}>Say thanks!</Text>
                </View>
            );
        // }
    }
}

export { CustomView };
