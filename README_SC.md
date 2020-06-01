# [English](https://github.com/FikaCode/js-sdc/blob/master/README.md 'English') | [简体中文](https://github.com/FikaCode/js-sdc/blob/master/README_SC.md '简体中文')
## javascript 页面通信 
#### 一个简单javascript通信机制，使用localstorage来实现
## 要求  
> storage event 事件支持  
> localstorage 支持
## 用法  
1. 引入js  
  `<script src="./js-sdc.js"></script>`
2. 接收消息    
  ```javascript
    onSDCMessage('test', function (mess) {
      alert(mess);
    });
  ```
3. 发送消息    

   同一个页面需要添加第三个参数
   ```
   sendSDCMessage("test", "same page mess！", true);
   ```
   不同的页面直接发
   ```
   sendSDCMessage("test", "not same page mess！");
   ```
## 许可
#### MIT License  
