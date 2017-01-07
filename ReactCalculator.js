import React, { Component } from 'react'
import Style from './Style'
import {
  Text,
  AppRegistry,
  View
} from 'react-native';
import InputButton from './InputButton'

const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
]



class ReactCalculator extends Component {
  _renderInputButtons() {
    let views = []

    for (let i = 0; i < inputButtons.length; i++) {
      let row = inputButtons[i]
      let inputRow = []
      for (let k = 0; k < row.length; k++) {
        let input = row[k]
        inputRow.push(
          <InputButton value={input} key={i + "-" + k} />
        )
      }

      views.push(<View style={Style.inputRow} key={"row-" + i}>{inputRow}</View>)
    }

    return views
  }

  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}></View>
        <View style={Style.inputContainer}>
          {this._renderInputButtons()}
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator)
