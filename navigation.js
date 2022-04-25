import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import RestaurantDetails from './screens/RestaurantDetails';
import { Provider as ReduxProvider } from 'react-redux';
// import store from './redux/store'
import configureStore from './redux/store';

const store = configureStore();

export default function RootNavigation() {
    const stack = createStackNavigator();

    const screenOptions = {
        headerShown: false
    }

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
                    <stack.Screen name='Home' component={Home} />
                    <stack.Screen name='RestaurantDetail' component={RestaurantDetails} />
                </stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
}