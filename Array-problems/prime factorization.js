const num = 18;
const isPrime = (n) => {
   for(let i = 2; i <= n/2; i++){
      if(n % i === 0){
         return false;
      }
   };
   return true;
};
const findPrimeFactors = num => {
   const res = num % 2 === 0 ? [2] : [];
   let start = 3;
   while(start <= num){
      if(num % start === 0){
         if(isPrime(start)){
            res.push(start);
         };
      };
      start++;
   };
   return res;
};
console.log(findPrimeFactors(18));