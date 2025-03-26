// 持修測試專用
// const prices = ['2980'];  // 設定價格條件
// const seats = ['特C區'];   // 設定可點擊的座位區名稱，確保優先選擇

// 寶怪座位設定
const prices = ['6800', '5800', '4800', '4300', '3800', '2800'];  // 設定價格條件
const seats = ['特四區', '特一區', '特二區', '特三區', '橙2B-1', '黃2B-2', '黃2B-1', '橙2B-2', '藍4B-1', '藍4B-2', '藍2B-1', '藍2B-2'];   // 設定可點擊的座位區名稱

let clicked = false;

document.querySelectorAll('.zone-label').forEach(label => {
    if (clicked)return
    if (!prices.some(price => label.innerHTML.includes(price))) return;

    const zoneList = document.querySelector(`#${label.getAttribute('data-id')}`);
    if (!zoneList) return;
    zoneList.querySelectorAll('li a').forEach(seatLabel => {
        if (clicked) return;
        if (seats.some(seat => seatLabel.innerText.includes(seat)) && !seatLabel.innerText.includes('已售完')) {
            HTMLElement.prototype.click.call(seatLabel);
            clicked = true;
            return
        }
    });
});

if (!clicked){
    document.querySelectorAll('.zone-label').forEach(label => {
        if (clicked)return
        if (!prices.some(price => label.innerHTML.includes(price))) return;
    
        const zoneList = document.querySelector(`#${label.getAttribute('data-id')}`);
        if (!zoneList) return;
        zoneList.querySelectorAll('li a').forEach(seatLabel => {
            if (clicked) return;
            if (!seatLabel.innerText.includes('已售完')) {
                HTMLElement.prototype.click.call(seatLabel);
                clicked = true;
                return
            }
        });
    });
}

