import React from 'react';
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";


const DashboardList = (props) => {
    const renderAccountInfo = ({item, index}) => {
        return <ListItem key={index}
                         title={item.name}
                         subtitle={item.category}
                         onPress={() => props.onPress(item.id)}
                         hideChevron={true} />
                         // leftAvatar={item.image} />
    }


    return (
        <FlatList
            data={props.accountInfo}
            renderItem={renderAccountInfo}
            keyExtractor={el => el.id.toString()}/>
    )
}

export default DashboardList
