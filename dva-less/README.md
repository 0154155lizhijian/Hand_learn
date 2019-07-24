- 快速创建dva
1. 安装dva-cli
   `$ npm install dva-cli -g`
2. 创建新应用
    `$ dva new 项目名称`
    `dva init`就可以创建一个dva项目
    > 注意在项目所在文件夹下需要有一个 `package.json`文件
    
3. 进入项目 使用命令 `npm start` 启动项目
4. 使用antd
   + `npm install antd babel-plugin-import --save`
   + 编辑 `.webpackrc`,使得插件生效
       ···
           {
              "extraBabelPlugins": [
                   ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
                 ]
            }
- less 安装    
    - npm install -g less
    - npm install -g less-loader
- less使用
    @ 定义变量,可供引用
