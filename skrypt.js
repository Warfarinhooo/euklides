function euklidesOblicz(){
    let liczbaA=parseInt(document.getElementById("liczbA").value);
    let liczbaB=parseInt(document.getElementById("liczbB").value);
    while(liczbaA!==liczbaB){
        if(liczbaA>liczbaB){
            liczbaA=liczbaA-liczbaB;
        }else{
            liczbaB=liczbaB-liczbaA;
        }
    }
        document.getElementById("euklidesWynik").value=liczbaA;
    }
