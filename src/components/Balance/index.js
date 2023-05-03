import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MotiView, AnimatePresence, MotiText } from 'moti'

export default function Balance({saldo, gasto}) {
  const [showValue, setShowValue] = useState(false);

 return (

  

  <MotiView 
  style={Styles.container}
  from={{
    rotateX: '-100deg',
    opacity: 0,
  }}
  animate={{
    rotateX: '0deg',
    opacity: 1,
  }}
  transition={{
    type: 'timing',
    delay: 300,
    duration: 900
  }}
  >

    <TouchableOpacity style={Styles.item} onPress={ () => setShowValue(!showValue) }>
        <Text style={Styles.itemTitle}>Saldo</Text>
           <View style={Styles.content}> 
              <Text style={Styles.currencySymbol}>R$</Text> 
              
              { showValue ? (
              <AnimatePresence exitBeforeEnter>
                <MotiText  style={Styles.balance}
                from={{
                  translateX: 100,
                }}
                animate={{
                  translateX: 0,
                }}
                transition={{
                  type: 'spring',
                  duration: 500,
                }}
                >{saldo}</MotiText >
              </AnimatePresence>
              ) : (
                <View style={Styles.skeletron}>
                </View>
              )} 
           </View>
    </TouchableOpacity>

    <TouchableOpacity style={Styles.item} onPress={ () => setShowValue(!showValue) }>
        <Text style={Styles.itemTitle}>Gasto</Text>

           <View style={Styles.content}>
                <Text style={Styles.currencySymbol}>R$</Text>

                { showValue ? ( 
                <AnimatePresence exitBeforeEnter>
                  <MotiText  
                  style={Styles.expenses}
                  from={{
                    translateX: 100,
                  }}
                  animate={{
                    translateX: 0,
                  }}
                  transition={{
                    type: 'spring',
                    duration: 500,
                  }}
                  >
                    {gasto}
                  </MotiText >
                </AnimatePresence>
                ) : (
                  <View style={Styles.skeletron}>
                  </View>
                )} 
           </View>
    </TouchableOpacity>

  </MotiView>
  );
}

const Styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  itemTitle:{
    fontSize: 20,
    color: "#DADADA"
  },
  content:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencySymbol:{
    color: "#DADADA",
    marginRight: 6,
  },
  balance:{
    fontSize: 22,
    color: "#2ecc71",
  },
  expenses:{
    fontSize: 22,
    color: "#e74c3c",
  },
  skeletron:{
    marginTop: 6,
    width: 100,
    height: 25,
    backgroundColor: "#DADADA",
    borderRadius: 10,
  }


})