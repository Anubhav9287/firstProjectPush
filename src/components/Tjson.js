import React, { Component } from 'react';
import Tdata from '../data/testdata'

class Tjson extends Component {
  renderTableHeader() {
    return (
      <tr>
          <th>S.No.</th>
          <th>EMAIL SUBJECT</th>
          <th>EMAIL CONTENT</th>
      </tr>
    )
  }

  renderTableData(){
    return(
      Tdata.map((email,index) => {
        return (
          <tr>
            <td>{email.SNo}</td>
            <td>{email.Subject}</td>
            <td>{email.Content}</td>
          </tr>
        )
      })
    )
  }
  render() {
    return (
      <div>
        <h1>Your Task For The Day!!</h1>
        <table border='1'>
          <tbody>
            {this.renderTableHeader()}
            {this.renderTableData()}
          </tbody>
        </table>
      </div >
    )
  }
}

export default Tjson;
