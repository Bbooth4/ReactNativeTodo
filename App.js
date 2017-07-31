import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TaskList from './TaskList.js';
import TaskForm from './TaskForm.js';

onAdd = (task) => {
  console.log('added');
  this.state.todos.push({ task });
  this.setState({ todos: this.state.todos });
}

onCancel = () => {
  console.log('cancelled');
}

export default class App extends Component {
  constructor(props) {
    super(props)
     this.state = { 
       todos: [
         { task: 'Learn React Native' },
         { task: 'Learn Redux'}
      ],
      task: '',
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={ styles.container }>
          <Text style={ styles.heading }>ToDoodlz</Text>
          <TaskList
            todos={ this.state.todos }
            onAdd={ this.onAdd }
            onCancel={ this.onCancel }
          />
          <TaskForm />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 40, 
    fontWeight: '600',
    paddingTop: 40,
    padding: 20,
    alignSelf: 'center',    
    backgroundColor: '#f7f7f7',
    justifyContent: 'flex-start',
    color: '#333'
  }
});

// AppRegistry.registerComponent('app' () => App);