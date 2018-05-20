import './Link.css';

import React from 'react';

import history from '../../history';

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: history.location.pathname === props.href };
  }

  componentDidMount() {
    history.onChange(pathname =>
      this.setState({ active: pathname === this.props.href })
    );
  }

  onClick = e => {
    const { href } = this.props;
    const aNewTab = e.metaKey || e.ctrlKey;
    const anExternalLink = href.startsWith('http');
    if (!aNewTab && !anExternalLink) {
      e.preventDefault();
      history.push(href);
    }
  };

  render() {
    const { href, children } = this.props;
    const className = 'Link' + (this.state.active ? ' active' : '');
    return (
      <a className={className} href={href} onClick={this.onClick}>
        {children}
      </a>
    );
  }
}

export default Link;
