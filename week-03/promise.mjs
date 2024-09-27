// Using promise, we control the flow of operation.
// In contrast to callbacj.mjs , we no longer have to manually add the time interval anymore

function Promise_doJob(job, time) {
    let each_job = new Promise((resolve) => {  //  since our task never failed, we don't need to add reject cb
        setTimeout(() => {
            // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
            let now = new Date();
            resolve(`完成工作 ${job} at ${now.toISOString()}`);
        }, time);
    });

    return each_job;
}

// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let start_time = new Date();
console.log(`開始工作 at ${start_time.toISOString()}`);

// write your code here
// 以下是使用範例
Promise_doJob('刷牙', 1000).then((data) => {
        console.log(data);

        return Promise_doJob('吃早餐', 3000);
    }).then((data) => {
        console.log(data);

        return Promise_doJob('寫功課', 1000);
    }).then((data) => {
        console.log(data);

        return Promise_doJob('吃午餐', 2000);
    }).then((data) => {
            console.log(data);
    }).catch(() =>  {
        
    })
