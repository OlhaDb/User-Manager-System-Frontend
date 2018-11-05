import React from 'react';

const GroupsOwnListItem = (props) => {
    const groupName = props.group.name;

    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>  {groupName} </td>
        </tr>

    )
}

export default GroupsOwnListItem;
