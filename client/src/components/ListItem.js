import React, { Component } from 'react'

export default class ListItem extends Component {
  render() {
    return (
      <tr>
        <td scope="col">{this.props.data._id}</td>
        <td scope="col">{this.props.data.name}</td>
        <td scope="col">
          <a href={"/book/delete/" + this.props.data._id} type="button" className="btn btn-light">Delete</a>
        </td>
      </tr>
    )
  }
}
