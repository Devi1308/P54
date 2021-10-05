import React, { Component } from 'react';
import { Button, View, Text, Alert } from 'react-native';



export default class App extends Component {

displayAlert1(){
alert("Capital of INDIA !!");
}

displayAlert2(){
alert("Capital of United States !!");
}

displayAlert3(){
alert("Capital of England and United Kingdom (U.K.) !!");
}

displayAlert4(){
alert("Capital of Russia !!");
}

  render() {
    return (
      <view style={{marginTop: 150}}>
      <Text style={{ marginTop:60,marginLeft:30,color:"blue",fontSize: 25}}>The Knowledge Factory!!</Text>
      <br/>    
      <br/>        
      <Button color= "pink" title="New Delhi" onPress={this.displayAlert1} /> 
      <br/>
      <Button color= "green" title="Washington"onPress={this.displayAlert2}/>  
      <br/>
      <Button color= "yellow" title="London" onPress={this.displayAlert3}/> 
       <br/>
      <Button color= "red" title="Moscow" onPress={this.displayAlert4}/>
      </view>
    );
  }
}