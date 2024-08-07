const dog = {
  name: '멍멍이',
  age: 2,
  'key with space': true
};

console.log(dog.name);
console.log(dog.age);
console.log(dog['key with space']);



const ironMan = {
  name: 'Tony Stark',
  actor: 'Robert Downey Jr',
  alias: 'Ironman'
};

const captainAmerica = {
  name: 'Steve Rogers',
  actor: 'Chris Evans',
  alias: 'Captain America'
};

console.log(ironMan);
console.log(captainAmerica);

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);