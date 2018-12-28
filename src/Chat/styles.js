import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export default StyleSheet.create({

    containerStyle: {
        flex: 1,
        backgroundColor: 'rgb(240, 240, 240)',
    },

    inputToolBarStyle: {
        height: 80,
        backgroundColor: "#ffffff",
        width: width,
        marginBottom: 0
    },

    composerStyle: {
       backgroundColor: '#FAFBFB',
       height: 48,
       marginBottom: 16,
       marginRight: 27,
       marginLeft: 28,
       marginTop: 16,
       borderColor: '#EEEEEE',
       borderWidth: 2
    },
    
    nameViewStyle: {
        backgroundColor: '#F0F2F4',
        height: 40,
        width: width - 24
    },

    bubbleStyle: {
        backgroundColor: '#F0F2F4',
        borderColor: '#000',
        padding: 20,
        width: width - 24
    }

})