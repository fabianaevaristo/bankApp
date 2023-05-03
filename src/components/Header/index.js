
import React from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'

import { Feather } from '@expo/vector-icons'
import { MotiView, MotiText } from 'moti';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({name}) {
    return (
      <View style={Styles.container}>
        <MotiView
          style={Styles.content}
          from={{
            translateY: -150,
            opacity: 0,
          }}
          animate={{
            translateY: 0,
            opacity: 1,
        
          }}
          transition={{
            type: "timing",
            duration: 800,
            dalay: 250,
          }}
        >
          <MotiText 
          style={Styles.username}
          from={{
            translateX: - 300
          }}
            animate={{
              translateX: 0
            }}
            transition={{
              type: "timing",
              duration: 800,
              delay: 800,
            }}
          >
            {name}
          </MotiText>
          
          <TouchableOpacity activeOpacity={0.9} style={Styles.buttonUser}>
            <Feather name="user" size={27} color="#fff"/>
          </TouchableOpacity>
        </MotiView>

      </View>
    )
}

const Styles = StyleSheet.create({
    container: {
      backgroundColor: '#8000ff',
      paddingTop: StatusBarHeight,
      flexDirection: 'row',
      paddingStart: 16,
      paddingEnd: 16,
      paddingBottom: 44,
    },
    content:{
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    username:{
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold'
    },
    buttonUser:{
      width: 44,
      height: 44,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 44/2,
    }
})