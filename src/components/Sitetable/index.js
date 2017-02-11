import React, {Component} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

class Sitetable extends Component {
  render() {
    const sites = this.props.sites;
    console.log(sites);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Agency</th>
              <th>Site Name</th>
              <th>Page</th>
              <th>Diffs</th>
            </tr>
          </thead>
          <tbody>
          { _.map(sites, (site, i ) => (
            <tr key={i}>
              <td>{site.agency}</td>
              <td>{site.siteName}</td>
              <td><a href={site.URL}>{site.pageName}</a></td>
              <td><Link to={`/diff/${site.UUID}`}>View the Diffs</Link></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Sitetable;