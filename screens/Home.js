import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StatusBar, PlatformColor, Platform, ScrollView } from 'react-native'

import HeaderTab from '../components/home/HeaderTab'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItem from '../components/home/RestaurantItem'
import BottomTab from '../components/home/BottomTab'

import { Divider } from 'react-native-elements/dist/divider/Divider'


const YELP_API = '';

export default function Home({ navigation }) {
    const [restaurants, setrestaurants] = useState()
    const [city, setCity] = useState("Chicago")
    const [activeTab, setActiveTab] = useState("Delivery")
    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API}`
            },
        }
        return fetch(yelpUrl, apiOptions)
            .then((response) => response.json())
            .then((json) => setrestaurants(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))));
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab])
    // console.log(restaurants)
    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
            <View style={{ backgroundColor: "#fff" }}>
                <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurants} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <BottomTab />
        </SafeAreaView>
    )
}
