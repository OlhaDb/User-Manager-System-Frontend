import React, { Component } from 'react';
import GroupsOwnList from './GroupsOwnList/index';
import GroupsAllList from './GroupsAllList/index';
import './style.css';

class GroupsModal extends Component{
    constructor(){
        super();

        this.state = {
            showAllGroups: false
        };

        this.showAllGroups = this.showAllGroups.bind(this);
        this.toggleShowAllGroups = this.toggleShowAllGroups.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    toggleShowAllGroups(e){
        e.preventDefault();
        this.setState({
            showAllGroups: !this.state.showAllGroups
        })
    }

    showAllGroups(){
        if(this.state.showAllGroups) {
            return <GroupsAllList
                user={this.props.user}
                groups={this.props.groups}
                getUsersList={this.props.getUsersList}
            />
        }
    }

    onClose(){
        document.getElementById(this.props.index).style.display = 'none';
    }

    render(){
        return(
            <div id={this.props.index} className="own-groups-modal">
                <div className="own-groups-modal-content">
                    <span onClick={this.onClose} className="close">&times;</span>
                    <h2>{this.props.user.firstName} {this.props.user.lastName} - groups</h2>
                    <hr/>
                    <GroupsOwnList
                        user={this.props.user}
                        groups={this.props.groups}
                    />
                    <button className='button' onClick={this.toggleShowAllGroups}>Add another group</button>
                    {this.showAllGroups()}
                </div>
            </div>

                )
    }
}

export default GroupsModal;
