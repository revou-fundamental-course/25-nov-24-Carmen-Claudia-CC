function kalkulasiBMI() {
    var berat = document.getElementById("berat").value;
    var tinggi = document.getElementById("tinggi").value;
    var BMI = (parseInt(berat) / (parseInt(tinggi))**2) * 10000;
    var resultDiv = document.getElementById("output"); <!-----wadah mau taru hasil disebut dulu>
    resultDiv.innerText = BMI.toFixed(2);
    }