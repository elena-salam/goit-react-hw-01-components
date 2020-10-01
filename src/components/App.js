import React from 'react'
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import FriendList from './Friendlist/FriendList'
import TransactionHistory from './Transaction/TransactionHistory'
import user from '../data/user.json'
import statisticalData from '../data/statistical-data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions'

export default function App(){
    return(
        <>
            <Profile
                name={user.name} 
                avatar={user.avatar}
                tag={user.tag}
                location={user.location}
                stats={user.stats}
            />

            <Statistics title="Upload stats" stats={statisticalData}/>
            <FriendList friends={friends}/>
            <TransactionHistory items={transactions}/>

        </>
    )
}

