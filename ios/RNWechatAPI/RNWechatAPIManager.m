//
//  RNWechatAPI.m
//  RNWechatAPI
//
//  Created by soliury on 15/10/23.
//  Copyright © 2015年 soliury. All rights reserved.
//

#import "RNWechatAPIManager.h"
#import "RCTEventDispatcher.h"

#define FLUSH_NIL(value) value?value:@""


@implementation RNWechatAPI

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();



RCT_EXPORT_METHOD(sendAuthMeg:(NSString *)authScope authState:(NSString *) authState authOpenID:(NSString *)authOpenID)
{
    [WXApiRequestHandler sendAuthRequestScope:authScope State:authState OpenID:authState];
}


RCT_EXPORT_METHOD(sendTextMes:(NSString *)text scene:(int) scene)
{
    [WXApiRequestHandler sendText:text InScene:scene];
}





- (instancetype)init
{
    self = [super init];
    if (self) {
        [WXApiManager sharedManager].delegate = self;
    }
    return self;
}


- (void)managerDidRecvAuthResponse:(SendAuthResp *)response {
    [_bridge.eventDispatcher sendAppEventWithName:@"didRecvAuthResponse"
                                             body:@{
                                                    @"state":FLUSH_NIL(response.state),
                                                    @"lang":FLUSH_NIL(response.lang),
                                                    @"country":FLUSH_NIL(response.country),
                                                    @"code":FLUSH_NIL(response.code),
                                                    @"errCode":@(response.errCode),
                                                    @"errStr":FLUSH_NIL(response.errStr),
                                                    @"type":@(response.type)
                                                    }];
    
}


@end
