# Express 專案

![image](https://github.com/bscny/git-practice/blob/main/assets/images/week_03/HW3-1.png)

可以看到，在 `npm init` 後面接default 參數(一直enter) 之後，產生了一個package.json 檔，透過 `npm install express` 後，多了個dependencies。

1. package.json 中的 dependencies 是什麼?
    - 這裡列出了剛才透過 `npm install express` 所下載的套件，還有他的版本。
    - 如果之後繼續透過npm抓東西，dependencies 下則會越列越多。

2. package.json 中的 scripts 這個區塊怎麼用？
    - scripts 這個區塊裡放的是可以用npm直接執行的腳本語言，直接舉例子來看比較快:
![image](https://github.com/bscny/git-practice/blob/main/assets/images/week_03/HW3-2.png)
    
    之後執行:
![image](https://github.com/bscny/git-practice/blob/main/assets/images/week_03/HW3-3.png)
    
    可以看到，他確實跑出了scripts 區塊裡相對應的內容。
    - 由此可知，要應用的話可以像這樣:
![image](https://github.com/bscny/git-practice/blob/main/assets/images/week_03/HW3-4.png)

![image](https://github.com/bscny/git-practice/blob/main/assets/images/week_03/HW3-5.png)

    這裡值得注意的是，因為launch 不是default 的腳本，所以要帶一個 `run` 。

3. Port number 要怎麼以環境變數來設定？
    - 若要用.env 檔來開port，必須做一些步驟和安裝一個插件:

    1. `npm install dotenv` 
    2. 將想開的port number 放進.env 裡面，比如說 `PORT=5000` 。
    3. 修改app.js ，以下是before 和after 。

    before:
![image](https://github.com/bscny/git-practice/blob/main/assets/images/week_03/HW3-6.png)

    after:
![image](https://github.com/bscny/git-practice/blob/main/assets/images/week_03/HW3-7.png)

    4. 執行command。

4. 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？
    - 不上傳.env 檔，因為他人使用時跟我本身的local 環境無關，我想開在5000，其他人卻可能想開在3000，追蹤.env 檔沒有太大的實質意義

5. 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？
    - nodejs 的世界裡:
        - 對CJS 來說，不用特別去更改package.json 的參數，而且export 的資訊會放在最後:
        ```js
        function add(x, y) {
            return x + y;
        }

        module.exports = { add };
        ```
        
        ```js
        var in = require('./func.js');

        var result = in.add(10, 5);
        ```

        - 對ESM 來說，需在package.json 中增加 `type: module` ，或是使用 .mjs 當作檔案類型，讓nodejs 判斷他是ESM；export 也會直接寫在前面:
        ```js
        export function add(x, y) {
            return x + y;
        }
        ```

        ```js
        import {add} from './func.js';

        add(10, 5);
        ```

    - web browser的世界裡:
        - 其實大同小異，只不過是從package.json 裡更改，變成在html 裡更改而已。
