const kundvagn = document.querySelector(".Kundvagn");
const bild = document.querySelector("img");


let array = [];
const nyckel = "varor"

function KundvagnAdd(varu_namn,varu_pris, bild){
    let vara = {
        bild:bild ,
        namn:varu_namn,
        pris:varu_pris
    }

    array.push(vara);

    let json = JSON.stringify(array);
    window.localStorage.setItem(nyckel, json);
    DrawStuff();
}

function DrawStuff(){
    let totalPris = 0;
    kundvagn.innerHTML="";

    array.forEach(item => {
        //console.log(item)
        totalPris = totalPris + item.pris;
        //console.log(totalPris)
    });
    
    let h4 = document.createElement("h4");
    h4.textContent = "Total Pris: " + totalPris;
    kundvagn.appendChild(h4);  
    
    for (let i = 0; i < array.length; i++) {
        let article = document.createElement("article");
        let bild = document.createElement("img");
        console.log(array[i].bild);
        bild.setAttribute("src", array[i].bild);
        let h3 = document.createElement("h3");
        h3.textContent = array[i].namn;
        let p = document.createElement("p");
        p.textContent = array[i].pris+" kr  ";

        
        article.appendChild(bild);
        article.appendChild(h3);
        article.appendChild(p);
        kundvagn.appendChild(article);
        
    }

   
   
    

}