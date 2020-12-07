import React from 'react';
import { Component } from "react";
import { View } from "react-native";
import { createStackNavigator  } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import Dashboard from "./DashboardComponent";
import Transactions from "./TransactionsListComponent";

import { ACCOUNTS } from "../shared/accounts";
import { TRANSACTIONS } from "../shared/transactions";





const MenuNavigator = createStackNavigator({
    Dashboard: { screen: Dashboard },
    Transactions: { screen: Transactions }
    }, {
    initialRouteName: 'Dashboard',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
})

const Main = createAppContainer(MenuNavigator);
export default Main;

/*
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: ACCOUNTS,
            transactions: TRANSACTIONS,
            selectedAccountID: 1
        };
    }

    onAccountSelect = (accountID) => {
        console.log(accountID)
        this.setState({selectedAccountID: accountID});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{ flex: 1, paddingTop: 5 }}>
                    <MenuNavigator />
                </View>
            </View>
        );
    }
}
*/

