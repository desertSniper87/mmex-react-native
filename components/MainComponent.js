import React from 'react';
import { Component } from "react";
import { ACCOUNTS } from "./accounts";
import DashboardList from "./DashboardComponent";
import { View } from "react-native";
import TransactionList from "./TransactionsListComponent";
import { TRANSACTIONS } from "./transactions";

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
                <DashboardList accountInfo={this.state.accounts}
                    onPress={(accountID) => this.onAccountSelect(accountID)} />
                <TransactionList transactions={this.state.transactions.filter((transaction) => transaction.accountID === this.state.selectedAccountID)} />
            </View>
        );
    }
}

export default Main;
