function tambah() {
    var a = parseFloat(document.getElementById("input1").value);
    var b = parseFloat(document.getElementById("input2").value);
    if (isNaN(a) || isNaN(b)) {
      alert("Masukkan angka saja!");
    } else {
      var c = a + b;
      document.getElementById("hasil").value = c;
    }
  }
  
  function kurang() {
    var a = parseFloat(document.getElementById("input1").value);
    var b = parseFloat(document.getElementById("input2").value);
    if (isNaN(a) || isNaN(b)) {
      alert("Masukkan angka saja!");
    } else {
      var c = a - b;
      document.getElementById("hasil").value = c;
    }
  }
  
  function kali() {
    var a = parseFloat(document.getElementById("input1").value);
    var b = parseFloat(document.getElementById("input2").value);
    if (isNaN(a) || isNaN(b)) {
      alert("Masukkan angka saja!");
    } else {
      var c = a * b;
      document.getElementById("hasil").value = c;
    }
  }
  
  function bagi() {
    var a = parseFloat(document.getElementById("input1").value);
    var b = parseFloat(document.getElementById("input2").value);
    if (isNaN(a) || isNaN(b)) {
      alert("Masukkan angka saja!");
    } else {
      var c = a / b;
      document.getElementById("hasil").value = c;
    }
  }
  
  function pangkat() {
    var a = parseFloat(document.getElementById("input1").value);
    var b = parseFloat(document.getElementById("input2").value);
    if (isNaN(a) || isNaN(b)) {
      alert("Masukkan angka saja!");
    } else {
      var c = Math.pow(a, b);
      document.getElementById("hasil").value = c;
    }
  }