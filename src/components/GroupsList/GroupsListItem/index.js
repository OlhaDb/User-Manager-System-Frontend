import React, { Component } from 'react';
import UsersModal from '../../Modals/UsersModal';

class GroupsListItem extends Component{
    constructor(){
        super();

        this.onRemove = this.onRemove.bind(this);
        this.showUsersModal = this.showUsersModal.bind(this);
        this.showRemoveButton = this.showRemoveButton.bind(this);
    }

    componentDidMount(){
        this.showRemoveButton()
    }

    componentDidUpdate(){
        this.showRemoveButton()
    }

    onRemove(e){
        e.preventDefault();
        this.props.removeGroup(this.props.group._id)
    };

    showUsersModal(e){
        e.preventDefault();
        document.getElementById(this.props.index).style.display = 'block'
    }

    showRemoveButton(){
        const check = this.props.users.records.some((item) => {
            return item.groupList.some((i) => {
                return i === this.props.group._id
            })
        });

        if(check){
            this._row.className = 'do-not-remove'
        } else {
            this._row.className = ''
        }
    }

    render() {
        return (
            <tr ref={(ref) => this._row = ref}>
                <td>{this.props.index + 1}</td>
                <td onClick={this.showUsersModal}>{this.props.group.name} </td>
                <td><button className='get-users-button' onClick={this.showUsersModal}>Get users</button></td>
                <td>
                    <button className='remove-button' onClick={this.onRemove}>Remove group</button>
                </td>

                <UsersModal
                    users={this.props.users}
                    index={this.props.index}
                    group={this.props.group}
                    getUsersList={this.props.getUsersList}
                />
            </tr>
        )
    }
}

export default GroupsListItem;
