import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import CartScreen from './CartScreen';
import MenuScreen from './MenuScreen';
import ShoppingCartButton from './ShoppingCartButton';

const Stack = createStackNavigator();

function App() {
    const [cartItems, setCartItems] = useState([]);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Menu"
                    options={({ navigation }) => ({
                        headerRight: () => (<ShoppingCartButton navigation={navigation} cartItems={cartItems}/>),
                        headerRightContainerStyle: { paddingRight: 20 },
                    })}
                >
                    {(props) => <MenuScreen {...props} cartItems={cartItems} setCartItems={setCartItems} />}
                </Stack.Screen>
                <Stack.Screen name="Cart">
                    {(props) => <CartScreen {...props} cartItems={cartItems} setCartItems={setCartItems} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
