import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, SimpleLineIcons, AntDesign } from '@expo/vector-icons'
//We must import index and setIndex that will take use from the previous screen
const TopNavigation = ({index, setIndex}) => {
  return (
    <View style={{...styles.container,backgroundColor:'#282c35'}}>
     {/* if the index =0  it will be in the discover screen and 
     we must have an icon that we will be  in our text */}
     {index===0 ? (
     <TouchableOpacity style={styles.left}><Text style={{...styles.text, color:'lightgrey'}}>

<MaterialCommunityIcons
    name='theme-light-dark'
    size={24}
    color='#007FFF'
/>
     </Text></TouchableOpacity>
     ):(
        <TouchableOpacity style={styles.left} onPress={()=> setIndex(index === 0 ? 1 : 0)}>
        <SimpleLineIcons name="arrow-left" size={15} color="#007fff"/>
     <Text style={{...styles.text, color:'lightgrey'}}>Discover</Text>
     </TouchableOpacity>

     ) }
{/* for the middle information either we have All News if the index is 1  */}
<Text style={{...styles.center, color:"white"}}>
{index ? "All News" : "Discover"}
</Text>
{index ?(
    <TouchableOpacity style={styles.right}
    //onPress={()=>fetchNews("general")}
    >
        <Text style={styles.text}>
            <AntDesign name= "reload1" size={24} color ="#007FFF"/>
        </Text>
    </TouchableOpacity>
):(
   
    <TouchableOpacity
    style={styles.left}
    onPress={()=> setIndex(index === 0 ? 1 : 0)}>
        <Text style={{...styles.text,color:"white"}}>All News</Text>
        <SimpleLineIcons name="arrow-right" size={15} color="#007FFF"/>
    </TouchableOpacity>
)}


    </View>
  );
};

export default TopNavigation

const styles = StyleSheet.create({
    container:{
        // flex direction because everything will be displayed in a row
        flexDirection:'row',
        // and justify Content must have space between because there must be space between everything inside the container e.g flexbox properties  
        justifyContent:"space-between",
        padding:10,
        alignItems:'center',
        borderBottomColor:'black',
        borderBottomWidth:0.5,
    },
    left:{
        // flex direction because everything will be displayed in a row
        flexDirection:'row',
        // and justify Content must have space between because there must be space between everything inside the container e.g flexbox properties  
        justifyContent:"space-between",
        width:80,
        alignItems:'center',
      
    },
    text:{
        fontSize:16,
    },
    right:{
       width:80,
       alignItems:'flex-end', 
    },
    center:{
        paddingBottom:6,
        borderBottomColor:"#007FFF",
        borderBottomWidth:5,
        borderRadius:10,
        fontSize:16,
        fontWeight:"700",

    },
})




