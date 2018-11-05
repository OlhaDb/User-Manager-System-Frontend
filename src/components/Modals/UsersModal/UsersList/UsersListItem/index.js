import React, {Component} from 'react';

class UsersListItem extends Component {
    constructor() {
        super();

        this.onRemove = this.onRemove.bind(this);
        this.removeUserFromGroup = this.removeUserFromGroup.bind(this);
    }

    removeUserFromGroup(){
        fetch(`http://localhost:3000/api/user/remove-group/${this.props.user._id}`, {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({id: this.props.group._id})
        })
            .then(response => response.json())
            .then(() => {
                this.props.getUsersList();
            })
    }

    onRemove(e) {
        e.preventDefault();
        this.removeUserFromGroup();
    }

    render() {
        const firstName = this.props.user.firstName;
        const lastName = this.props.user.lastName;
        return (
                <tr>
                    <td>{this.props.index + 1}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td><button className='add-to-group-button' onClick={this.onRemove}>Remove</button></td>
                </tr>



        )
    }
}

export default UsersListItem;
