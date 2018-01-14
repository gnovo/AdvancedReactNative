import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
// import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements';

class ReviewScreen extends Component {
    static navigationOptions = {
        title: 'Review Jobs',
        // tabBar: {
        // icon: ({ tintColor }) => {
        //     return <Icon name="favorite" size={30} color={tintColor} />;
        // }
        // },
        header: ({ navigate }) => {
        return {
            right: (
            <Button
                title="Settings"
                onPress={() => navigate('settings')}
                backgroundColor="rgba(0,0,0,0)"
                color="rgba(0, 122, 255, 1)"
            />
            ),
            style: {
            marginTop: Platform.OS === 'android' ? 24 : 0
            }
        };
        }
    }

  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

export default ReviewScreen;
