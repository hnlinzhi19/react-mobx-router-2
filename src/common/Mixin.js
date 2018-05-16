import React from 'react';

export const getLoginStatus = () => (WrappedComponent) => {
  return class extends React.Component {
    async componentDidMount() {
      await this.props.store.setLogin();
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}