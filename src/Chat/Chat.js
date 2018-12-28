import React, { Component } from 'react';

import {  Text , View, Dimensions} from 'react-native';

import { GiftedChat, Send, Bubble, Composer, InputToolbar, Avatar, Actions} from 'react-native-gifted-chat';

const { width } = Dimensions.get('window');

import styles from './styles';

import CustomView from '../CustomView'

class Chat extends Component{

  renderCustomView(props) {
    return (
      <CustomView
        {...props}
      />
    );
  }

    renderAvarar = () => {
       <Avatar renderAvatarOnTop={true} />
    }

      renderComposer = () => {
         return(
           <Composer textInputStyle={styles.composerStyle} 
           placeholder="Enter your message here…" 
           composerHeight= {48} 
           placeholderTextColor={'#9E9E9E'}
           textInputProps={{paddingLeft: 24}}
           multiline = {true}
           />
         )
      }
    

    renderSend = () => {
        <Send style={{height: 20, fontSize: 10, color: '#000'}}/>
    }

  
    renderBubble(props) {
      if (props.isSameUser(props.currentMessage, props.previousMessage) && props.isSameDay(props.currentMessage, props.previousMessage)) {
        return (
          <Bubble
            {...props}
             wrapperStyle={{
            left: {
              backgroundColor: '#F0F2F4',
              borderColor: '#000',
              padding: 20,
              width: width - 24
            }
          }}
          position={"left"}
          />
        );
      }
      return (
        <View>
          <View style={styles.nameViewStyle}>
            <Text style={styles.name}>{props.currentMessage.user.name}</Text>
            </View>
          <Bubble
            {...props}
          >
        
          </Bubble>
        </View>
      );
    }
  

    renderInputToolbar = (props) => {
      return(
       <InputToolbar  primaryStyle={styles.inputToolBarStyle}/>
      )
    }

    renderActions = (props) => {
      <Actions {...props}/>
    }

  
    state = {
        messages: []
      };          

      componentDidMount = () => {
        this.setState({
          messages: [
            {
              _id: 1,
              text: "This is the demo of Gifted Chat",
              createdAt: new Date(),
              user: {
                _id: 1,
                name: "React Native",
              }
            },
            {
                _id: 2,
                text: "We are using it for kindpoints chat screen",
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: "Dixit",
                }
              },
              {
                _id: 3,
                text: "We are using it for kindpoints chat screen",
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: "pranav",
                },
                kp_transfer: {
                  text: 'you have transfered 2 kp'
                }
              },
          ]
        });
      }

    render(){
        return(
               <GiftedChat messages={this.state.messages} 
                placeholder="Enter your message here…" 
                alwaysShowSend = {false}
                renderBubble={this.renderBubble}
                // renderCustomView = {this.renderCustomView}
                renderComposer = {this.renderComposer}
                renderActions = {this.renderActions}
                renderAvatarOnTop = {true}
              
              />  
           
        )
    }
  }

export { Chat };
