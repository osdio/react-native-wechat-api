import React,{
    NativeModules
} from 'react-native'

import Type from './src/type';

var WXApi = NativeModules.RNWechatAPI;


export function sendAuthReq(scope, state, openID) {
    if (!scope) throw 'Scope params is required';
    if (!state) throw 'State params is required';
    if (!openID) throw 'openID params is required';

    if (!Type.isString(scope)) {
        throw 'scope is not a string'
    }
    if (!Type.isString(state)) {
        throw 'state is not a string'
    }
    if (!Type.isString(openID)) {
        throw 'openID is not a string'
    }

    WXApi.sendAuthMeg(scope, state, openID);
}

export function shareText(scene, text) {


    WXApi.sendTextMes(text, scene);
}

