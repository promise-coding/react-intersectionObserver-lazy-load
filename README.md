![NPM](https://img.shields.io/npm/l/react-npm-publish-demo.svg?style=popout) ![npm](https://img.shields.io/npm/v/react-npm-publish-demo.svg?style=flat-square)
## react-npm-publish-demo

这是一个发布react npm组件demo，支持css module、自定义打包配置，轻松上手   

# 如何使用
1、下载demo  
`git clone https://github.com/promise-coding/react-npm-publish-demo`   
2、启动demo   
安装依赖包    
`npm install`  
启动应用     
`npm start`    
访问http://localhost:3000即可  
3、如何打包  
生产包  
`npm run build-dev`  
之后你就会看到在example/dist目录下产生的打包文件；  
本地环境包  
`npm run build-pro`  
同理，在lib目录下生成style文件和index文件，此时的index.js就可以发布啦。  

4、发布到npm  
-  首先你注册一个npm账户，用户名和密码记住咯；  
-  更改package.json中相应的配置，如：  
   ```
     "name": "react-npm-publish-demo",
     "version": "1.0.0",
     "description": "react npm publish demo",
     "repository": "promise-coding/react-npm-publish-demo"
   ```
-  执行`npm adduser`按提示输入用户名和密码；  
-  更改版本号后就可执行`npm publish`，看到`+ react-object-logger@1.1.0
`说明发布成功，并且会有邮件通知哦；
-  一个好的组件需要写一份好的readme，方便用户使用；