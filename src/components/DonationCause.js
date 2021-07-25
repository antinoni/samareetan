import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image, StyleSheet } from 'react-native';


class DonationCause extends React.Component {
    static propTypes ={
        cause: PropTypes.object.isRequired,
    };
    render() {
        return (
            <View>
                <Image 
                    source={{uri: 'https://www.efsa.europa.eu/sites/default/files/styles/lg_col_12_16x9/public/news/food-donations.jpg?h=82f92a78&itok=ECkzBW-F'}} 
                    style = {styles.image}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
    }
});

export default DonationCause;