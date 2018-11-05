import React, { Component } from 'react';
import GroupsList from '../../components/GroupsList';
import AddGroupFormModal from '../../components/Modals/AddGroupFormModal';

class Groups extends Component {
    constructor() {
        super();

        this.showAddGroupModal = this.showAddGroupModal.bind(this);
        this.removeGroup = this.removeGroup.bind(this);
    }

        removeGroup(id){
            fetch(`http://localhost:3000/api/group/${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(() => {
                    this.props.getGroupsList();
                })
        }

        showAddGroupModal(e){
            e.preventDefault();
            document.getElementById('addGroupModal').style.display = 'block'
        }


        render() {
        return (
            <div className='main'>
                <h1>Groups</h1>
                <GroupsList
                    users={this.props.users}
                    groups={this.props.groups}
                    removeGroup={this.removeGroup}
                    getGroupsList={this.props.getGroupsList}
                    getUsersList={this.props.getUsersList}
                />
                <button className='button' onClick={this.showAddGroupModal}>Add group</button>

                <AddGroupFormModal getGroupsList={this.props.getGroupsList}/>
            </div>
        )
    }

}

export default Groups;
