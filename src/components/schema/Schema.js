import './Schema.css';

import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

import { groupBy } from '../../utils';

const allTypes = gql`
  {
    allTypes {
      key
      parentType
      fieldName
      returnType
      usage
    }
  }
`;

const Schema = () => (
  <table className="Schema">
    <thead>
      <tr>
        <th>Type</th>
        <th>Field</th>
        <th>Return Type</th>
        <th>Usage %</th>
      </tr>
    </thead>
    <SchemaTypes />
  </table>
);

const SchemaTypes = () => (
  <Query query={allTypes}>
    {({ loading, error, data }) => {
      if (loading) return RowSpan('Loading...');
      if (error) return RowSpan(error.message);

      const types = groupBy(data.allTypes, t => t.parentType);
      console.log(data.allTypes, types);
      return Object.entries(types).map(([parentType, fields], i) => {
        console.log(parentType, fields);
        return (
          <tbody key={i}>
            <tr>
              <td>{parentType}</td>
            </tr>
            {fields.map(FieldRow)}
          </tbody>
        );
      });
    }}
  </Query>
);

const FieldRow = ({ key, fieldName, returnType, usage }) => (
  <tr key={key}>
    <td />
    <td>{fieldName}</td>
    <td>{returnType}</td>
    <td>{usage}%</td>
  </tr>
);

const RowSpan = content => (
  <tbody>
    <tr>
      <td colSpan="3">{content}</td>
    </tr>
  </tbody>
);

export default Schema;
