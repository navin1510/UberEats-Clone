import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Home from './screens/Home'
import RestaurantDetails from "./screens/RestaurantDetails";
import RootNavigation from './navigation';

export default function App() {
    return (
        // <Home />
        // <RestaurantDetails />
        <RootNavigation />
    );
}
