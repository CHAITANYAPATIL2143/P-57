import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
        <Text style={{marginTop:50,color: 'white',
	textAlign: 'center', 
	fontWeight: 'bold',
	fontSize: 20,
	backgroundColor: 'pink',width: 323,
  height: 500,
  fontFamily:"Times New Roman",
  borderRadius:33,
  textShadowColor:"black",
    
  textShadowOffset:{width: 10, height: 10},
  textShadowRadius:8,

    }}>Hey Anonymous!

Wishing you the happiest of birthdays today!  Another year around the sun, and you just keep shining brighter. May your day be filled with love, laughter, and all the things that make you smile. On this special day, I hope you take a moment to reflect on the amazing person you are and the incredible journey that lies ahead. May the coming year bring you new adventures, great accomplishments, and moments that take your breath away. Here's to celebrating you—your uniqueness, your kindness, and the joy you bring to everyone around you. May your birthday be as fantastic as you are! Cheers to another fantastic year, Anonymous! Sending lots of love and positive vibes your way.
Happy Birthday!</Text>
  
    );
  }
}


