import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, ListView, TouchableHighlight } from 'react-native';
import TaskRow from './TaskRow.js'

class TaskList extends Component {
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })
    
    this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    }
  }

  renderRow = (todo) => {
    return (
      // <Text>{todo.task}</Text> to test from state, whole todo, next page does individual todo.task
      <TaskRow todo={ todo } />
    );
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ this.renderRow }
        />
        <TouchableHighlight
          style={ styles.button }
          onPress={ this.props.clickedButton }
        >
          <Text
            style={ styles.buttonText }
          >
            Button
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  // clickedButton: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    borderColor: '#fff',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fafafa',
    fontSize: 20,
    fontWeight: '600',
  }
});

export default TaskList;