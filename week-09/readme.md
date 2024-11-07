# RAC

## Date

2024/11/7

## Authors

111703040 游宗諺

## Status

Problem fixed. All functions working properly.

## What Happened

1. curl with a wrong result
2. After 1. fixed, nginx can't run properly
3. After 2. fixed, curl won't pop out anything but an error message

In short, problem causes that we can't acces the server!!!

## Root Causes

1. a typo
2. permission problem
3. data storage issue
4. firewall issue

## Resolution

follow the steps, you are fine!!

1. `sudo nginx -t`
    - if all work is clean, and no errors, you should see `nginx: configuration file /etc/nginx/nginx.conf test is successful`, but instead, you get `2024/11/07 11:00:48 [emerg] 1341#1341: unexpected ";" in /etc/nginx/nginx.conf:8` error message
    - ![image01](https://github.com/bscny/git-practice/blob/main/assets/images/week_09/1.png)
    - then lets jump into debug section:
2. `cd /etc/nginx/`
3. `sudo vim nginx.conf`
    - ![image02](https://github.com/bscny/git-practice/blob/main/assets/images/week_09/2.png)
    - now problem **might** comes, if you have `E212: Can't open file for writing` while saving files your vim, then you need to straightly go to step 15 first and come back after that
4. go to line 8, you can see a typo, fix that
5. after that let's try running nginx, `sudo systemctl start nginx` or `sudo nginx`
    - you will get `nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)` since we have a fake server running
    - type `curl http://localhost` you will get `Haha, I am the fake web server. Try to find the real web server!`
    - ![image03](https://github.com/bscny/git-practice/blob/main/assets/images/week_09/3.png)
6. type `sudo fuser -k 80/tcp`
    - so we can kill the fake server's process and start nginx
    - `sudo systemctl start nginx` or `sudo nginx`
    - now if we curl we'll see `curl: (7) Failed to connect to localhost port 80 after 0 ms: Couldn't connect to server` which tells us can't even build connection on port 80!
    - ![image04](https://github.com/bscny/git-practice/blob/main/assets/images/week_09/4.png)
    - the reason of that is "probably" because of fire wall issue, 99% of the time. So if AWS has the correct inbound, that means the problem is in linux itself
7. `cd /etc/iptables/`
8. `sudo vim rules.v4`
    - again, if you have `E212: Can't open file for writing` while saving files your vim, go straightly to step 15 and come back
9. delete the line `-A INPUT -p tcp -m tcp --dport 80 -j REJECT --reject-with icmp-port-unreachable`
    - ![image05](https://github.com/bscny/git-practice/blob/main/assets/images/week_09/5.png)
10. after that, exit vim and type `sudo iptables -D INPUT -p tcp --dport 80 -j REJECT`
    - now let's try curl again, we still get `curl: (7) Failed to connect to localhost port 80 after 0 ms: Couldn't connect to server`
    - why? that's go back to nginx to check the environment settings
11. `cd /etc/nginx/sites-available/`
12. `sudo vim default`
    - in line 40, we can see the root server is at /var/myweb , let's check it
    - ![image06](https://github.com/bscny/git-practice/blob/main/assets/images/week_09/6.png)
13. `cd /var/myweb/`
    - notice that index.html has only the permission from root
    - ![image08](https://github.com/bscny/git-practice/blob/main/assets/images/week_09/8.png)
14. `sudo chmod 666 index.html` to set it correctly
    - now theoretically, current functions could already work. If can't, don't worry, just go to the next stap
    - ![image09](https://github.com/bscny/git-practice/blob/main/assets/images/week_09/9.png)
    - ![image10](https://github.com/bscny/git-practice/blob/main/assets/images/week_09/10.png)
15. there's an issue of over using the storage, let's first see what's the problem. Type `cd /`
16. `sudo find . -type f -size +100M -exec ls -sh {} \;` , now we see something weird, largefiles under log directory
    - usually log related files will grow as the time goes, and becoming bigger and bigger without being notice, let's delete them
    - ![image07](https://github.com/bscny/git-practice/blob/main/assets/images/week_09/7.png)
17. `cd /var/log/system/`
18. `sudo rm *`
    - now if we use vim to edit files, no longer has errors like before
