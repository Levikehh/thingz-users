import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../components/css/home.css'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    name: 'Dóczi Levente',
                    profile: 'https://avatars.githubusercontent.com/u/62709717?s=460&u=a80d93f22035128e439a07205c19ca15c7a2bd13&v=4',
                    joined: '2021-03-20'
                }, {
                    id: 2,
                    name: 'Dóczi Levente',
                    profile: 'https://avatars.githubusercontent.com/u/62709717?s=460&u=a80d93f22035128e439a07205c19ca15c7a2bd13&v=4',
                    joined: '2021-03-20'
                }
            ]
        }
    }


    render() {
        return (
            <div className='users-container'>
                {this.state.users && this.state.users.length && this.state.users.map((user, u) => {
                    return (
                        <Link key={u} className={`user-list-item user-${user.id}`} to={`/user/${user.id}`}>
                            <div className='user-profile' style={{ background: `url(${user.profile})` }}></div>
                            <div className='user-data'>
                                <span className='user-name'>{user.name}</span>
                                <span className='user-joined'>{user.joined}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }
}
