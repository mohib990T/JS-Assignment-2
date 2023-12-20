// Q1. Add two Numbers
// You are provided with two numbers A and B. Your task is to add these two numbers.

// Solution :-

{
  let A = 2;
  let B = 5;
  let AddTwoNumbers = A + B;
  console.log(AddTwoNumbers);
}
// ____________________________________________________________________________________________________________

// Q2. Find if the conditions are obeyed or not? You are given two number first as A and second as B
//      and check if both conditions (A<10 and A>B) are satisfied or not with the help of operators.

// Solution :-

{
  let A = 5;
  let B = 3;
  let Is_Valid = A < 10 && A > B;
  console.log(Is_Valid);
}
// ___________________________________________________________________________________________________________

// Q3.Check the conditions
// You are given two numbers A and B. You need to do the following checks:
// 1. if both are divisible by 10 console true.
// 2. if both are not divisible by 10 console false.
// 3. if one of them only is divisible by 10 console true.
// Use operator to do this.

// Solution :-

{
  let A = 12;
  let B = 20;
  let Check1 = A % 10 == 0 && B % 10 == 0;
  let Check2 = A % 10 != 0 && B % 10 != 0;
  let Check3 = A % 10 == 0 || B % 10 == 0;
  let Check = Check1 || Check2 || Check3;
  console.log(Check1);
  console.log(Check2);
  console.log(Check3);
  console.log(Check);
}
// ___________________________________________________________________________________________________________

// Q4.Find the first digit of a 4 digit number
// You are provided a four digit number N only. Your task is to print out the first digit of that number.

// Solution :-

{
  let N = 4567;
  let First_Digit = Math.floor(N / 1000);
  console.log(First_Digit);
}

// _____________________________________________________________________________________________________________

// Q5.Find the last digit of a 4 digit number
// You are provided a four digit number N only. Your task is to print out the last digit of that number.

// Solution :-

{
  let N = 4567;
  let Last_Digit = N % 10;
  console.log(Last_Digit);
}
// ________________________________________________________________________________________________________________

// Q6.Find the remainder
// You are provided with two numbers A and B where A as divisor and B as dividend.Your task is find the remainder.

// Solution :-

{
  let A = 2;
  let B = 9;
  let Find_the_remainder = B % A;
  console.log(Find_the_remainder);
}
// ________________________________________________________________________________________________________________

// Q7.Multiply two Numbers
// You are provided with two numbers A and B.
// Your task is to multiply these two numbers.
// Note: You have to complete Multiply_two_number function.
// No need to take any input.

// Solution :-

{
  let A = 2;
  let B = 5;
  let Multiply_two_number = A * B;
  console.log(Multiply_two_number);
}
// _________________________________________________________________________________________________________________

// Q8. Marks Calculator
// Shyam has got his marks in three subjects as
// A, B, and C (out of 100). Write a program
// to calculate his total marks and his average.
// Note: You have to complete Sum and Average functions.
// No need to take any input.

// Solution :-

{
  let A = 50;
  let B = 20;
  let C = 100;
  let Sum = A + B + C;
  let Average = (A + B + C) / 3;
  console.log(Sum);
  console.log(Average);
}
