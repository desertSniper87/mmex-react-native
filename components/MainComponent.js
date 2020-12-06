import React from 'react';
import { Component } from "react";
import { ACCOUNTS } from "./accounts";
import DashboardList from "./DashboardComponent";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: ACCOUNTS
        };
    }

    render() {
        return (
            <DashboardList accountInfo={this.state.accounts} />
        );
    }
}

export default Main;
