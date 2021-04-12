import React from 'react';

import User from './components/user/user.component';
import Post from './components/post/post.component';
import SagasExample from './components/sagas-example/sagas-example.component';
import UseReducerExample from './components/use-reducer-example/use-reducer-example.component';

import './App.css';

const App = props => {
  return (
    <div className='App'>
      <User userId={5} />
      <Post postId={15} />
      <SagasExample />
      <UseReducerExample />
    </div>
  );
};

export default App;
