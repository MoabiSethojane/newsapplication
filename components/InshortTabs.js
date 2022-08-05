import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { SceneMap, TabView } from 'react-native-tab-view';
import DiscoverScreen from '../Screens/DiscoverScreen';
import NewsScreen from '../Screens/NewsScreen';
import TopNavigation from './TopNavigation';

const InshortTabs = () => {
    //Layout to identify layout of the application e.g dimension of the application 
   const layout= useWindowDimensions();
   // create the state of indentifiying the  state of the current tab this is where the current tab is located 
 // and the initial value must is 1 in this case
 const [index, setIndex]= useState(1);
 //Create the routes and they must be in an array
 const[routes]= useState([
    {key:'first', title:'Discover'},
    {key:"second", title:"News"},
 ]);
 //To render all this we need to create a variable  that will contain scene maps
 //and scenemapa must be imported from react-native-tab-view
 const renderScene = SceneMap({
    first:DiscoverScreen,
    second:NewsScreen
 })

   return (
    <TabView 
    //TabView will take NavigationState with the index that we created at line 10 and it will store the index of the current page
    // the route that we have created
    navigationState={{ index, routes }}
    //secondly it will take a renderScene that we has been created at line 18 wih 
    renderScene={renderScene}
    //onIndexChange this will happen automatically we only need to pass 'setIndex'
    onIndexChange={setIndex}
    // the layout varialble  that we have created and it will take the layout of the screeen and give it the width
    initialLayout={{ width: layout.width }}
    //building custom tabs and it gonna take a callback and inside the renderTabBar
    // we will provide custome component
    renderTabBar={()=><TopNavigation
        index={index}
        setIndex={setIndex}
    />}

  />
  )
}

export default InshortTabs















