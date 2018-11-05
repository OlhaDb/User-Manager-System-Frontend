import React, {Component} from 'react';
import GroupsModal from '../../Modals/GroupsModal/index';

class UsersListItem extends Component {
    constructor() {
        super();

        this.onRemove = this.onRemove.bind(this);
        this.showGroupsModal = this.showGroupsModal.bind(this);
    }

    onRemove(e) {
        e.preventDefault();
        this.props.removeUser(this.props.user._id)
    }

    showGroupsModal(e){
        e.preventDefault();
        document.getElementById(this.props.index).style.display = 'block'
    }

    render() {
        const firstName = this.props.user.firstName;
        const lastName = this.props.user.lastName;
        return (
                <tr>
                    <td>{this.props.index + 1}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td><button className='get-groups-button' onClick={this.showGroupsModal}>getUserGroups</button></td>
                    <td><button className='remove-button' onClick={this.onRemove}>Remove</button></td>

                    <GroupsModal
                        index={this.props.index}
                        user={this.props.user}
                        groups={this.props.groups}
                        getUsersList={this.props.getUsersList}
                    />

                </tr>



        )
    }
}

export default UsersListItem;
