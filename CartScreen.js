import PropTypes from 'prop-types';
import React from 'react';
import {
    FlatList, SafeAreaView, StyleSheet, Text, View
} from 'react-native';
import CartItem from './CartItem';

const styles = StyleSheet.create({
    cartContainer: {
        flex: 1,
    },
    emptyCartContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    emptyText: {
        color: '#686d76',
        fontSize: 30,
    },
});

function CartScreen(props) {
    const renderItem = ({ item }) => (
        <CartItem id={item.id}
            title={item.title}
            quantity={item.quantity}
            setCartItems={props.setCartItems}
            cartItems={props.cartItems}
        />
    );

    return (
        props.cartItems.length > 0
            ? <SafeAreaView style={styles.cartContainer}>
                <FlatList
                    data={props.cartItems}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.title}
                />
            </SafeAreaView>
            : <View style={styles.emptyCartContainer}>
                <Text style={styles.emptyText}>Cart Is Empty</Text>
            </View>
    );
}

CartScreen.propTypes = {
    cartItems: PropTypes.array,
    setCartItems: PropTypes.func,
};

export default CartScreen;
