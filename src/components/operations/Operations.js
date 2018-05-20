import './Operations.css';

import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

import { prettyDuration, prettyNumber } from '../../utils';

const allOperations = gql`
  {
    allOperations {
      id
      name
      query
      avgDuration
      avgRpm
    }
  }
`;

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
);

const OperationRows = () => (
  <Query query={allOperations}>
    {({ loading, error, data }) => {
      if (loading) return rowSpan('Loading...');
      if (error) return rowSpan(error.message);

      return data.allOperations.map(OperationRow);
    }}
  </Query>
);

const OperationRow = ({ id, name, query, avgRpm, avgDuration }) => (
  <tr key={id}>
    <td>{name ? name : query}</td>
    <td>{prettyNumber(avgRpm)}</td>
    <td>{prettyDuration(avgDuration)}</td>
  </tr>
);

const rowSpan = content => (
  <tr>
    <td colSpan="3">{content}</td>
  </tr>
);

export default Operations;
