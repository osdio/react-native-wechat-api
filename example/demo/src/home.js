var React = require('react-native');


var About = require('./about');

var {
    Component,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
    } = React;


class Home extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>

                <TouchableOpacity onPress={()=>{
                    this.props.navigator.push({
                        name:'adsf',
                        component:About
                    })
                }}>
                    <Text style={styles.instructions}>
                        跳转到about页面
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize: 24
    },
});

module.exports = Home;