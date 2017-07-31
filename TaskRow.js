import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TaskRow extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.label }>{ this.props.todo.task }</Text>
      </View>
    );
  }
}

TaskRow.propTypes = {
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
  }).isRequired,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e7e7e7',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20, 
    marginLeft: 20, 
    marginRight: 20,
    padding: 20,
    borderRadius: 5,
  },
  label: {
    fontSize: 20, 
    fontWeight: '300',
  }
});

export default TaskRow;
