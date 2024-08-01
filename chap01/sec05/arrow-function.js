const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));



// 단축해서 사용 가능
const add2 = (a, b) => a + b;
console.log(add2(3, 4));



// 여러 줄로 구성되어있는 경우에는 코드 블록을 만들어야함
const getGrade = score => {
  if (score === 100) {
    return 'A+';
  }
  else if (score >= 90) {
    return 'A';
  }
  else if (score === 89) {
    return 'B+';
  }
  else if (score >= 80) {
    return 'B';
  }
  else if (score === 79) {
    return 'C+';
  }
  else if (score >= 70) {
    return 'C';
  }
  else if (score === 69) {
    return 'D+';
  }
  else if (score >= 60) {
    return 'D';
  }
  else {
    return 'F';
  }
}

const grade = getGrade(100);
console.log(grade);
