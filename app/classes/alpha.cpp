#include <iostream>
#include <cmath>      /* for sqrt */

/* is n prime? Return true if so, false if not */
bool isPrime(int n) {
    if (n < 2)
        return false;
    else if (n == 2)
        return true;
    else if (n % 2 == 0)
        return false;

    int upperLimit = (int) std::sqrt(n);
    int i = 3;
    while (i <= upperLimit) {
        if (n % i == 0)
            return false;
        i += 2;
    }
    return true;
}

/* count the number of primes up to limit */
int main(int lim) {
    int noPrimes = 0, limit = lim;
    for (int n = 0; n <= limit; n++) {
        if (isPrime(n))
            noPrimes++;
    }

    return noPrimes;
}