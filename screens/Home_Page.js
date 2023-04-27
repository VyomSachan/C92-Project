import React, {Component} from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";
import { setStatusBarBackgroundColor } from "expo-status-bar";

export default class Home_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    componentDidMount(){

    }

    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.androidSafeArea}>
                    <View>
                        <Text style={styles.appTitle}>Nature Updates</Text>
                    </View>
                </SafeAreaView>
                <View style={{ flex: 0.1 }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3E5AB"
    },
    androidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
})