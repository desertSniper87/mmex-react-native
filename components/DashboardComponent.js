import React, { Component } from 'react';
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { TRANSACTIONS } from "../shared/transactions";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: TRANSACTIONS
        };
    }

    static navigationOptions = {
        title: 'Dashboard'
    };


    renderAccountInfo = ({item, index}) => {
        return <ListItem key={index}
                         title={item.name}
                         subtitle={item.category}
                         onPress={() => navigate('TransactionList', { accountID: item.id })}
                         data={this.state.transactions}
                         hideChevron={true}/>
        // leftAvatar={item.image} />
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <FlatList
                data={this.props.accountInfo}
                renderItem={this.renderAccountInfo}
                keyExtractor={el => el.id.toString()}/>
        )
    }
}

export default Dashboard
