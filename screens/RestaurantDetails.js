import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'

import About from '../components/restaurantDetails/About'
import MenuItems from '../components/restaurantDetails/MenuItems'
import ViewCart from '../components/restaurantDetails/ViewCart'

const RestaurantDetails = ({ route, navigation }) => {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems />
            <ViewCart navigation={navigation} RestaurantName={route.params.name} />
        </View>
    )
}

export default RestaurantDetails
