import React from 'react'
import { View, Text, Image } from 'react-native'

const yelpRestaurantInfo = {
    name: 'FarmHouse kitchen Thai Cuisine',
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-for-Restaurants-In-Varanasi_11th-dec.jpg",
    price: "$$",
    rating: '4.6',
    reviews: "1500",
    categories: [{ title: "Indian" }, { title: 'Comfort Food' }, { title: "coffee" }, { title: "IceCream" }, { title: "snacks" }, { title: "sweets" }]
    // description : 'Thai . Comfort . $$ . 🎟️ . 4 ⭐(2314+)'
}

const About = (props) => {

    const { name, image, price, reviews, rating, categories } = props.route.params;
    const formattedCategories = categories.map((cat) => cat.title).join(" . ")
    const description = `${formattedCategories} ${price ? ' . ' + price : ""} . 🎟️ . ${rating} ⭐ ${reviews ? '(' + reviews + ')' : ""}`;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
)

const RestaurantName = (props) => (
    <Text style={{ fontSize: 29, fontWeight: "600", marginTop: 10, marginHorizontal: 15 }} >
        {props.name}
    </Text>
)

const RestaurantDescription = (props) => <Text style={{ marginTop: 10, marginHorizontal: 20, fontWeight: "400", fontSize: 15.5 }}>{props.description}</Text>

export default About
