import React from 'react';
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";



const TransactionList = (props) => {
    const renderTransactionInfo = ({item, index}) => {
        const transaction = props.transaction;

        if (transaction !== null) {
            return <ListItem key={index}
                             title={item.name}
                             subtitle={item.category}
                             hideChevron={true} />
                             // leftAvatar={item.image} />

        } else return('<View></View>')

    }
    return (
        <FlatList
            data={props.transactions}
            renderItem={renderTransactionInfo}
            keyExtractor={el => el.id.toString()}/>
    )
}

export default TransactionList;
