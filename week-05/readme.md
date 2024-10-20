# Proofs of my work

透過更改 CNAME record 將 ssl 憑證輸入進 nginx:

Gdaddy CNAME record 設定:
[image4](https://github.com/bscny/git-practice/blob/main/assets/images/week_05/5-4.png)

憑證:
[image3](https://github.com/bscny/git-practice/blob/main/assets/images/week_05/5-3.png)


NginX 設定檔:
[image1](https://github.com/bscny/git-practice/blob/main/assets/images/week_05/5-1.png)

實測:
[image2](https://github.com/bscny/git-practice/blob/main/assets/images/week_05/5-2.png)


# Week 05

1. [https://testestestest.online](https://testestestest.online)

2. [GoDaddy](https://tw.godaddy.com)

3. DNS 的 A record 是什麼？
簡單來說就是一個 domain name 指向的 IP address。「A」代表「位址」，是最基礎的 DNS 記錄類型。

4. DNS 的 NS record 是什麼？
NS 代表「Name Server」，NS record 告訴網路怎麼找到網域的 IP 位址。在 DNS Server 裡有一層 server 叫 Name Server，NS record 就存在這裡，一個 NS record 會儲存所有的 record，包括 A 記錄、MX 記錄或 CNAME 記錄。

5. Domain Name vs FQDN vs URL 這三者分別為何？
    - Domain Name
        任何一個通過申請買下的網域，就是一個 Domain Name，比如說: yourdomain.com
    - FQDN
        fully qualified domain name，是一個 Domain Name，但必須包含: (root domain 通常忽略)
            - top-level domain               
               比如說 .com .org
            - second-level domain
                比如說: yourdomain.com 中的 yourdomain
            - Subdomain
                比如說: www
        綜上述合起來看，www.yourdomain.com 就是一個 FQDN
    - URL
        只有 Domain Name 或 FQDN 是沒辦法實際尋訪一個網站的，因為我們並沒有規範其對應的 TCP protocol，一但搭上了 protocol，就形成了 URL。比如說: https://www.yourdomain.com

6. 為什麼應該要為網站加上憑證？而不是直接用 http 就好？
http 走的是 port 80 (通常)，是不加密的，https 走的是 port 443 (通常)，是經過加密的，所以才需要憑證，現在主流是用 TLS 加密。

## 我的碎碎念

在研究如何把 SSL 弄進去 NginX 裡的時候，去查了一下 CNAME record 是什麼，還滿有趣的。跟 A record 很像，只不過是把 domain name 變成 domain name，而不是 IP address，就像上面的圖一樣，GoDaddy 有預設 CNAME record，比如說把 www.domain.com map 到 domain.com。所以兩種方法都可以拿到一樣的 IP。

### References

> https://www.cloudflare.com/zh-tw/learning/dns/dns-records/dns-a-record/

> https://www.cloudflare.com/zh-tw/learning/dns/dns-records/dns-ns-record/

> https://www.youtube.com/watch?v=HnUDtycXSNE

> https://www.f5.com/glossary/fqdn
