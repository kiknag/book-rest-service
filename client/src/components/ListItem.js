import React, { Component } from 'react'

export default class ListItem extends Component {
  render() {
    return (
      <tr>
        <td scope="col">{this.props.data._id}</td>
        <td scope="col">{this.props.data.name}</td>
        <td scope="col">
          <button className="btn btn-light" onClick={() => this.props.delete(this.props.data._id)}>Delete</button>
        </td>
      </tr>
    )
  }
}
