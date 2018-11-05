import React, {Component} from 'react';
import UsersListItem from './UsersListItem'
import './style.css';

class UsersList extends Component {
    constructor(){
        super();

        this.userListItem = this.userListItem.bind(this);
    }

    userListItem(){
        return this.props.users.records.map((user, index) => {
            const check = user.groupList.some((item) => {
                return this.props.group._id === item
            });
            if(check){
                return <UsersListItem
                    key={user._id}
                    user={user}
                    group={this.props.group}
                    getUsersList={this.props.getUsersList}
                    index={index}
                />
            }

        })
    }

    render() {
        return (
            <div>
                <table className ='usersStyle'>
                    <tr>
                        <th>#</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Remove user from group</th>
                    </tr>

                    {this.userListItem()}

                </table>
            </div>
        )
    }
}

export default UsersList;
