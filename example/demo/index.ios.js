/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var WXApi = require('react-native-wechat-api');
var Home = require('./src/home');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Component,
    Navigator
    } = React;


class demo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navigator
                initialRoute={{
                    name:'home',
                    component:Home
                }}
                ref={(view)=>this.navigator=view}
                renderScene={(route,navitator)=>{
                    let RouteComponent=route.component;
                    return (
                        <RouteComponent
                           navigator={navitator}
                        ></RouteComponent>
                    )
                }}
                >

            </Navigator>
        )
    }
}


AppRegistry.registerComponent('demo', () => demo);
