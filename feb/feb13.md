# Euclid algorithm

The Euclid algorithm is a way to find the Greatest Common Divisor of Two integers.

- Given two integers `a` and `b`, where `a>b`, we repeatedly apply the division algorithm:

`a = b * q + r`, where `q` is the quotient and `r` is the remainder.

- We replace `a` and `b` with `r`, and repeat the process until `r` becomes `0`.

- The GCD of `a` and `b` is ther last non-zero remainder obtained during this process.

In Summary, the Euclid algorithm iteratively reduces the problem of finding the GCD of two integers to the problem of finding the GCD of smaller integers until one of them becomes 0.

Here's a simple example of how the Euclid algorithm works to find the GCD of 48 and 18:

1. 48 = 18 * 2 + 12
2. 18 = 12 * 1 + 6
3. 12 = 6 * 2 + 0

Since the remainder becomes 0, the GCD of 48 and 18 is the last non-zero remiander, which is 6.

