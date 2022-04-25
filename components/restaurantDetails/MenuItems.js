import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const foods = [{
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-for-Restaurants-In-Varanasi_11th-dec.jpg"
}, {
    title: "lasa",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-for-Restaurants-In-Varanasi_11th-dec.jpg"
}, {
    title: "foodkitchen",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-for-Restaurants-In-Varanasi_11th-dec.jpg"
}, {
    title: "iceCream",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-for-Restaurants-In-Varanasi_11th-dec.jpg"
}, {
    title: "bread",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-for-Restaurants-In-Varanasi_11th-dec.jpg"
}, {
    title: "Sandwich",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-for-Restaurants-In-Varanasi_11th-dec.jpg"
}]

const MenuItems = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItems}>
                        <BouncyCheckbox
                            iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                            fillColor="green"
                        />
                        <FoodInfo food={foods[0]} />
                        <FoodImage food={foods[0]} />
                    </View>
                    <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20 }} />
                </View>
            ))}
        </ScrollView>
    )
}

const FoodInfo = (props) => {
    return (
        <View style={{ width: 240, justifyContent: 'space-evenly' }}>
            <Text style={styles.titleStyle}>{props.food.title}</Text>
            <Text>{props.food.description}</Text>
            <Text>{props.food.price}</Text>
        </View>
    )
}

const FoodImage = (props) => (
    <View>
        <Image source={{ uri: props.food.image }} style={{ width: 60, height: 60, borderRadius: 8, marginTop: 15, marginRight: 10 }} />
    </View>
)

const styles = StyleSheet.create({
    menuItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '600'
    }
})

export default MenuItems
