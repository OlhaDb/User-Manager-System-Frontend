import React, { Component } from 'react';
import Users from '../Users';
import Groups from '../Groups';
import './style.css';

class ButtonsBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            show: 'users',
            users: {
                records: []
            },
            groups: {
                records: []
            }
        };

        this.onClick = this.onClick.bind(this);
        this.showComponent = this.showComponent.bind(this);
        this.getUsersList = this.getUsersList.bind(this);
        this.getGroupsList = this.getGroupsList.bind(this);
    }

    onClick(e){
        e.preventDefault();
        this.setState({
            show: e.target.id
        })
    }

    showComponent(){
        switch (this.state.show){
            case 'users':
                return <Users users={this.state.users} groups={this.state.groups} getUsersList={this.getUsersList}/>;
            case 'groups':
                return <Groups users={this.state.users} groups={this.state.groups} getGroupsList={this.getGroupsList} getUsersList={this.getUsersList}/>;
        }
    }

    componentDidMount(){
        this.getUsersList();
        this.getGroupsList();
    }

    getUsersList(){
        fetch('http://localhost:3000/api/user')
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    users: data
                });
            })
    }

    getGroupsList(){
        fetch('http://localhost:3000/api/group')
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    groups: data,
                });
            })
    }

    render(){
        return(
            <div>
                <div className='sidenav' onClick={this.onClick}>
                    <a id='users'>Users</a>
                    <a id='groups'>Groups</a>
                </div>
                {this.showComponent()}
            </div>
        )
    }
}

export default ButtonsBar;
