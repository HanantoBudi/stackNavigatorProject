import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {StackNavigator} from 'react-navigation'

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: 'Home Screen',
    }
    render() {
        return (
            <View>
                <Text>
                    Home Screen
                </Text>
                <Button 
                    title="Go to Main Screen"
                    onPress={()=>this.props.navigation.navigate('main')}
                />
            </View>
        );
    }
}