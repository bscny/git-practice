# Week 10 homework

## Regular Alarm (to email)

### Testing Result

successful!

![email notify](https://github.com/bscny/git-practice/blob/main/assets/images/week_10/1.png)

![CloudWatch Alarm](https://github.com/bscny/git-practice/blob/main/assets/images/week_10/5.png)

### What exactly happened?

1. 透過 stress-ng 模擬 CPU 使用率
    - ![4](https://github.com/bscny/git-practice/blob/main/assets/images/week_10/4.png)
2. 開始監控 AWS 的這兩個圖表
    - AWS CloudWatch Metrics
    - AWS CloudWatch Alarm
3. 首先，email 通知沒過多久就來了!
    - ![1](https://github.com/bscny/git-practice/blob/main/assets/images/week_10/1.png)
    - 這時，AWS 上的圖表還沒更新
    - ![2](https://github.com/bscny/git-practice/blob/main/assets/images/week_10/2.png)
    - ![3](https://github.com/bscny/git-practice/blob/main/assets/images/week_10/3.png)
    - 但確實看的到上升的趨勢
4. 過了一段時間，終於看到 CloudWatch Alarm 的圖表跳上來了!
    - ![5](https://github.com/bscny/git-practice/blob/main/assets/images/week_10/5.png)
    - 但是 CloudWatch Metrics 的圖表還是沒更新
    - ![6](https://github.com/bscny/git-practice/blob/main/assets/images/week_10/6.png)
5. 又過了一段時間，第二封 email 已經來了，CloudWatch Metrics 卻還是沒更新到超過 60% 的情況
    - [7](https://github.com/bscny/git-practice/blob/main/assets/images/week_10/7.png)
6. 最後，在過了兩分鐘左右，CloudWatch Metrics 終於成功更新 (順帶一提，這裡是在半夜 1:30 測試，原本以為會很快T_T)
    - [8](https://github.com/bscny/git-practice/blob/main/assets/images/week_10/8.png)

### 總結

第一次玩這種通知，比除錯系統好玩 (因為簡單很多><)
