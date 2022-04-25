import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons'

const RestaurantItem = ({ navigation, ...props }) => {
    const { restaurantData } = props
    return (
        <>
            {restaurantData && restaurantData.map((restaurant, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    style={{ marginBottom: 30 }}
                    onPress={() => navigation.navigate("RestaurantDetail", {
                        name: restaurant.name,
                        image: restaurant.image_url,
                        price: restaurant.price,
                        reviews: restaurant.review_count,
                        rating: restaurant.rating,
                        categories: restaurant.categories
                    })}
                >
                    <View style={{ marginTop: 10, marginHorizontal: 10, padding: 15, backgroundColor: 'white', borderRadius: 30 }}>
                        <RestaurantImage image={restaurant.image_url} />
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}

const RestaurantImage = (props) => (
    <>
        <Image
            source={{
                // uri : "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-for-Restaurants-In-Varanasi_11th-dec.jpg"
                uri: props.image
            }}
            style={{ width: "100%", height: 180, borderRadius: 15 }}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color='#fff' />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <View>
            {/* <Text style={{fontSize:15,fontWeight:'bold'}}>FarmHouse Kitchen Cuisine</Text>
            <Text style={{fontSize:13,color:'gray'}}>30-45 ~ min</Text> */}
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: 'gray' }}>30-45 ~ min</Text>
        </View>
        <View style={{ backgroundColor: "#eee", height: 30, width: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
            <Text >{props.rating}</Text>
        </View>
    </View>
)

export default RestaurantItem
