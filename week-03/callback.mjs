// ALART!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// I know teacher is giving us a little test so that we can comprehand the concept of global variables and local ones
// The code used to look like  console.log(`開始工作 at ${now.toISOString()}`); 
// BUT!!! now is a local var in callback function in setTimeout(), can't be acessed outside the scope!
// I declare another Date object start_time in order to fix the bug

function doJob(job, time, cb) {
    setTimeout(() => {
        // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
        let now = new Date();
        cb(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
}

// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
// changes right here!!
let start_time = new Date();
console.log(`開始工作 at ${start_time.toISOString()}`);

// write your code here
// 以下是使用範例
doJob('刷牙', 1000, function (data) {
    // 表示 doJob 做完了
    console.log(data);
});

// since if we dont use promise, nodejs won't wait for this dojob to finish before executing the latter dojob
// we have to add it ourselves manually
doJob('吃早餐', 4000, function (data) {  // as u can see its not 3000, its 4000 = 3000 + 1000
    // 表示 doJob 做完了
    console.log(data);
});

doJob('寫功課', 5000, function (data) {  // as u can see 5000 = 1000 + 4000
    // 表示 doJob 做完了
    console.log(data);
});

doJob('吃午餐', 7000, function (data) {  // as u can see 7000 = 2000 + 5000
    // 表示 doJob 做完了
    console.log(data);
});
