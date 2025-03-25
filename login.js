let member_id = 'BZ610697791'

// 填入驗證碼
document.querySelector('input[name="checkCode"]').value = member_id;

form = document.querySelector('.btn.btn-primary');
HTMLElement.prototype.click.call(form);