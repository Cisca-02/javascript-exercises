const palindromes = function (text) {


    //frase esempio: A nut for a jar of tuna.
    //Step 1: porre la stringa in lower case -> a nut for a jar of tuna.
    //Step 2: eliminare gli spazi -> ["a", "nut", "for", "a", "jar", "of", "tuna."]
    //Step 3: eliminare la punteggiatura -> ["a", "nut", "for", "a", "jar", "of", "tuna"]
    //Step 4: splittare in caratteri -> [["a"]["n","u","t"]["f","o","r"]]
    //Step 5: invertire l'ordine dell'array e confrontarlo con quello di sopra -> 


    //SOLUZIONE
    //Step 1: prendere una stringa contenente tutti i caratteri validi
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    //Step 2: ridurre la stringa a lower-case, splittare i caratteri singolarmente, filtrarli con la stringa di char validi
    //riunificare i caratteri filtreti
    const filtered = text
                    .toLowerCase()
                    .split("")
                    .filter(char => alphanumerical.includes(char))
                    .join("");

    //Step 3: splittare i caratteri, invertire l'ordine, unificarli
    const reversed = filtered
                            .split("")
                            .reverse()
                            .join("");

    //Step 4: confrontare 
    return reversed == filtered ? true : false;
};









// Do not edit below this line
module.exports = palindromes;
