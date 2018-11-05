import React, {Component} from 'react';
import GroupsAllListItem from './GroupsAllListItem/index';
import './style.css'


class GroupsAllList extends Component {
    render() {
        return (
            <div>
                <h3>All groups</h3>
                <table className ='groupsStyle'>
                    <tr>
                        <th>#</th>
                        <th>Group name</th>
                        <th></th>
                    </tr>

                    {this.props.groups.records.map((group, index) => <GroupsAllListItem
                        user={this.props.user}
                        group={group}
                        key={index}
                        removeGroup={this.props.removeGroup}
                        getUsersList={this.props.getUsersList}
                        index={index}
                    />)}


                </table>


            </div>
        )
    }
}

export default GroupsAllList;
