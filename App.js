
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import InshortTabs from './components/InshortTabs';
export default function App() {
  return (
    //setting the background colour for everthing inside the contaioner
    <View style={{...styles.container,backgroundColor:'#282c35'}}>
    <InshortTabs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   marginTop:StatusBar.currentHeight,
  },
});
