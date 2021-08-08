i = 0;
j = 0;
n = 5;
let srednjiRed = "*".repeat(2 * n - 1);
for (i; i < n - 1; i++) {
  console.log(
    " ".repeat(n - i - 1) + "*".repeat(2 * i + 1) + " ".repeat(n - i - 1)
  );
}
console.log(srednjiRed);
for (j; j < n - 1; j++) {
  console.log(
    " ".repeat(j + 1) + "*".repeat((n - j - 1) * 2 - 1) + " ".repeat(j + 1)
  );
}
