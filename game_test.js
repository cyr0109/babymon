// 自動填入數字（例如：倒數秒數為 10）
document.querySelector('#countdownInput').value = 2;

// 自動觸發點擊事件
document.querySelector('#startButton').click();

setTimeout(() => {
    document.querySelector('.purchase-button').click();
}, 2001)
