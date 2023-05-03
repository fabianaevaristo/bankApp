
import { View, Text, StyleSheet } from "react-native";
import Header from '../../components/Header'

export default function Store() {
  return (
    <View>
      <Header name="Miguel Pontes"/>
      <Text>Store</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'      
    }
})