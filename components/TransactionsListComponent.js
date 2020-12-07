import React, { Component } from 'react';
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";



class TransactionList extends Component {
    constructor(props) {
        super(props);
    }

    renderTransactionInfo = ({item, index}) => {
        const transaction = this.props.transaction;

        if (transaction !== null) {
            return <ListItem key={index}
                             title={item.name}
                             subtitle={item.category}
                             hideChevron={true} />
            // leftAvatar={item.image} />

        } else return('<View></View>')

    }

    render() {
        return (
            <FlatList
                data={this.props.transactions}
                renderItem={this.renderTransactionInfo}
                keyExtractor={el => el.id.toString()}/>
        )
    }
}

export default TransactionList;
