var React = require('react-native');
var WXApi = require('react-native-wechat-api');

var {
    NativeAppEventEmitter
    } = React;

var {
    Component,
    View,
    Text
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
    }


    render() {
        return (
            <View>
                <Text onPress={()=>{
                   WXApi.sendAuthReq(
                   'snsapi_message,snsapi_userinfo,snsapi_friend,snsapi_contact',
                   '234',
                   '234');
                }}>
                    asdfasdfasdasdfasdfasdfasdfasdfasdf
                    asdfasdfas
                    d
                    asdf
                    a
                    sdf
                    asd
                    f
                    asdf
                    a
                    sdf

                </Text>
            </View>
        )
    }
}


module.exports = About;