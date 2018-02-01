import React, { Component } from 'react';
import axios from 'axios';

import ListItem from './components/ListItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      status: null
    };
  }

  getData() {
    axios.get('http://localhost:5001/book/booklisting')
      .then(response => this.setState({ data: response.data }))
  }

  addEntry(e) {
    this.setState({ entry: e.target.value });
  }

  pushData() {
    axios.post('http://localhost:5001/book/addbook', {
      name: this.state.entry
    }).then(res => {
      console.log(res);
      return res.data
    })
    .then(res => {
      this.inputTitle.value = '';
      this.setState({ status: res.status })
    });

    setTimeout(() => {
      this.getData();
    }, 1000);
  }

  deleteItem(id) {
    axios.delete('http://localhost:5001/book/delete/' + id)
      .then(response => console.log(response))
      .catch(error => console.error(error))
    setTimeout(() => {
      this.getData();      
    }, 1000);
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <div className="container text-center">
        <h3 className="title">Book Tracker</h3>
        {this.state.status ? 
          <div className="alert alert-primary" role="alert">{this.state.status}</div> 
          : ''
        }     
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="row">ID</th>
              <th>Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            { this.state.data && this.state.data.map(el => <ListItem data={el} key={el._id} delete={this.deleteItem.bind(this)} />) }            
          </tbody>
        </table>
        <hr/>
        <div className="row col-md-4 offset-md-4">
          <div className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <input type="text" className="form-control" placeholder="Book Name" onChange={this.addEntry.bind(this)} ref={el => this.inputTitle = el} />
            </div>
            <button className="btn btn-primary mb-2" onClick={this.pushData.bind(this)}>Add Entry</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
