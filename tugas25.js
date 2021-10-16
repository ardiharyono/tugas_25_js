function panggilAku() {
  var angka = [2,39,76,50,9,7,41,2,24,1,16];
  console.log("Sebelumnya : " + angka);

  function panggil1() {
    angka = angka.sort();
    return angka
    console.log(angka);
  };
  console.log("Ascending : " + panggil1());

  function panggil2() {
    angka = angka.reverse();
    return angka
    console.log(angka);
  };
  console.log("Descending : " + panggil2());

  function panggil3() {
    angka2 = angka.filter(function(number) {
      return number > 10;
    });
    console.log("Filter > 10 : " + angka2);
  };
  panggil3()
};

panggilAku()
