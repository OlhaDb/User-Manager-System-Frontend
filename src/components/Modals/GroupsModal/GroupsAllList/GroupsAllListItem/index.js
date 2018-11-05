import React, { Component } from 'react';

class GroupsAllListItem extends Component{
    constructor(){
        super();

        this.state = {}

        this.onClick = this.onClick.bind(this);
        this.addGroupToUser = this.addGroupToUser.bind(this);
        this.groupExist = this.groupExist.bind(this);
    }

    componentDidMount(){
        this.groupExist()
    }

    componentDidUpdate(){
        this.groupExist()
    }

    addGroupToUser(userId, groupId){
        fetch(`http://localhost:3000/api/user/add-group/${userId}`, {
            headers: {'Content-Type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify({ idGroup: groupId })
        })
            .then(response => response.json())
            .then(() => {
                this.props.getUsersList();
            })
    };

    onClick(e){
        e.preventDefault();
        this.addGroupToUser(this.props.user._id, this.props.group._id);
    };

    groupExist(){
        if(this.props.user.groupList.some((item) => item === this.props.group._id)){
            this._row.className = 'disabled'
        }
    }

    render() {
        return (
            <tr ref={(ref) => this._row = ref}>
                <td>{this.props.index + 1}</td>
                <td>  {this.props.group.name} </td>
                <td>
                    <button
                        className='add-to-user-button'
                        onClick={this.onClick}
                    >Add to user
                    </button>
                </td>
            </tr>
        )
    }
}

export default GroupsAllListItem;
