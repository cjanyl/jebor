# jebor

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### **目录结构**
1. node_modules：下载的依赖包
2. public：公共的基础文件
3. src：项目主体部分
    1. api：请求接口统一管控，当需要更改接口时能更快的找到
    2. assets：项目中所需引入资源的文件，font/img/js/...
    3. components：当有重复的组件时，提取出来，放在此文件夹
    4. config：存放一些配置文件
    5. directive：自定义指令文件
    6. lib：存放一些公用的方法
    mock：个人认为比较重要的文件，当前后端统一定义好接口时，mock可极大的提高开发效率，这也是最近讨论比较多的面向接口开发
    router：路由文件
    store：数据管控文件
    views：页面文件
    app.vue：vue入口文件
    main.js：项目主js文件
4. .browserslistrc：指定了项目的目标浏览器的范围。这个值会被 @babel/preset-env 和 Autoprefixer 用来确定需要转译的 JavaScript 特性和需要添加的 CSS 浏览器前缀
5. .eslintrc.js：eslint配置文件
6. .gitignore：上传到git时忽略的文件
7. .babel.config.js：babel转义配置文件
8. package-lock.json：锁定安装时的包的版本号，并且需要上传到git，以保证其他人在npm install时大家的依赖能保证一致
9. package.json：项目依赖的部分
10. postcss.config.js：postcss配置项
11. REACME.md：项目的说明书
12. vue.config.js：项目的主要配置文件
