import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProfileCard = styled.div`
margin: 0 auto;
margin-top: 40px;
margin-bottom: 40px;
padding-top: 30px; 
width: 360px;
text-align: center;
background-color: white;

`;

const Avatar = styled.img`
margin-bottom: 30px;
border-radius: 50%;
`;

const Name = styled.p`
margin-bottom: 15px;
font-size: 18px;
font-weight: 700;
`;

const Tag = styled.p`
margin-bottom: 10px;
font-size: 16px;
font-weight: 200;

`;

const Location = styled.p`
margin-bottom: 20px;
font-size: 16px;
font-weight: 400;
`;

const Stats = styled.ul`
display: flex;

`;
const StatsItem = styled.li`
padding: 20px 0;
width: 120px;
display: flex;
flex-direction: column;
border: 1px solid #e4e9f0;
background-color: #f3f6f9;

`;

const StatsCategory = styled.span`
margin-bottom: 12px;
font-size: 16px;

`;

const StatsValue = styled.span`
font-weight: 700;
`;






 function Profile (props){
 const {avatar, name, tag, location, stats:{followers, views, likes}} = props;
  return (
  <ProfileCard>
    <div>
    <Avatar 
      src= {avatar}
      alt = "user avatar"
      
      />
    <Name >{name}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
    </div>
    <Stats>
    <StatsItem>
      <StatsCategory>Followers</StatsCategory>
      <StatsValue>{followers}</StatsValue>
    </StatsItem>
    <StatsItem>
      <StatsCategory>Views</StatsCategory>
      <StatsValue>{views}</StatsValue>
    </StatsItem>
    <StatsItem>
      <StatsCategory>Likes</StatsCategory>
      <StatsValue>{likes}</StatsValue>
    </StatsItem>
    </Stats> 
  </ProfileCard> 
  )
}
Profile.defaultProps = {
  avatar: "https://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=150",
  followers: 0,
  views: 0,
  likes: 0,
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number, 
    views: PropTypes.number, 
    likes: PropTypes.number,

  })
  
}

export default Profile;