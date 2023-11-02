
function reset(){
    document.getElementById("panjang").value = "0"
    document.getElementById("lebar").value = "0"
    document.getElementById("luas").value = "0"
    document.getElementById("keliling").value = "0"
}

function reset2(){
    document.getElementById("panjangalas").value = "0"
    document.getElementById("tinggi").value = "0"
    document.getElementById("luass").value = "0"
    
}

function reset3(){
    document.getElementById("s1").value = "0"
    document.getElementById("s2").value = "0"
    document.getElementById("s3").value = "0"
    document.getElementById("kelilings").value = "0"
}

function reset4(){
    document.getElementById("jar").value = "0"
    document.getElementById("luasL").value = "0"
    document.getElementById("kelilingL").value = "0"
}



function persegi_panjang() {
    var panjang = Number (document.getElementById("panjang").value)
    var lebar = Number (document.getElementById("lebar").value)
    var luas = Number (panjang * lebar)
    var keliling = Number (2* (panjang + lebar))
    document.getElementById("luas").innerHTML = luas
    document.getElementById("keliling").innerHTML = keliling
}

function segitiga() {
    var panjangalas = Number (document.getElementById("panjangalas").value)
    var tinggi      = Number (document.getElementById("tinggi").value)
    var luass       = Number (0.5 * panjangalas * tinggi)
    document.getElementById("luass").innerHTML = luass
    
}

function segitiga2 (){
    var s1 = Number (document.getElementById("s1").value)
    var s2 = Number (document.getElementById("s2").value)
    var s3 = Number (document.getElementById("s3").value)
    var kelilings = Number (s1 + s2 + s3)
    document.getElementById("kelilings").innerHTML = kelilings

}

function lingkaran(){
    var jar   = Number (document.getElementById("jar").value)
    var phi   = Number( 3.14 )
    var luasL = Number(phi * jar * jar)
    var kelilingL = Number (2 * phi * jar)
    document.getElementById("luasL").innerHTML = luasL
    document.getElementById("kelilingL").innerHTML = kelilingL


}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

