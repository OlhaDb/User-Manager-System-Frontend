import React, {Component} from 'react';
import UsersListItem from './UsersListItem'
import './style.css';

class UsersList extends Component {
    render() {
        return (
            <div>
                <table className ='usersStyle'>
                    <tr>
                        <th>#</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Get user group</th>
                        <th>Remove user</th>
                    </tr>

                    {this.props.users.records.map((user, index) =>

                        <UsersListItem
                            key={user._id}
                            user={user}
                            groups={this.props.groups}
                            removeUser={this.props.removeUser}
                            getUsersList={this.props.getUsersList}
                            index={index}
                        />

                    )}

                </table>
            </div>
        )
    }
}

export default UsersList;
