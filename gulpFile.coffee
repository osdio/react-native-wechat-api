gulp = require "gulp"


src = 'index.js'
dist = './example/demo/node_modules/react-native-wechat-api'

ocSrc = './ios/RNWechatAPI/**'
ocDist = './example/demo/node_modules/react-native-wechat-api/ios/RNWechatAPI'

gulp.task 'move', ()->
  gulp.src src
  .pipe gulp.dest dist

  gulp.src ocSrc
  .pipe gulp.dest ocDist


gulp.task 'default', ['move'], ()->
  gulp.watch [src,ocSrc], ['move']