document.querySelector('.form-select.mobile-select').value = '2';  // 設定選擇值為 2

// 提交表單
form = document.querySelector('label[for="TicketForm_agree"]');
HTMLElement.prototype.click.call(form);