let sombra = document.getElementById('hd');
let i = 0;
	while(i<1000){
        i++;
        console.log(i)			
    if(i == 300){
        sombra.setAttribute('style', 'box-shadow: red 5px 5px 5px 5px');
        // alert('laranja');
    }else if(i == 600){
        sombra.setAttribute('style', 'box-shadow: orange 5px 5px 5px 5px');
        // alert('amarelo');
    }else if(i == 900){
        sombra.setAttribute('style', 'box-shadow: yellow 5px 5px 5px 5px');
        //teste = 0;
    }
}
    