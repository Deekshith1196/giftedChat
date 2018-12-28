import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({

   containerStyle: {
       height: 81,
       backgroundColor: '#FFFFFF',
       alignItems: 'center',
       justifyContent: 'center',
       borderRadius: 2
   },

    customViewStyle: {
        backgroundColor: '#FFF5E6',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        width: 279
    },
    customTextStyle: {
        fontSize: 13,
        padding: 16,
        color: '#FD9428'
    },

    sayThanksStyle: {
        fontSize: 11,
        color: '#9E9E9E',
        marginTop: 10,
        marginBottom: 10,
    }

})