const price = '5800';  // 設定價格條件
const seat = '特四區';   // 設定可點擊的座位區名稱


document.querySelectorAll('.zone-label').forEach(label => {
    if (label.innerHTML.includes(price)) {
        const dataId = label.getAttribute('data-id');
        if (dataId) {
            const zoneList = document.querySelector('#' + dataId);
            if (zoneList) {
                zoneList.querySelectorAll('li a').forEach(seatLabel => {
                    const seatText = seatLabel.innerText.trim(); // 讀取座位名稱
                    if (seatText.includes(seat) && !seatLabel.innerText.includes('已售完')) {
                        console.log(seatLabel)
                        seatLabel.click(); 
                    }
                });
            }
        }
    }
});

  