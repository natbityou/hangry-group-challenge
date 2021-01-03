import PropTypes from 'prop-types';
import React from 'react';
import {
    Modal, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';

const styles = StyleSheet.create({
    backButton:{
        paddingTop: 10 
    },
    backButtonText:{
        color: '#000',
        fontSize: 15
    },
    centeredView: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginTop: 22,
    },
    modalDescriptionText: {
        marginBottom: 15,
    },
    modalHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    modalView: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 5,
        margin: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    openButton: {
        backgroundColor: '#DE3618',
        borderRadius: 20,
        elevation: 2,
        padding: 10,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

function RemoveItemModal(props) {
    const removeItemFromCart = (target) => {
        const cartItems = [...props.cartItems];
        const itemIndex = cartItems.findIndex((item) => item.id == target);
        cartItems.splice(itemIndex, 1);
        props.setCartItems(cartItems);
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalHeaderText}>Remove Item?</Text>
                        <Text style={styles.modalDescriptionText}>Are you sure you want to remove this item from your cart?</Text>
                        <TouchableOpacity
                            style={styles.openButton}
                            onPress={() => {
                                removeItemFromCart(props.id);
                                props.setModalVisible(false);
                            }}
                        >
                            <Text style={styles.textStyle}>Remove Item</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => {
                                props.setModalVisible(false);
                            }}
                        >
                            <Text style={styles.backButtonText}>Go Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>

    );
}

RemoveItemModal.propTypes = {
    id: PropTypes.number,
    cartItems: PropTypes.array,
    modalVisible: PropTypes.bool,
    setCartItems: PropTypes.func,
    setModalVisible: PropTypes.func,
};
export default RemoveItemModal;
