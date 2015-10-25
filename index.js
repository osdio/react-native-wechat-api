import React,{
    NativeModules
} from 'react-native'


var WXApi = NativeModules.RNWechatAPI;


export function sendAuthReq(scope, state, openID) {
    if (!scope) throw 'Scope params is required';
    if (!state) throw 'State params is required';
    if (!openID) throw 'openID params is required';

    WXApi.sendAuthMeg(scope, state, openID);
}

