import './Operations.css';

import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

import { prettyDuration, prettyNumber } from '../utils';

const allOperations = gql`{
  allOperations {
    id name query avgDuration avgRpm
  }
}`;

const OperationRows = () => (
  <Query query={allOperations}>
    {({ loading, error, data }) => {
      if (loading) return <tr><td>Loading...</td></tr>
      if (error) return <tr><td>Error: {error}</td></tr>

      return data.allOperations.map(op => (
        <tr key={op.id}>
          <td>{op.name ? op.name : op.query}</td>
          <td>{prettyNumber(op.avgRpm)}</td>
          <td>{prettyDuration(op.avgDuration)}</td>
        </tr>
      ))
    }}
  </Query>
)

const Operations = () => (
  <div className="Operations">
    <table>
      <thead>
        <tr>
          <th>Operation</th>
          <th>Average RPM</th>
          <th>Average Duration</th>
        </tr>
      </thead>
      <tbody>
        <OperationRows />
      </tbody>
    </table>
  </div>
)

export default Operations
