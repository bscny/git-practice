# WEEK 4



1. The IP address is : 54.250.70.171

2. 什麼是 instance type?

    instance type 決定了要使用多少 CPU, memory, storage, and networking capacity。本次功課使用的是 micro 也就是最簡易的資源的 instance type (免費)。

3. 什麼是 Nginx？有哪些用途與特性？

    Nginx 是一個強大的軟體 (open source) 讓 client 和 server 之間的互動可以更加穩定、安全、輕鬆、快速。

    - Web Server:

        Nginx 可以被當成一個純粹的 server，就像上禮拜的 express server 那樣，可用 `curl` 指令直接與其互動。

    - Reverse Proxy:

        此項等第5點一並說明。

    - Load Balancer:

        此項等第5點一並說明。

    - HTTP Cache:

        此項等第5點一並說明。

4. pm2 套件是什麼？有什麼用處？

    pm2 是一個 node 的程序管理器，可以幫我們輕鬆執行多個程序、自動重啟程序、彙整各程序資訊、提升處理 request 速度。其中常用指令有:
    
    - `pm2 start <app_name>`

    - `pm2 restart <app_name>`

    - `pm2 stop <app_name>`

    - `pm2 monit`

    - `pm2 log`

5. 步驟 9 中提到的 `proxy` 是什麼意思？為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server?

    `proxy` 這個字的字面意思是代表，我覺得形容得非常好，因為一旦我們使用 proxy，client 端將看不到 Server 端，只能跟 proxy 作互動。那 proxy 到底能提供什麼優點讓我們不直接和 Server 互動呢?

    1. Load Balancer: 

        我們想像一個 NetFlix 的 Server，假設今天有十萬個人同時想要觀看某部影集，缺少 proxy 的情況下 server 端要怎麼分配這些人呢? 要怎麼樣才能確定每個 server 可以附載適當的量呢? 這個時候我們就可以使用proxy達成這件事情，我們讓所有request都先跟 proxy 互動，之後再讓 proxy 把相應的 request 分配到 Server。(可用 round robin 等演算法)
    2. HTTP Cache:

        讓我們繼續沿用上個 Netflix 的例子，這十萬個用戶都想取得高品質 1080P 的影片的話，難道 proxy 要每一次都跟 server 獲取一段 1080P 的影片，之後再傳給 client 嗎? 這樣太沒效率了，有了 proxy，自從某個 client 拿到了 proxy 從 server 傳輸出來的影片之後，proxy 就先把那份影片存起來，這樣下個 client 要使用的時候就不用再回去 server 拿一次了。
    3. Network Security:

        正如前面所說，client 只會和 proxy 做互動，所以駭客能攻擊到的IP在哪裡呢? 只剩 proxy。因此在做資安維護的時候只要維護 proxy 就可以了。

6. 設定檔:

    - nginx.conf:
        ```
        user  nginx;
        worker_processes  auto;

        error_log  /var/log/nginx/error.log notice;
        pid        /var/run/nginx.pid;


        events {
            worker_connections  1024;
        }

        http {
            include       /etc/nginx/mime.types;
            default_type  application/octet-stream;
        
            log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                              '$status $body_bytes_sent "$http_referer" '
                              '"$http_user_agent" "$http_x_forwarded_for"';

            access_log  /var/log/nginx/access.log  main;

            sendfile        on;
            #tcp_nopush     on;

            keepalive_timeout  65;

            #gzip  on;

            include /etc/nginx/sites-enabled/*.config;
        }
        ```

    - myserver.config:
        ```
        server{
            listen 80;
            listen [::]:80;
            server_name wach.quest;
            location / {
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $host;
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
                # location /overview {
                #     proxy_pass http://127.0.0.1:3000$request_uri;
                #     proxy_redirect off;
                # }
            }
        }
        ```

7. Security Group 是什麼？用途為何？有什麼設定原則嗎？

    - Security Group 是雲端運算環境中用來控制進出虛擬資源（如本次功課的 instance）的網路流量的虛擬防火牆。

    - Security Group 可以用來:
        - 限制 IP 和 port 
        - 通過不同的安全群組來區分不同層級的服務

    - 設定原則:
        - 僅開放必要的 port
        - 盡量避免使用廣泛的 IP 範圍（如 0.0.0.0/0）
        - 資源按照其角色或功能分組

8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？

    sudo 就是以 root 的身分做操作的 command line，要加入 sudo 時，就代表使用者 user 要針對自己沒有權限的檔案做操作，若使用 `ls -l` 我們可以看到相對應的權限，比如說 /etc 下的檔案權限 (e.g. rw-r-----  前三碼屬於 root, 中間是 root 的 group, 最後是其他使用者 user)，這時若想以 user 的身分操作(在此情況讀、寫、執行都不行)，就要帶 `sudo` 。

9. Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？

    - /var/log/nginx

    - 我在研究 nginx.conf 時偶然發現的，沒帶 `sudo` 執行 Nginx 時也會提示 (error log)

    - ```
cd /var/log/nginx 
cat access.log
```

10. 無

11. References:

> https://www.youtube.com/watch?v=0Gz-PUnEUF0

> https://www.youtube.com/watch?v=iInUBOVeBCc

> https://nginx.org/en/linux_packages.html#Ubuntu

> https://medium.com/learn-or-die/%E5%A5%BD-pm2-%E4%B8%8D%E7%94%A8%E5%97%8E-fc7434cc8821

> https://www.youtube.com/watch?v=4bS7KS_s8Go

> https://www.youtube.com/watch?v=G6OYA_tbrNM&t=873s

> https://blog.logrocket.com/how-to-run-node-js-server-nginx/

> https://www.geeksforgeeks.org/what-is-security-group-in-aws-and-how-to-create-it/
