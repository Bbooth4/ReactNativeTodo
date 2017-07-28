import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, ListView } from 'react-native';
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
      <View >
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ this.renderRow }
        />
      </View>
    );
  }
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TaskList;