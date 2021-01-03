import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RemoveItemModal from './RemoveItemModal';

const styles = StyleSheet.create({
    itemControlContainer: {
        flexDirection: 'row'
    },
    itemRowContainer: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding: 5,  
    },
    quantity: {
        fontSize: 20,
        paddingHorizontal: 5,
        paddingTop: 2,
    },
    title: {
        fontSize: 20,
        paddingLeft: 10,
    },
    trashIconContainer: {
        flexDirection: 'row-reverse'
    },
});

function CartItem(props) {
    const [modalVisible, setModalVisible] = useState(false);

    const addItemToCart = (target) => {
        const cartItems = [...props.cartItems];
        const index = cartItems.findIndex((item) => item.id == target);
        cartItems[index].quantity++;
        props.setCartItems(cartItems);
    };

    const removeItemFromCart = (target) => {
        const cartItems = [...props.cartItems];
        const itemIndex = cartItems.findIndex((item) => item.id == target);
        if (cartItems[itemIndex].quantity !== 1) {
            cartItems[itemIndex].quantity--;
        }

        props.setCartItems(cartItems);
    };

    return (
        <View>
            <RemoveItemModal
                id={props.id}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setCartItems={props.setCartItems}
                cartItems={props.cartItems}
            />
            <View style={styles.itemRowContainer}>
                <View style={styles.itemControlContainer}>
                    <TouchableOpacity onPress={() => removeItemFromCart(props.id)}>
                        <Icon type='ionicon' name='minus-box-outline' style={styles.icon}size={30} />
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{props.quantity}</Text>
                    <TouchableOpacity onPress={() => addItemToCart(props.id)}>
                        <Icon type='ionicon' name='plus-box-outline' size={30} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                </View>
                <View style={styles.trashIconContainer}>
                    <TouchableOpacity onPress={() => {
                        setModalVisible(true);
                    }}
                    >
                        <Icon type='ionicon' name='trash-can-outline' size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

CartItem.propTypes = {
    cartItems: PropTypes.array,
    id: PropTypes.number,
    modalVisible: PropTypes.bool,
    quantity: PropTypes.number,
    setCartItems: PropTypes.func,
    setModalVisible: PropTypes.func,
    title: PropTypes.string,

};
export default CartItem;
