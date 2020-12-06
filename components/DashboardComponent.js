import React from 'react';
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

const renderAccountInfo = ({item, index}) => {
    return <ListItem key={index}
                     title={item.name}
                     subtitle={item.category}
                     hideChevron={true}
                     leftAvatar={{source: require('../images/bank.png')}} />
}

const DashboardList = (props) => {
    return (
        <FlatList
            data={props.accountInfo}
            renderItem={renderAccountInfo}
            keyExtractor={el => el.id.toString()}/>
    )
}

export default DashboardList
