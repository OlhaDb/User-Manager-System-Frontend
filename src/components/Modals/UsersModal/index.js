import React, { Component } from 'react';
import UsersList from './UsersList';
import './style.css';

class UsersModal extends Component{
    constructor(){
        super();

        this.onClose = this.onClose.bind(this);
    }

    onClose(){
        document.getElementById(this.props.index).style.display = 'none';
    }

    render(){
        return(
            <div id={this.props.index} className="users-modal">
                <div className="users-modal-content">
                    <span onClick={this.onClose} className="close">&times;</span>
                    <h2>{this.props.group.name} - users</h2>
                    <UsersList
                        getUsersList={this.props.getUsersList}
                        users={this.props.users}
                        group={this.props.group}
                    />
                </div>
            </div>

        )
    }
}

export default UsersModal;
