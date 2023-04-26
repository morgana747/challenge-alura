
function encrypt() {
    let text = document.getElementById("text").value;
    let result = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById("result").value = result;
    }

    function decrypt() {
        let text = document.getElementById("text").value;
        let result = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        document.getElementById("result").value = result;
    }

    function copy() {
        let result = document.getElementById("result");
        result.select();
        document.execCommand("copy");
        alert("¡Texto copiado!");
    }
