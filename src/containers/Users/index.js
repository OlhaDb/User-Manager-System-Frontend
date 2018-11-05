import React, { Component } from 'react';
import UsersList from '../../components/UsersList';
import AddUserFormModal from '../../components/Modals/AddUserFormModal';
import './style.css'

class Users extends Component {
    constructor() {
        super();

        this.showAddUserModal = this.showAddUserModal.bind(this);
        this.removeUser = this.removeUser.bind(this);
    }

    removeUser(id){
        fetch(`http://localhost:3000/api/user/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(() => {
                this.props.getUsersList();
            })
    }


    showAddUserModal(e){
        e.preventDefault();
        document.getElementById('addUserModal').style.display = 'block'
    }

    render(){
        return(
            <div className='main'>
                <h1>Users</h1>

                <UsersList
                    users={this.props.users}
                    groups={this.props.groups}
                    removeUser={this.removeUser}
                    getUsersList={this.props.getUsersList}
                />
                <button className='button' onClick={this.showAddUserModal}>Add user</button>

                <AddUserFormModal getUsersList={this.props.getUsersList}/>

            </div>
        );
    }
}

export default Users;
