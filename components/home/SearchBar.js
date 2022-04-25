import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SearchBar = ({cityHandler}) => {
    // const windowWidth = Dimensions.get('window').width;
    // const windowHeight = Dimensions.get('window').height;
    return (
        <View style={{ flexDirection:"row" }}>
            <GooglePlacesAutocomplete 
                query={{key:""}}
                onPress={(data, details = null)=>{
                    const city = data.description.split(",")[0]
                    cityHandler(city);
                }}
                placeholder="Search"
                styles={{
                    textInput:{
                        backgroundColor:'#eee',
                        borderRadius:20,
                        fontWeight:'700',
                        margin:4
                    },
                    textInputContainer:{
                        backgroundColor:"#eee",
                        borderRadius:50,
                        flexDirection:"row",
                        alignItems:'center',
                        margin:7,
                        marginLeft:15,
                        marginRight:20,
                        marginBottom:15
                        
                    }
                }}
                renderLeftButton={()=>(
                    <View style={{marginLeft:10}}>
                        <Ionicons name='location-sharp' size={26} />
                    </View>
                )}
                renderRightButton={()=>(
                    <View style={{flexDirection:'row',marginRight:8,backgroundColor:"#fff",padding:9,borderRadius:30,alignItems:'center'}}>
                        <AntDesign name='clockcircle' size={12} style={{marginRight:6}}/>
                        <Text>Search</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default SearchBar
