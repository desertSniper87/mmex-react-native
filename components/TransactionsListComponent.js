import React, { Component } from 'react';
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { TRANSACTIONS } from "../shared/transactions";



class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: TRANSACTIONS
        };
    }

    static navigationOptions = {
        title: 'Transaction List'
    };

    renderTransactionInfo = ({item, index}) => {
        const accountID = this.props.navigation.getParam('accountID','');

        if (transaction !== null) {
            return <ListItem key={index}
                             title={item.name}
                             subtitle={item.category}
                             hideChevron={true} />
                             // leftAvatar={{source: require(item.image)}} />

        } else return('<View></View>')

    }

    render() {
        const transaction = this.props.transaction;
        return (
            <FlatList
                data={this.props.transactions}
                renderItem={this.renderTransactionInfo}
                keyExtractor={el => el.id.toString()}/>
        )
    }
}

export default Transactions;
