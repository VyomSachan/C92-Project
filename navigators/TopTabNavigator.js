import React, {Component} from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Upcoming_Events from "../screens/Upcoming_Events";
import Past_Deeds from "../screens/Past_Deeds";
import Suggestions from "../screens/Suggestions";

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Upcoming_Events" component={Upcoming_Events} />
        <Tab.Screen name="Past_Deeds" component={Past_Deeds} />
        <Tab.Screen name="Suggestions" component={Suggestions} />        
    </Tab.Navigator>
  );
}