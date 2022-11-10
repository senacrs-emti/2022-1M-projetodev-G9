let bagulhinho = document.getElementById("p1");
let bagulhete = false;
function bagulho1(){
    if(bagulhete === false){
        bagulhinho.innerHTML = ('A Tabela Periódica é um modelo que agrupa todos os elementos químicos conhecidos e suas propriedades. Eles estão organizados em ordem crescente correspondente aos números atômicos (número de prótons)');
        bagulhete = true;
    }else{
        bagulhinho.innerHTML = ('Saiba mais sobre');
        bagulhete = false;
    }
}