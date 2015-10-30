import React,{
    NativeModules
} from 'react-native'

import validType from './src/validType';

var WXApi = NativeModules.RNWechatAPI;


export function sendAuthReq(scope:String, state:String, openID:String) {
    validType(arguments, [
        {scope: ['required', 'string']},
        {state: ['required', 'string']},
        {openID: ['required', 'string']}
    ]);

    WXApi.sendAuthMeg(scope, state, openID);
}

export function shareText(scene, text) {
    validType(arguments, [
        {scene: ['required', 'string']},
        {text: ['required', 'string']}
    ]);

    WXApi.sendTextMes(text, scene);
}

