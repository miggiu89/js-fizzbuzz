//scrivi un programma che stampi i numeri da 1 a 100
//i multipli di 3 dovranno essere Fizz
//i multipli di 5 saranno buzz
//i multipli di 3 e 5 saranno fizzbuzz

for (var i = 1; i <= 100; i++){ //qui stampo tutti i numeri da 1 a 100
    if((i % 3 == 0) && (i % 5 == 0)){ //condizione che si verifica quando i può essere diviso da entrambi
        console.log('FizzBuzz');
    }
    else if(i % 3 == 0){ //condizione per i multipli di 3
        console.log('Fizz');
    }
    else if(i % 5 == 0){ //condizione per i multipli di 5
        console.log('Buzz');
    }
    else{ //se non sono divisibili ne per 3 ne per 5
        console.log(i);
    }
}

//non so se è semanticamente sbagliato ma cosi funziona