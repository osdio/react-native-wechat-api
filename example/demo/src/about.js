var React = require('react-native');
var WXApi = require('react-native-wechat-api');



var {
    Component,
    View,
    Text
    } = React;


class About extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View>
                <Text onPress={()=>{
                   WXApi.sendAuthMeg('1','234','234');
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