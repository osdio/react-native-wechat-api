# react-native-wechat-api

> A react-native wrapper for wechat API


# install

```
npm i react-native-wechat-api --save
```

将`ios/RNWechatAPI.xcodeproj`添加到项目中, link如下库:

 ![D90D3626-3385-45E9-AAB7-ADF43257EE4B.png](http://dn-cnode.qbox.me/FsRG0pqZ_6h5b_QVx8EZ3ToEf6jv)
 

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

# FAQ

* 目前只实现了登陆认证API, 其实其他API实现其实也很简单, 稍微改动一下代码就行, 但是目前感觉略坑的是, 分享API每次得需要一个image, 而js
调用oc目前我还没有找到一个好的模式去用这个分享API, 难道每次传一个url path? 当然如果你有更好的想法, 欢迎提交PR.


