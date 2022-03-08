


function tab2(mult: number, ref: number, ind: number): void {

    if(ind < ref){

        
        let counter : number = ind;
        
        console.log(`========= TABUADA DE ${mult} ===============\n`);
        
        while(counter <= ref) {
            
            console.log(`${mult} x ${counter} = ${mult*counter}`);
            
            counter++;
        }
        
        console.log("==========================================\n");
        
    } else {

        console.log("Impossível imprimir a tabuada proposta!!");
    }
    
}

/* tab2(5, 10, 11); // tabuada de cinco
tab2(1000, 5, 2); // tabuada de 1000
tab2(4, 3, 0); // tabuada de 4
tab2(6, 8, -3); // tabuada de 6
tab2(15, 4, 2);
tab2(15623214, 1, 10);
*/

function saudacao(hora: number): void {

    if(hora <=12 && hora > 6) {

        console.log(hora.toString() + "h: Bom dia vagabundoooooooooo");

    } else if(hora >12 && hora <= 18) {

        console.log(hora.toString() + "h: Boa tarde fio da putaaaaaaa");

    } else if(hora >18 && hora <=23) {

        console.log(hora.toString() + "h: Boa noite raparigaaaaaa");

    } else {

        console.log(hora.toString() + "h: Já é madrugada desocupadooooooo");

    }

}

function saudacaoCerta(hora: number): string {

    let s: string;

    if(hora <= 6) {

        s = hora.toString() + "h: Já é madrugada desocupadooooooo";

    } else if (hora <=12){

       s = hora.toString() + "h: Bom dia vagabundoooooooooo";

    } else if(hora <= 18) {

        s = hora.toString() + "h: Boa tarde fio da putaaaaaaa";

    } else {

        s = hora.toString() + "h: Boa noite raparigaaaaaa";

    }

    return s;

}


/*let counter = 0;

while (counter <= 23){
    
    saudacao(counter);

    counter++;

}*/

/*for (let counter=0; counter <=23; counter++){

    console.log(saudacaoCerta(counter));

}*/


document.getElementById("tacito").innerText = saudacaoCerta( new Date().getHours());
