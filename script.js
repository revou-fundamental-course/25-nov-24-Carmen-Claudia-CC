function kalkulasiBMI() {
    // definisikan 3 variabel (berat, tinggi dan BMI) dengan var
    var berat = document.getElementById("berat").value;
    var tinggi = document.getElementById("tinggi").value;
    // buat alert untuk isi berat dan tinggi
    if (berat == ''|| tinggi =='') {
        alert("Mohon isi tinggi dan berat badan.")
    } else if (berat <= '0'|| tinggi <='0') {
        alert("Mohon isi tinggi dan berat badan yang valid.");
    } else if (berat > '0'|| tinggi >'0') {
        var BMI = (parseInt(berat) / (parseInt(tinggi))**2) * 10000;
    }
    // wadah buat diisi hasil disebut dulu di dalam tanda petik dalam document.getElementByID
    var resultDiv = document.getElementById("output");
    // agar dapat scroll ke hasil perhitungan BMI (tapi kok masih gabisa gerak sampai ke paling bawah...)
    output.scrollIntoView({behavior: "smooth", block: "start"});
    // rentang BMI, penjelasannya dan penangan rekomendasinya menggunakan if
    var kategori = ""
    var penjelasan = ""
    var saran = ""
    if (BMI < 18.5) {
        kategori = "Anda Kekurangan Berat Badan<br />(BMI kurang dari 18.5)"
        penjelasan = "Dalam arti, Anda disarankan<br />untuk mempertingkat asupan gizi Anda."
        saran = "<b>Kami Rekomendasi:</b><br />Menambah asupan protein sehat<br />dan senam untuk<br>membangun otot";
    } else if (BMI < 25) {
        kategori = "Anda Berberat Badan Normal<br />(BMI sama dengan<br>18.5 hingga 24.9)";
        penjelasan = "Pertahankanlah<br />berat badan sehat Anda<br />agar Anda menghindari<br />gangguan jantung dan kanker<br />pada usia lanjut."
        saran = "<b>Kami Rekomendasi:</b><br />Jalan cepat 150 menit per minggu<br />dan senam untuk<br />membangun otot";
    } else if (BMI < 30) {
        kategori = "Anda Kelebihan Berat Badan<br />(BMI sama dengan<br>25 hingga 29.9)";
        penjelasan = "Dalam arti,<br />Anda belum terhitung obesitas,<br />namun disarankan mempersehat diri.";
        saran = "<b>Kami Rekomendasi</b>:<br />Jalan cepat 150 menit per minggu";
    } else {
        kategori = "Anda Obesitas<br />(BMI sama dengan<br>atau lebih dari 30)";
        penjelasan = "Obesitas mendatangkan resiko kesehatan<br />seperti diabetes dan serangan jantung.";
        saran = "<b>Kami Rekomendasi</b>:<br />Jalan cepat 150 menit per minggu";
    }
    resultDiv.innerHTML = "<b style='font-size:2em;'>" + BMI.toFixed(1) + "</b><br />" + "<br />" + kategori + "<br />" + "<br />" + penjelasan + "<br />" + "<br />" + saran;
    }
    