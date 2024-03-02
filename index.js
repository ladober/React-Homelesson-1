// შექმენით მასივი,რომელიც შეიცავს როგორც დადებით ასევე უარყოფით რიცხვებს.
// გაფილტრეთ მოცემული მასივი შემდეგ კი დაითვალეთ მხოლოდ დადებითი რიცხვების ჯამი.
// გამოიყენეთ მასივის filter და reduce მეთოდები.

const arr = [-1, 0, 2, -3, 5, -7, 10];

let Sum = 0;
arr.filter((item) => {
  if (item > 0) {
    Sum += item;
    return Sum;
  }
});

console.log(arr);
console.log(Sum);

let reduceTotal = arr.reduce((total, currentValue) => {
  if (currentValue > 0) {
    total += currentValue;
  }

  return total;
}, 0);

console.log(reduceTotal);

// შექმენით მასივი,რომელიც შედგება სტრინგებისგან(რომლებიც შეიძლება განმეორდეს).
// დაწერეთ კოდი,რომელიც დაითვლის რამდენჯერ მეორდება თითოეული სტრინგი მასივში და
// დააბრუნეთ ობიექტის სახით, მაგ: { a:1 , b: 6, c : 2}. გამოიყენეთ მასივის reduce მეთოდი.

const stringArr = ["luke", "yoda", "grogu", "yoda", "luke", "yoda"];

let yodaCounter = 0;
let lukeCounter = 0;
let groguCounter = 0;

const strObj = stringArr.reduce((total, currentValue) => {
  if (currentValue === "yoda") {
    yodaCounter++;
  } else if (currentValue === "luke") {
    lukeCounter++;
  } else if (currentValue === "grogu") {
    groguCounter++;
  }
  return {
    ...total,
    yoda: yodaCounter,
    luke: lukeCounter,
    grogu: groguCounter,
  };
}, {});

console.log(strObj);

// შექმენით ფუნქცია addAsync,რომელიც იღებს ორ პარამეტრს და აბრუნებს პრომისს.
// თუ ორივე პარამეტრი გადაეცემა(undefined არ არის და ორივე პარამეტრი რიცხვია)
// პრომისი უნდა დარიზოლვდეს(resolve), წინააღმდეგ შემთხვევაში დარიჯექთდეს(reject).
// გამოიძახეთ ფუნქცია რამდენიმეჯერ, სხვადასხვა პარამეტრით და კონსოლში გამოიტანეთ შედეგი.

function addAsync(value1, value2) {
  let promise = new Promise((resolve, reject) => {
    if (value1 <= 10 || value2 <= 30) {
      resolve("Resolved");
    } else {
      reject("Rejected");
    }
  });

  promise
    .then((value1) => {
      console.log(value1);
    })
    .catch((error) => {
      console.log(error);
    });
}

addAsync(10, 31);

addAsync(32, 40);

addAsync(11, 28);
