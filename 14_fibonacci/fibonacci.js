const fibonacci = function(n) {
    if(n<0){
        return "OOPS";
    }
    else if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    else{
        let pre = 0;
        let succ = 1;
        let tot = 0;

        for(let i=0; i<n-1; i++){
            tot = pre + succ;
            pre = succ;
            succ = tot;
        }
        return tot;
    }
};


//la sequenza di fibonacci è una serie numerica in cui un termine è la somma dei due precedenti
//REGOLA: il primo termine è zero, il secondo termine è 1;
//dal terzo termina in poi, posso esprimerlo come somma dei due precedenti.

//Step 1: trovare la formula
//1 1 2 3 5 8 13





// Do not edit below this line
module.exports = fibonacci;
