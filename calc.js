let number = 164;
let page = Math.ceil(number / 18);
let slot = number - (page - 1) * 18;

console.log('page: ' + page, 'slot: ' + slot);
