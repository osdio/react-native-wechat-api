# react-native-wechat-api

> A react-native wrapper for wechat API


# install

```
npm i react-native-wechat-api --save
```

将`ios/RNWechatAPI.xcodeproj`添加到项目中, link如下库:

 ![D90D3626-3385-45E9-AAB7-ADF43257EE4B.png](//dn-cnode.qbox.me/FsRG0pqZ_6h5b_QVx8EZ3ToEf6jv)
 

# API

### sendAuthReq(scope,state,openID)

此方法用于微信登陆认证, 相对应有个回调事件:

```

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
    
```


