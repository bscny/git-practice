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


# Additional question


1. localhost 是什麼？
    - 簡單來說的話是一個IP address: 127.0.0.1 。每台電腦都一樣，用來連自己做測試。
    - localhost 這個字眼本身概念很像環境變數(但不是)，他用來map 127.0.0.1 這個IP。

2. curl 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些？
    - Client for URLs，顧名思義透過network protocols (HTTP, HTTPS, FTP...)，把原本在網路上跑的資訊，抓來終端command line (也可以推上去，是能雙向的)。
    - 可以透過-I 來測試，舉例來說: `curl -I https://example.com` 會回傳https://example.com 這個server 的回傳碼(200)代表成功。

    ![image](https://github.com/bscny/git-practice/blob/main/assets/images/week_03/HW3-8.png)

    - 常用參數:
        - -X
            - GET
                - 用於從服務器獲取資源或數據。
            - POST
                - 用於向服務器提交數據。
            - DELETE
                - 用於請求服務器刪除特定資源。
            - e.g.  `curl -X GET http://example.com`
        - -d
            - 發送資料通常和POST 請求合用。
            - e.g.  `curl -X POST -d "name=value" http://example.com/resource`
        - -H
            - 添加自定義標頭。
            - e.g.  `curl -H "Authorization: Bearer token" http://example.com`
        - -o
            - 將響應內容輸出到指定文件中。
            - e.g.  `curl -o filename.html http://example.com`
        - -I
            - 如上題
        - -v
            - 顯示詳細的請求和響應過程，包括連接過程的詳細資訊。
            - e.g.  `curl -v http://example.com`

# 備註

報告老師，由於我的 AWS instance 曾經一直開著三台，所以有被算錢。為了及時止血只好先把所有的 instance 關掉，現在 12 月了，重啟後發現 ip 那些全跑掉了，故來重新設定。若老師看到 commit 時發現為麼這學生這麼晚才交作業，原因是如此。T_T
