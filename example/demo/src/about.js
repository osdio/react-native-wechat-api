var React = require('react-native');
var WXApi = require('react-native-wechat-api');

var {
    NativeAppEventEmitter
    } = React;

var {
    Component,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    AlertIOS
    } = React;


class About extends Component {
    constructor(props) {
        super(props);
        this.eventEmitter = NativeAppEventEmitter.addListener('didRecvAuthResponse', this._onAuthRes.bind(this));
    }


    componentWillUnmount() {
        this.eventEmitter.remove();
    }


    _onAuthRes(e) {
        console.log(e);
        AlertIOS.alert(JSON.stringify(e));
    }


    _onLoginPress() {
        WXApi.sendAuthReq(
            'snsapi_message,snsapi_userinfo,snsapi_friend,snsapi_contact',
            '234',
            '234');
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._onLoginPress.bind(this)}>
                    <Text style={styles.login}>
                        微信登陆
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    login: {
        flex: 1,
        fontSize: 30
    }
});


module.exports = About;