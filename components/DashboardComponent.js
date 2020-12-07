import React, { Component } from 'react';
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";


class DashboardList extends Component {
    constructor(props) {
        super(props);
    }

    renderAccountInfo = ({item, index}) => {
        return <ListItem key={index}
                         title={item.name}
                         subtitle={item.category}
                         onPress={() => this.props.onPress(item.id)}
                         hideChevron={true}/>
        // leftAvatar={item.image} />
    }


    render() {
            return (
                <FlatList
                    data={this.props.accountInfo}
                    renderItem={this.renderAccountInfo}
                    keyExtractor={el => el.id.toString()}/>
            )
        }
    }

    export default DashboardList
