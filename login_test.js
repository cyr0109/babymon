// 0.5 秒後填入帳密並送出
setTimeout(() => {
    const input = document.querySelector('.member-input');
    const button = document.querySelector('.submit-button');
    
    if (input && button) {
        input.value = '12345678';
        button.click();
    }
}, 500);
