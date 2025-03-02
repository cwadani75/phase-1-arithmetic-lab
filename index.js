// Multiply: should equal 62
let num1 = 31;
let num2 = 2;
let multiply = num1 * num2; // 31 * 2 = 62

// Random: should generate a random integer greater than 0
let random = Math.floor(Math.random() * 100) + 1; // Ensures it's > 0

// Modulus: should return a remainder of 4
let num3 = 16;
let num4 = 6;
let mod = num3 % num4; // 16 % 6 = 4

// Max: should return the highest number (20)
let max = Math.max(10, 5, 20, 8, 15);

module.exports = { multiply, random, mod, max };
