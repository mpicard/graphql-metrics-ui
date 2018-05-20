import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

const allTypes = gql`
  {
    allTypes {
      id
      name
      field
      returnType
    }
  }
`;

const Schema = () => (
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Field</th>
        <th>Return Type</th>
      </tr>
    </thead>
    <tbody>
      <SchemaTypes />
    </tbody>
  </table>
);

const SchemaTypes = () => (
  <Query query={allTypes}>
    {({ loading, error, data }) => {
      if (loading) return rowSpan('Loading...');
      if (error) return rowSpan(error.message);

      return data.allTypes.map(SchemaType);
    }}
  </Query>
);

const SchemaType = ({ id, name, field, returnType }) => (
  <tr key={id}>
    <td>{name}</td>
    <td>{field}</td>
    <td>{returnType}</td>
  </tr>
);

const rowSpan = content => (
  <tr>
    <td colSpan="3">{content}</td>
  </tr>
);

export default Schema;
