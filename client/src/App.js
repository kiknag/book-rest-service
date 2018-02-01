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

  getData = () => {
    axios.get('http://localhost:5001/book/booklisting')
      .then(response => this.setState({ data: response.data }))
  }

  addEntry= (e) => {
    this.setState({ entry: e.target.value });
  }

  pushData = () => {
    axios.post('http://localhost:5001/book/addbook', {
      name: this.state.entry
    }).then(({ data: { status } }) => {
      this.inputTitle.value = '';
      this.setState({ status: status });
      this.getData();
    });
  }

  deleteItem = (id) => {
    axios.delete('http://localhost:5001/book/delete/' + id)
      .then(response => this.setState({ status: response.data.status}))
      .then(() => this.getData())
      .catch(error => console.error(error))
  }

  update = (e) => {
    console.log(e.currentTarget.textContent);
    this.setState({ updateCandidate: e.currentTarget.textContent });

    this.setState({
      candidate: this.state.data.filter(item => item.name == e.currentTarget.textContent)
    })
  }

  change = (e) => {
    this.setState({ updateCandidate: e.target.value });
  }

  updateItem = () => {
    axios.put('http://localhost:5001/book/update/' + this.state.candidate[0]['_id'], {
      name: this.state.updateCandidate
    })
      .then(response => this.setState({ status: response.data.status }))
      .then(() => this.getData())
      .catch(error => console.error(error))
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
            { this.state.data && this.state.data.map(el => <ListItem data={el} key={el._id} delete={this.deleteItem} update={this.update} />) }            
          </tbody>
        </table>
        <hr/>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="form-inline">
              <div className="form-group mx-sm-3 mb-2">
                <input type="text" className="form-control" placeholder="Book Name" onChange={this.addEntry} ref={el => this.inputTitle = el} />
              </div>
              <button className="btn btn-primary mb-2" onClick={this.pushData}>Add Entry</button>
            </div>
          </div>
          { this.state.updateCandidate ? 
            <div className="col-md-4 offset-md-4">
              <div className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                  <input type="text" value={this.state.updateCandidate} onChange={this.change} className="form-control" />
                </div>
                <button className="btn btn-warning mb-2" onClick={this.updateItem}>Update</button>
              </div>
            </div>
          : ''}
        </div>
      </div>
    );
  }
}

export default App;