import PropTypes from 'prop-types';
import React from 'react';
import {
    FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import cookie1Image from './images/cookie1.png';
import cookie2Image from './images/cookie2.png';
import cookie3Image from './images/cookie3.png';
import cookie4Image from './images/cookie4.png';
import cookie5Image from './images/cookie5.png';

const styles = StyleSheet.create({
    addToCartIcon: {
        paddingRight: 15, 
        paddingTop: 30
    },
    description: {
        color: '#686d76',
        fontSize: 13,
    },
    itemDescriptionContainer: {
        flexDirection: 'column', 
        paddingTop: 25 
    },
    itemLeftColumnContainer: {
        flexDirection: 'row'
    },
    itemRightColumnContainer:{
        flexDirection: 'row-reverse' 
    },
    itemRowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding: 5, 
    },
    menu: {
        padding: 10,
    },
    menuContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    menuItemImage: {
        height: 100,
        width: 100,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

const menuData = [
    {
        id: 1,
        title: 'Classic Cookies',
        description: 'Classic Chunky Chococlate Cookie',
        image: cookie1Image,
    },
    {
        id: 2,
        title: 'PB Cookies',
        description: 'PB Cup in a Chocolate Chip Cookie',
        image: cookie2Image,
    },
    {
        id: 3,
        title: 'M&M Cookies',
        description: 'M&M in a Chocolate Chip Cookie',
        image: cookie3Image,
    },
    {
        id: 4,
        title: 'Oreo Cookies',
        description: 'Oreo in a Chocolate Chip Cookie',
        image: cookie4Image,
    },
    {
        id: 5,
        title: 'Snickers Cookies',
        description: 'Skickers in a Chocolate Chip Cookie',
        image: cookie5Image,

    },
];

function MenuScreen(props) {
    const addItemToCart = (target) => {
        let cartItems = [...props.cartItems];
        const filteredCartItems = props.cartItems.filter((item) => target.id == item.id);
        const itemIsInCart = filteredCartItems.length !== 0;

        if (itemIsInCart) {
            const itemIndex = cartItems.findIndex((item) => item.id == target.id);
            cartItems[itemIndex].quantity++;
        } else {
            const newItem = {
                id: target.id,
                title: target.title,
                quantity: 1,
            };
            cartItems = [...props.cartItems, newItem];
        }

        props.setCartItems(cartItems);
    };

    const Item = ({ item }) => (
        <View style={styles.itemRowContainer}>
            <View style={styles.itemLeftColumnContainer}>
                <View>
                    <TouchableOpacity onPress={() => addItemToCart(item)}>
                        <Icon type='ionicon' name='cart-plus' size={30} style={styles.addToCartIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.itemDescriptionContainer}>
                    <View>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.itemRightColumnContainer}>
                <Image source={item.image} style={styles.menuItemImage}/>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.menuContainer}>
            <FlatList
                data={menuData}
                style={styles.menu}
                renderItem={Item}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
}

MenuScreen.propTypes = {
    item: PropTypes.object,
    cartItems: PropTypes.array,
    setCartItems: PropTypes.func,
};
export default MenuScreen;
