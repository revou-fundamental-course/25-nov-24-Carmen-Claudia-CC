function kalkulasiBMI() {
    var berat = document.getElementById("berat").value;
    var tinggi = document.getElementById("tinggi").value;
    var BMI = (parseInt(berat) / (parseInt(tinggi))**2) * 10000;
    // wadah buat diisi hasil disebut dulu
    var resultDiv = document.getElementById("output"); 
    resultDiv.innerText = BMI.toFixed(1);
    }