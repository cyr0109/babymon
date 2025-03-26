function reloadAtTaiwanTime(hour, minute, second, millisecond = 0) {
    let now = new Date();

    // 取得當前 UTC 時間
    let utcNow = new Date(now.getTime());

    // 設定目標時間（台灣時間 UTC+8）
    let targetTime = new Date(utcNow);
    targetTime.setUTCHours(hour - 8, minute, second, millisecond);

    // 如果目標時間已經過了今天，就設定為明天的該時間
    if (utcNow >= targetTime) {
        targetTime.setUTCDate(targetTime.getUTCDate() + 1);
    }

    let timeUntilReload = targetTime.getTime() - utcNow.getTime();

    console.log(`將在 ${(timeUntilReload / 1000).toFixed(3)} 秒後刷新 (台灣時間 ${hour}:${minute}:${second}.${millisecond})`);

    // 設定計時器
    setTimeout(() => {
        location.reload();
    }, timeUntilReload);
}

reloadAtTaiwanTime(10, 59, 59, 500);

button = document.querySelector('.btn.btn-primary.text-bold.m-0');
HTMLElement.prototype.click.call(button);