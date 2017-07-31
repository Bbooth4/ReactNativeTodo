import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';

// everything here will become a separate page eventually 

export default class TaskForm extends Component {
  constructor(props) {
    super(props)
     this.state = { 
      task: '',
    }
  }

  onChangeText = (text) => {
    this.task = text; 
  }

  onAddPressed = () => {
    this.orops.onAdd(this.task);
  }

  render() {
    return (
      <View style={ styles.container }>
        <TextInput 
          onChangeText={ this.onChangeText }
          style={ styles.input }
        />

        <TouchableHighlight 
          style={ styles.button }
          onPress={ this.props.onAddPressed }
        >
          <Text style={ styles.buttonText }>
            Add
          </Text>
        </TouchableHighlight>

        <TouchableHighlight 
          style={[ styles.button, styles.cancelButton, styles.bottom ]}
          onPress={ this.props.onCancel }
        >
          <Text style={ styles.buttonText }>
            Cancel
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

TaskForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 150,
    backgroundColor: '#f7f7f7',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d7d7d7',
    height: 50, 
    marginLeft: 10,
    marginRight: 10,
    padding: 15, 
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fafafa'
  },
  button: {
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#64b5f6',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#777',
  },
  bottom: {
    marginBottom: 120,
  }
});

// AppRegistry.registerComponent('app' () => App);