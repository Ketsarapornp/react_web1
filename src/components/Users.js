import React, { Component } from 'react'
import User from './User'

export default class Users extends Component {
    render() {
        return (
            <div>
                <User fname="ketsaraporn " lname="puengphuk"/>
                <User fname="ok " lname="yes"/>
            </div>
        )
    }
}
