const a = 1;

if (true) {
  const a = 2;
  console.log('if문 안의 a 값은 ' + a);
}

console.log('if문 밖의 a 값은 ' + a);



// if-else 문
const b = 10;

if (b > 15) {
  console.log('b가 15보다 큽니다.');
}
else {
  console.log('b가 15보다 크지 않습니다.');
}



// if-else if 문
const c = 7;

if (c === 5) {
  console.log('5입니다!');
}
else if (c === 10) {
  console.log('10입니다!');
}
else {
  console.log('5도 아니고 10도 아닙니다.');
}
