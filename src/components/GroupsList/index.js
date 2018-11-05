import React, {Component} from 'react';
import GroupsListItem from './GroupsListItem';
import './style.css'


class GroupsList extends Component {
    render() {
        return (
            <div>
                <table className ='groupsStyle'>
                    <tr>
                        <th>#</th>
                        <th>Group name</th>
                        <th>Get users</th>
                        <th>Remove group</th>
                    </tr>

                    {this.props.groups.records.map((group, index) => <GroupsListItem
                        group={group}
                        key={group._id}
                        removeGroup={this.props.removeGroup}
                        index={index}
                        getUsersList={this.props.getUsersList}
                        users={this.props.users}
                    />)}


                </table>


            </div>
        )
    }
}

export default GroupsList;
