import React from 'react';
import AppLayout from './Components/AppLayout';
import Routes from './Routes';
class App extends React.Component {
  render() {
    return (
      <AppLayout
        items={['Home', 'View1', 'View2']}
        mode="horizontal"
        style={{ lineHeight: '64px', backgroundColor: 'rgba(255,255,255,0.9)' }}
        theme='light'
      >
        <Routes isAuthenticated={this.props.isAuthenticated} />
      </AppLayout>
    );
  };
};
export default App;


