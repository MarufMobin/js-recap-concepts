/*
 const bank = owner =>{
    
    balance = 0;
    return amount =>{
        // balance = balance + amount;
        return balance += amount;
    }
}

const alfaBank = bank('Alfa')
console.log(alfaBank(5400)) */

const bank = owner =>{

     balance = 0;
    return {
        deposite:amount =>{
            // balance = balance + amount;
           return balance += amount;
        },
        withdraw:amount =>{
            // balance = balance - amount;
           return balance -= amount;
        }
    }
}

const alfaBank = bank();

console.log(alfaBank.deposite(500))
console.log(alfaBank.deposite(1000))
console.log(alfaBank.deposite(1500))
console.log(alfaBank.withdraw(500))
console.log(alfaBank.withdraw(500))

