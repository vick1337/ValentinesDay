const gifs = [
    "gif1.gif",
    "gif2.gif",
    "gif3.gif",
    "gif4.gif"
];
const texts = [
    "Eu când mergem spre Milano în timp ce aud cd-urile tale",
    "Ce văd eu când mă uit la tine",
    "Eu când ieși cu mine",
    "Eu când nu ieși cu mine"
];
let c=-1;
document.getElementById("inima-buton").onclick = function() {
    if (c < 6) 
    {
        c++;
        if(c==0)
                document.getElementById("Ciao").textContent =`Ciao, Alessia!`;
        let gifElement = document.getElementById(`gif${c}`);
        if(c==1 || c==2)
        {
            gifElement.innerHTML = `<img src="${gifs[c - 1]}" alt="GIF ${c}">
                                <p>${texts[c - 1]}</p> 
                                `;
            document.getElementById("Ciao").textContent =`Mai apasă`;
            
        }
        
        else
            if(c==3 || c==4)
            {
                gifElement.innerHTML = `<p>${texts[c - 1]}</p> 
                                <img src="${gifs[c - 1]}" alt="GIF ${c}">
                                `;
                document.getElementById("Ciao").textContent =`Încă puțin...`;
            }
            else
                if (c == 5) {
                    document.getElementById("Ciao").textContent =`Deeci, vrei să ieși cu mine?`;
                    document.getElementById("Ciao1").textContent =`Scanează întâi codul`;
                    document.querySelector(".qr-container").style.display = "block";
                    }
       let textElement = document.getElementById("Ciao");
        if (c >= 1 && c <= 4) {
            let currentSize = parseFloat(window.getComputedStyle(textElement).fontSize);
            textElement.style.fontSize = (currentSize + 4) + "px"; // Crește fontul cu 2px
        }                
                gifElement.style.display = "block";
    }
};
