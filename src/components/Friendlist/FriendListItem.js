import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import friends from '../../data/friends.json';

const ListItem = styled.li`
display: flex;
margin: 15px auto;
padding: 7px 15px;
/* width: 400px; */
background-color: #fff;
box-shadow: 0px 5px 5px 0px;
align-items: center;
`;

const CircleOfPresence = styled.span`
margin-right: 15px;
width: 25px;
height: 25px;
background-color: ${props => props.online? 'green': 'red'};
border-radius: 50%;

`;

const Name = styled.p`
margin-left: 15px;
font-size: 24px;
font-weight: 700;
`;

const Avatar = styled.img`
border-radius: 10px;
`;
function FriendListItem ({avatar, name, isOnline}){

    return(
        
        <ListItem>
            <CircleOfPresence online = {isOnline}/>
            
            <Avatar src = {avatar} alt = {name}/>
            <Name>{name}</Name>

        </ListItem>
    )
   
}


FriendListItem.defaultProps = {
    avatar: "https://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=128",
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}

export default FriendListItem;
