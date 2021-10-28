import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    menuItem: {
        flexDirection:'column',
        marginTop:20,
        marginLeft:20,
        marginRight:20,
    },
    menuRow:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:15,
    },
    icon:{
        color: 'white',
    },
    arrowIcon:{
        color: 'gray',
    },
    menuText:{
        flexGrow:1,
        flexDirection:'column',
    },
    text:{
        color: 'white',
        fontSize:20,
        marginLeft:20,
        fontWeight:'bold',
        textTransform:'uppercase',
    },
    textInner:{
        color: 'gray',
        fontSize:15,
        marginLeft:20,
    }
});

export default styles;
