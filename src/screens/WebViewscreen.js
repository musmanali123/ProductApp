import React from "react"
import { View } from "react-native"
import WebView from "react-native-webview"
const WebViewScreen = () =>{
    return(
        <>
        <View style={{
            flex:1,
        }}>

            <WebView
            source={{uri:'https://www.youtube.com/'}}
            scalesPageToFit={true}
            />
        </View>
        
        </>
    )
}

export default WebViewScreen