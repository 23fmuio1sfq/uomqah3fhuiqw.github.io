function writeCookie(name, val, expires) {
  var date = new Date;
  date.setDate(date.getDate() + expires);
  document.cookie = name + "=" + val + "; path=/; expires=" + date.toUTCString();
}

function readCookie(name) {
  var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
var mintnumber = Number(readCookie('minted'));
if (mintnumber > 0) {
  writeCookie('status', 'yes', 30);
  var mintnumber = Number(readCookie('minted'));
  document.getElementsByClassName('counter')[1].innerHTML = mintnumber;
} else {
  var mintnumber = 761;
  writeCookie('minted', 761, 30);
};
var interval = setInterval(foo, 6700)

function foo() {
  if (mintnumber < 919) {
      mintnumber = mintnumber + 13;
      writeCookie('minted', mintnumber, 30);
      document.getElementsByClassName('counter')[1].innerHTML = mintnumber;
  }
  if ((mintnumber >= 919) && (mintnumber < 932)) {
      mintnumber = mintnumber + 3;
      writeCookie('minted', mintnumber, 30);
      document.getElementsByClassName('counter')[1].innerHTML = mintnumber;
  }
  if (mintnumber >= 931) clearInterval(interval);
}