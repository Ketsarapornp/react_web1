import React, { Component } from 'react'

const data = [
  { id: 1, title: '', pic: './images/c.jpg' }
]


export default class Profile extends Component {
  render() {
    return (
      <div>
        <h1>ข้อมูลส่วนตัว</h1>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.pic} width="300" />
              <h3>{item.title}</h3>
            </div>
          )
        })}
      </div>
    )
  }
}






