//
//  RNWechatAPI.m
//  RNWechatAPI
//
//  Created by soliury on 15/10/23.
//  Copyright © 2015年 soliury. All rights reserved.
//

#import "RNWechatAPIManager.h"

@implementation RNWechatAPI

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(sendAuthMeg:(NSString *)authScope authState:(NSString *) authState authOpenID:(NSString *)authOpenID)
{
    [WXApiRequestHandler sendAuthRequestScope:authScope State:authState OpenID:authState];
}
@end
