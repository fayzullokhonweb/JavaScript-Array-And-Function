// const data = ["Hello", 1, "10", false, 0, true, 8, -4, undefined];
// const newData = [];
// for (let i = 0; i < data.length; i++) {
//   if (typeof data[i] == "number") {
//     newData.push(data[i]);
//   }
// }

// console.log(newData);

//

// const data = ["Hello", 1, "10", false, 0, true, 8, -4, undefined, null];
// const dataType = [];
// for (let i = 0; i < data.length; i++) {
//   dataType.push(typeof data[i]);
// }
// console.log(dataType);

//

// const numbers = [1, 2, 3, 4, 6, 8, 7, 9, 56, 490];
// let k = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (k < numbers[i]) {
//     k = numbers[i];
//   }
// }
// console.log(k);

//

// Arrayga  oid misollar
// Array1.
//  n natural soni berilgan. Dastlabki n ta toq sondan tashkil topgan massiv qaytaruvchi getInitialOdds(n) nomli funksiya tuzing.
// Input: getInitialOdds(5)
// Output: [1, 3, 5, 7, 9]

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 != 0) {
//     console.log(arr[i]);
//   }
// }

// Array2.
//  arr nomli massiv berilgan. Massiv elementlari orasidan juftlarini indekslari kamayish tartibidan hosil bo’lgan massivni qaytaruvchi getEvenReverse(arr) programma tuzilsin.
// Input: [4, 5, 7, 8, 6, 9]
// Output: [6, 8, 4]

// const arr = [1, 6, 5, 9, 2, 8, 7, 4, 3];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr.reverse());

//

// Array3.
//  n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin.
// A[0], A[n-1], A[1], A[n-2], A[2], A[n-3],...
// Input:  [4, 5, 7, 8, 6, 9]
// Output: 4, 9, 5, 6, 7, 8, 8, 7, 6, 5, 9, 4

//

//

// Array4.
//  N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlari yig'indisini chiqaruvchi rangeSum(arr, K, L) programma tuzilsin.
// Input: arr = [1, 6, 9, 5, 8, 10, 15];
// Ouput: rangeSum(arr, 2, 5) => 32

// const arr = [1, 2, 5, 3, 9, 7, 6, 6];
// let K = 1;
// let L = 6;
// let summa = 0;
// for (let i = K; i <= L; i++) {
//   summa += arr[i];
// }
// console.log(summa);

//

// Array5.
//  n ta elementdan tashkil topgan massiv berilgan. Massivda qatnashgan sonlardan faqat bittadan chiqaruvchi getSingleArr(arr) tuzilsin.
// Input: let arr =  [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7]
// Output: [7, 4, 2, 3, 1, 5]

// const numbers = [1, 2, 3, 1, 9, 4, 6, 8, 7, 5, 3, 9, 5, 4, 6, 6];
// const newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (!newNumbers.includes(numbers[i])) {
//     newNumbers.push(numbers[i]);
//   }
// }
// console.log(newNumbers.sort());

// Array6.
// n ta elementdan iborat massiv berilgan. Massivning eng kichik va eng katta elementlari topilsin va o'rni almashtirilsin.
// Input: [7, 4, 9, 2, 3, 1, 5]
// Output:
// Max: 9
// Min: 1
// [7, 4, 1, 2, 3, 9, 5]

//

// const numbers = [1, 2, 3, 4, 6, 8, 7, 9, 56, 49];
// let k = 0;
// let l = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (k < numbers[i]) {
//     k = numbers[i];
//   }
// }

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < l) {
//     l = numbers[i];
//   }
// }

// [numbers[0], numbers[8]] = [numbers[8], numbers[0]];

// console.log(numbers);

//

// Array7.
//  n ta elementdan tashkil topgan berilgan. Massiv elementlarini 1 ta o'rin ongga siklik siljituvchi programma tuzilsin. a[0] element qiymati a[1] ga o'tadi, a[1] esa a[2] ga, ..., a[n – 1] qiymati a[0] ga o'tadi.
// Input: [1, 5, 8, 9, 10]
// Output: [5, 8, 9, 10, 1]

// const arr = [1, 5, 8, 9, 10];
// arr.push(arr.shift());
// console.log(arr);

//

// Functionga  misollar.

// Func1.
//  Tomoni a va b ga teng bo’lgan to’g’ri to’rtburchakning yuzasi va perimetrini hisoblovchi rectangle(a, b) nomli funksiya hosil qiling. QYM
// Input: rectangle (6, 9)
// Output: 54, 30

// const calc = (a, b) => {
//   let s = a * b;
//   let p = (a + b) * 2;
//   console.log(s, p);
// };
// calc(6, 9);

//

// Func2.
//  Tomoni a ga teng bo’lgan teng tomonli uchburchakning yuzasi va perimetrini hisoblovchi triangle(a) nomli funksiya hosil qiling. QYM
// triangle (6)

// teng tomonli uchburchak tomonlari o'zaro teng

// const calc = (a, b, c) => {
//   let s = (a ** 2 * Math.sqrt(3)) / 4;

//   let p = a + b + c;
//   console.log(s.toFixed(3));
//   console.log(p);
// };

// calc(4, 4, 4);

//

// Func3.
//  1 dan n ga sonlar yig’indisini qaytaruvchi sum(n) nomli funksiya hosil qiling. QY
// const arr = () => {
//   let n = 3;
//   let result = 0;
//   for (let i = 0; i <= n; i++) {
//     result += i;
//   }
//   console.log(result);
// };
// arr();

//

// Func4. isSquare (k) mantiqiy funksiyasini hosil qiling. (k > 0). Agar k biror butun sonning kvadrati bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isSquare(10) => false
// isSquare(25) => true

// const isSquare = (k) => {
//   for (let i = 0; i < k; i++) {
//     if (k == i * i) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(isSquare(25));

//

// Func5.
//  Butun qiymat qaytaruvchi digitCount(k) funksiyasini hosil qiling. (k > 0). Funksiya k ning raqamlari sonini qaytarsin. QY
// digitCount(8791) => 4

// const digitCount = (k) => {
//   let l = String(k);
//   console.log(l.length);
// };

// digitCount(123467887);

//

// Func6.
//  n natural sonning raqamlari yig'indisini hisoblovchi getDigitSum(n) nomli funksiya hosil qiling. QY
// getDigitSum (456) => 15

// function getDigitSum(n) {
//   let l = String(n);
//   let limit = l.split("");
//   let totalSum = 0;
//   for (let i = 0; i < limit.length; i++) {
//     totalSum += Number(limit[i]);
//   }
//   console.log(totalSum);
// }

// getDigitSum(123456789);

//

// Func7.
//  a sonning ixtiyoriy n-darajasini hisoblovchi power(a, n) nomli funksiya hosil qiling. QY
// power(3, 5) => 243

// function power(a, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= a;
//   }
//   return result;
// }
// console.log(power(3, 5));

// Func8.
//  2 ta a va b sonning o'rta arifmetigi (a + b) / 2 va geometrigi (a + b) ^ (1 / 2) hisoblovchi mean(a, b) nomli funksiya hosil qiling. QYM
// mean(12, 48) => 30, 24

// function mean(a, b) {
//   let middleArithmetic = (a + b) / 2;
//   let geometric = Math.sqrt(a * b);
//   console.log(middleArithmetic, geometric);
// }
// mean(2, 2);

//

// Func9.
//  Haqiqiy sonning ishorasini aniqlovchi sign(n) nomli funksiya hosil qiling. Funksiya argumenti noldan kichik bo'lsa -1; noldan katta bo'lsa 1; nolga teng bo'lsa 0 qiymat qaytarsin. QY
// sign(10) => 1

// function sign(n) {
//   if (n > 0) {
//     console.log(1);
//   } else if (n < 0) {
//     console.log(-1);
//   }

//   if (n == 0) {
//     console.log(0);
//   }
// }
// sign(10);

//

// Func10.
//  A*x^2 + B*x + C = 0 ko'rinishidagi tenglama kvadrat tenglama deyiladi. (A noldan farqli son). Kvadrat tenglamaning ildizlar sonini aniqlovchi numberOfRoots(A, B, C) nomli funksiya hosil qiling. D = B^2 - 4*A*C. Agar D > 0 bo’lsa 2 ta, D = 0 bo’lsa 1 ta, D < 0 bo’lsa 0 ta. QY
// numberOfRoots (1, -6, 9) => 1

// function numberOfRoots(A, B, C) {
//   let D = B * B - 4 * A * C;
//   console.log(D);
//   if (D > 0) {
//     console.log(`2ta`);
//   } else if (D < 0) {
//     console.log(`0 ta`);
//   }

//   if (D == 0) {
//     console.log(`1ta`);
//   }
// }
// numberOfRoots(1, -6, 9);

//

// Func11.
//  Doiraning yuzini hisoblovchi areaCircle(R) nomli funksiya hosil qiling. Doiraning yuzi S = π*R^2 orqali hisoblanadi. QY

// function areaCircle(R) {
// let pi = Math.PI;
// let S = p * R * R;

//   console.log(S.toFixed(2));
// }
// areaCircle(6);

//
// Func12.
//  A va B sonlari orasidagi sonlar yig'indisini hisoblovchi sumRange(A, B) nomli funksiya hosil qiling. Agar A > B bo'lsa, funksiya 0 qiymat qaytaradi. QY
// sumRange(8, 10) => 27

// function sumRange(A, B) {
//   if (A > B) {
//     console.log(0);
//   }
//   let counter = 0;
//   for (let i = A; i <= B; i++) {
//     counter += i;
//   }
//   console.log(counter);
// }
// sumRange(3, 6);

//

// Func13.
//  Arifmetik amallarni bajaruvchi calc(A, B, S) funksiyasini hosil qiling. A va B haqiqiy sonlar. S o'zgaruchisi orqali bajariladigan arifmetik amal aniqlanadi. “-” – ayirish, “*” – ko'paytirish, “/” - bo'lish, “+” - qo'shish va boshqa belgilar uchun 0 qaytarsin. QY
// calc(10, 15, “*”) => 150
// calc(7, 8, “+”) => 15

// function calc(A, B, S) {
//   let difference = A - B;
//   let increase = A * B;
//   let toAdd = A + B;
//   let divide = A / B;
//   switch (S) {
//     case "+":
//       console.log(toAdd);
//       break;
//     case "-":
//       console.log(difference);
//       break;
//     case "*":
//       console.log(increase);
//       break;
//     case "/":
//       console.log(divide);
//       break;
//   }
// }

// calc(15, 10, "*");

//

// Func14.
//  Butun sonning juft - toqligini aniqlovchi isEven(K) funksiyasini hosil qiling. Funksiya K juft son bo'lsa - true, aks xolda false qiymat qaytarsin. QY
// isEven(10) => true

// function isEven(K) {
//   if (K % 2 == 0) {
//     console.log("true");
//   } else console.log("false");
// }
// isEven(10);

//

// Func15.
//  Kiritilgan 3 ta a, b, c sonlarning eng kichigini, o’rtachasini va eng kattasini chiqaruvchi sortABC(a, b, c) nomli dastur tuzing. QYM
// sortABC(10, 5, 8) => 5, 8, 10

// function sortABC(A, B, C) {
//   min = Math.min(A, B, C);
//   max = Math.max(A, B, C);

//   if (min !== A && max !== A) {
//     console.log(min, A, max);
//   } else if (min !== B && max !== B) {
//     console.log(min, B, max);
//   } else console.log(min, C, max);
// }

// sortABC(10, 5, 8);
