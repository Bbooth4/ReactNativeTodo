import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './TaskList.js'


export default class App extends Component {
  constructor(props, context) {
    super(props, context)
     this.state = { 
       todos: [
         { task: 'Learn React Native' },
         { task: 'Learn Redux'}
      ]
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <TaskList
          todos={ this.state.todos }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

// AppRegistry.registerComponent('main'm () => App);