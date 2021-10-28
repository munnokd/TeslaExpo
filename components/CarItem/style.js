import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor:'black',
    },
    header:{
        marginTop:40,
        marginLeft:20,
        marginRight:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
    },
    headerTitle:{
        color: 'white',
        fontSize:20,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
    },
    icon:{
        color: 'white',
    },
    status:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    bgImage:{
        width: '100%',
        height: '100%',
        resizeMode:'cover',
        position: 'absolute',
    },
    batteryView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    batteryImage:{
        height: 26,
        width: 70,
        marginRight:12,
    },
    batteryText:{
        color: 'white',
        fontSize:35,
    },
    statusText:{
        color: 'white',
        fontSize:20,
        fontWeight:'bold',
        marginTop:5,
    },
    menu:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:170,
    },
    menuIcon:{
        borderWidth:1,
        borderColor:'white',
        borderRadius:50,
        padding: 18,
        marginLeft:15,
        marginRight:15,
    },
});

export default styles;
