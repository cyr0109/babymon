const ticket_amount = '1' // 你要幾張票

document.querySelector('.form-select.mobile-select').value = ticket_amount;  
TicketForm_agree = document.querySelector('label[for="TicketForm_agree"]');
HTMLElement.prototype.click.call(TicketForm_agree);
TicketForm_verifyCode = document.querySelector('#TicketForm_verifyCode');
TicketForm_verifyCode.focus();