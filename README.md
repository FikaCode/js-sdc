# English | 简体中文
## javascript same domain communication  
#### a simple html same domain communication by localStorage storage event  
## require  
> storage event support  
> localstorage support  
## usage  
1. import script  
  `<script src="./js-sdc.js"></script>`
2. receive message  
  ```javascript
    onSDCMessage('test', function (mess) {
      alert(mess);
    });
  ```
3. send Message  
   
   same page
   ```
   sendSDCMessage("test", "same page mess！", true);
   ```
   not same page
   ```
   sendSDCMessage("test", "not same page mess！");
   ```
## license
#### MIT License  
