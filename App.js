import React, {Component} from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import {TopTabNavigator} from "./navigators/TopTabNavigator"

export default function App() {
    return(
      <NavigationContainer>
        <TopTabNavigator/>
      </NavigationContainer>
    )
}