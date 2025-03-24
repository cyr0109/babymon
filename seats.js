const price = '5800';  // 設定價格條件
const seats = ['特四區', '特一區', '特二區', '特三區', '橙2B-1', '黃2B-2', '黃2B-1', '橙2B-2'];   // 設定可點擊的座位區名稱

let clicked = false;  // 設定一個變數來標記是否已經點擊過

document.querySelectorAll('.zone-label').forEach(label => {
    if (clicked) return;  // 如果已經點擊過，直接跳出該區域的處理邏輯

    if (label.innerHTML.includes(price)) {
        const dataId = label.getAttribute('data-id');
        if (dataId) {
            const zoneList = document.querySelector('#' + dataId);
            if (zoneList) {
                seats.forEach(seat => {
                    if (clicked) return;  // 如果已經點擊過，跳過後續座位處理

                    zoneList.querySelectorAll('li a').forEach(seatLabel => {
                        const seatText = seatLabel.innerText.trim(); // 讀取座位名稱
                        if (seatText.includes(seat) && !seatLabel.innerText.includes('已售完')) {
                            seatLabel.click();
                            clicked = true;  // 標記為已點擊，避免繼續執行
                            return;  // 退出內層迴圈
                        }
                    });
                });
            }
        }
    }
});

  