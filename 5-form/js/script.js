function validasi() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var jam = document.getElementById("jam").value;
  var tujuan = document.getElementById("tujuan").value;
  var jmlTiket = document.getElementById("jmlTiket").value;
  if (
    nama != "" &&
    email != "" &&
    jam != "" &&
    tujuan != "" &&
    jmlTiket != ""
  ) {
    alert("Anda Berhasil Daftar");
  } else {
    alert("Data Tidak Boleh Kosong");
  }
}
