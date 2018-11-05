import React, {Component} from 'react';
import './style.css';

class AddGroupFormModal extends Component {
    constructor(){
        super();
        this.state = {
            groupName: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addGroup = this.addGroup.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    addGroup(){
        fetch('http://localhost:3000/api/group', {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({name: this.state.groupName})
        })
            .then(response => response.json())
            .then(() => {
                this.props.getGroupsList();
            })
    }

    onChange(e){
        e.preventDefault();
        this.setState({groupName: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        this.addGroup();
        this.closeModal();
    }

    closeModal(){
        document.getElementById('addGroupModal').style.display = 'none';
        document.getElementById('name').value = '';
    }

    render(){
        return(
            <div id="addGroupModal" className="modal">
                <div className="modal-content">
                    <span onClick={this.closeModal} className="close">&times;</span>
                    <form>
                        <label>Add group</label>
                        <input id='name' onChange={this.onChange} type='text' placeholder='Name'/>
                        <button className='button' onClick={this.onSubmit}>Accept</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default AddGroupFormModal;
