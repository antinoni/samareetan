import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, FlatList, StyleSheet } from 'react-native';
import DonationCause from './DonationCause'

class DonationsList extends React.Component {
    static propTypes = {
        causes: PropTypes.array.isRequired,
    };
    render() {
        return (
            <View style={styles.list}>
                <FlatList
                    data={this.props.causes}
                    renderItem={({Item}) => <DonationCause cause={item} /> }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#000'
    },
});

export default DonationsList;