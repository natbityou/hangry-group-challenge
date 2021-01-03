import PropTypes from 'prop-types';
import React from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    badge: {
        alignItems: 'center',
        backgroundColor: '#DE3618',
        borderColor: '#DE3618',
        borderRadius: 100,
        borderWidth: 1,
        height: 28,
        minWidth: 28,
        padding: 3,
    },
    badgeText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 20,
    },
    cartIconContainer:{
        flexDirection: 'row'
    }
});

function ShoppingCartButton(props) {
    const getNumberOfItemsInCart = () => {
        const reducer = (accumulator, item) => accumulator + item.quantity;

        const numberOfItemsInCart = props.cartItems.reduce(reducer, 0);

        return numberOfItemsInCart;
    };

    const numberOfItemsInCart = getNumberOfItemsInCart();
    const cartHasItems = numberOfItemsInCart > 0;

    return (
        <TouchableOpacity onPress={() => {
            props.navigation.navigate('Cart');
        }}>
            <View style={styles.cartIconContainer}>
                <Icon type='ionicon' name='cart-outline' size={30}/>
                {cartHasItems
                    ? <TouchableOpacity style={styles.badge} disabled={true}>
                        <Text style={styles.badgeText}>{numberOfItemsInCart}</Text>
                    </TouchableOpacity>
                    : <React.Fragment/>
                }
            </View>
        </TouchableOpacity>
    );
}
ShoppingCartButton.propTypes = {
    navigation: PropTypes.object,
    quantity: PropTypes.number,
    cartItems: PropTypes.array,
};

export default ShoppingCartButton;
