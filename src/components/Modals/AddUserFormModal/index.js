import React, {Component} from 'react';
import './style.css';

class AddFormModal extends Component {
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addUser = this.addUser.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    addUser(){
        fetch('http://localhost:3000/api/user', {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(() => {
                this.props.getUsersList();
            })
    }

    onChange(e){
        e.preventDefault();
        if(e.target.id === 'firstName') {
            this.setState({firstName: e.target.value})
        } else {
            this.setState({lastName: e.target.value})
        }
    }

    onSubmit(e){
        e.preventDefault();
        this.addUser();
        this.closeModal();
    }

    closeModal(){
        document.getElementById('addUserModal').style.display = 'none';
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
    }

    render(){
        return(
            <div id="addUserModal" className="modal">
                <div className="modal-content">
                    <span onClick={this.closeModal} className="close">&times;</span>
                    <form>
                        <label>Add user</label>
                        <input id='firstName' onChange={this.onChange} type='text' placeholder='First Name'/>
                        <input id='lastName' onChange={this.onChange} type='text' placeholder='Last Name'/>
                        <button className='button' onClick={this.onSubmit}>Accept</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default AddFormModal;
