//
//  RNWechatAPI.h
//  RNWechatAPI
//
//  Created by soliury on 15/10/23.
//  Copyright © 2015年 soliury. All rights reserved.
//

#import "RCTBridgeModule.h"
#import "WXApiRequestHandler.h"
#import "WXApiManager.h"


@interface RNWechatAPI:NSObject<RCTBridgeModule, WXApiManagerDelegate>


@end
