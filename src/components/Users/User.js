 import React, { Component } from 'react';
 import { Link } from 'react-router'
 import PropTypes from 'prop-types';

 export default class User extends Component {
    
   render() {
    const { id, name, email } = this.props
    return (
        <tr>
            <th>{id}</th>
            <td>{name}</td>
        <td>
            <Link to={{ pathname: '/pages/'+ id } }>
                Show
            </Link>
        </td>
        </tr>
    );
    }
}
