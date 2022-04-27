const Int = document.getElementById('download');
const Lnk = document.getElementById('link');
const icrk = document.getElementById('icrk');
const thema = document.getElementById('RnkDgs');
let Url;

Int.addEventListener('change', function () {
  if (Url) {

    URL.revokeObjectURL(Url);  
  }

  const file = this.files[0];
  Url = URL.createObjectURL(file);

  Lnk.download = file.name; 
  // Lnk.innerHTML = file.name;
  Lnk.href = Url;
  icrk.innerHTML = Url

});




function reset(){
  const file = document.querySelector('#download');
  file.value = '';
  icrk.innerHTML = '';
  
};