# Javascript-AKS-Primality-Test
An Implementation of the AKS Primality Test algorithm in Javascript 

### Agrawal–Kayal–Saxena Primality Test
The AKS primality test is used to check if a given number is prime or not. 

For any prime number p, all coefficients of the below expression are divisible by p. If any of the coefficients are not divisible by p then it is not a prime number.

<center><a href="https://www.codecogs.com/eqnedit.php?latex=\large&space;(x-1)^{p}&space;-&space;(x^{p}&space;-1)" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\large&space;(x-1)^{p}&space;-&space;(x^{p}&space;-1)" title="\large (x-1)^{p} - (x^{p} -1)" /></a></center>

From binomial theorem, 

<center><a href="https://www.codecogs.com/eqnedit.php?latex=\large&space;(x&plus;y)^{n}&space;=&space;\sum_{k=0}^{n}{\binom{n}{k}{x^{n-k}}{y^{k}}}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\large&space;(x&plus;y)^{n}&space;=&space;\sum_{k=0}^{n}{\binom{n}{k}{x^{n-k}}{y^{k}}}" title="\large (x+y)^{n} = \sum_{k=0}^{n}{\binom{n}{k}{x^{n-k}}{y^{k}}}" /></a></center>
<br>
<center><a href="https://www.codecogs.com/eqnedit.php?latex=\large&space;\implies&space;(x-1)^{p}&space;=&space;\sum_{k=0}^{n}{\binom{p}{k}{x^{p-k}}{(-1)^{k}}}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\large&space;\implies&space;(x-1)^{p}&space;=&space;\sum_{k=0}^{n}{\binom{p}{k}{x^{p-k}}{(-1)^{k}}}" title="\large \implies (x-1)^{p} = \sum_{k=0}^{n}{\binom{p}{k}{x^{p-k}}{(-1)^{k}}}" /></a></center>

Since we are only concerned with the absolute coefficient values

<center><a href="https://www.codecogs.com/eqnedit.php?latex=\large&space;Coefficients[(x-1)^{p}]&space;=&space;[\binom{p}{0},&space;\binom{p}{1},&space;\binom{p}{2},.....,&space;\binom{p}{p}]" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\large&space;Coefficients[(x-1)^{p}]&space;=&space;[\binom{p}{0},&space;\binom{p}{1},&space;\binom{p}{2},.....,&space;\binom{p}{p}]" title="\large Coefficients[(x-1)^{p}] = [\binom{p}{0}, \binom{p}{1}, \binom{p}{2},....., \binom{p}{p}]" /></a></center>

Also, since we are subtracting <a href="https://www.codecogs.com/eqnedit.php?latex=(x-1)^{p}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?(x-1)^{p}" title="(x-1)^{p}" /></a>  we can thus discard the first and last coefficients.

### References
 1. PRIMES is in P Manindra Agrawal, Neeraj Kayal, Nitin Saxena [Paper](https://www.cse.iitk.ac.in/users/manindra/algebra/primality_v6.pdf)
 2. Fool-Proof Test for Primes - Numberphile [YouTube](https://www.youtube.com/watch?v=HvMSRWTE2mI)

