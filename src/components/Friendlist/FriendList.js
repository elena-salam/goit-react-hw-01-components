import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListOfFriends = styled.ul`
margin: 0 auto;
width: 360px;
margin-bottom: 40px;
`;

function FriendList ({friends}){
    return(
        <ListOfFriends>
        {friends.map(friend =>
        <FriendListItem  
        key = {friend.id}
        avatar = {friend.avatar}
        name = {friend.name} 
        isOnline = {friend.isOnline}
        />)}
        </ListOfFriends>
    )
}

FriendList.propeTypes = {
 friends: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FriendList;