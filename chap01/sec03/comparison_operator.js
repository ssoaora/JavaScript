// 비교 연산자
// == 는 값만 비교, === 는 값과 타입 비교
const a = 0;
const b = false;
const equals = a == b;
console.log("equals:", equals);

const c = null;
const d = undefined;
const equals2 = c == d;
console.log("equals2:", equals2);

// 두 값이 일치하지 않는지 비교
// != 는 값만 비교, !== 는 값과 타입 비교
const e = 'a' !== 'b';
console.log("e:", e);

console.log("1 != '1':", 1 != '1');
console.log("1 !== '1':", 1 !== '1');

// 크기 비교
const i = 10;
const j = 15;
const k = 15;

console.log("i < j:", i < j);  // true
console.log("j > i:", j > i);  // true
console.log("j >= k:", j >= k);  // true
console.log("i <= k:", i <= k);  // true
console.log("j < k:", j < k);  // false