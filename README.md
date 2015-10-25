# react-native-wechat-api

> A react-native wrapper for wechat API


# install

```
npm i react-native-wechat-api --save
```

将`ios/RNWechatAPI.xcodeproj`添加到项目中, link如下库:

 ![D90D3626-3385-45E9-AAB7-ADF43257EE4B.png](http://dn-cnode.qbox.me/FsRG0pqZ_6h5b_QVx8EZ3ToEf6jv)
 

# 项目引用

### 引用需要的文件头

在AppDelegate中加入以下代码:

```

#import "WXApi.h"
#import "WXApiManager.h"

```


### 要使你的程序启动后微信终端能响应你的程序，必须在代码中向微信终端注册你的id。

在AppDelegate 的 didFinishLaunchingWithOptions 函数中向微信注册id:

```

[WXApi registerApp:@"your id" withDescription:@"demo 2.0"];

```

### 重写AppDelegate的handleOpenURL和openURL方法：

```

- (BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url {
  return  [WXApi handleOpenURL:url delegate:[WXApiManager sharedManager]];
}

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
  return [WXApi handleOpenURL:url delegate:[WXApiManager sharedManager]];
}

```




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


