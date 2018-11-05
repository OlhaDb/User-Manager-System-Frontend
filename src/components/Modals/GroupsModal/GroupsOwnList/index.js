import React, {Component} from 'react';
import GroupsOwnListItem from './GroupsOwnListItem/index';
import './style.css'


class GroupsOwnList extends Component {
    constructor(){
        super();

        this.state = {};

        this.showGroups = this.showGroups.bind(this);
    }

    showGroups(){
        return (
            <div>
                <h3>Own groups</h3>
                <table className ='groupsStyle'>
                    <tr>
                        <th>#</th>
                        <th>Group name</th>
                    </tr>
                {
                    this.props.user.groupList.map((item, index) => {
                        const group = this.props.groups.records.find((i) => {
                            return i._id === item
                        });
                        return group && <GroupsOwnListItem
                            group={group}
                            key={index}
                            index={index}
                        />
                    })
                }
                </table>
            </div>
        )
    }


    render() {
        return (
            <div>
                {this.showGroups()}
            </div>
        )
    }
}

export default GroupsOwnList;
