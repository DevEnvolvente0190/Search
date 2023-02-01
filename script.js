const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
const clear = document.querySelector('.delete');
const input = document.querySelector("#inputSearch");

icon.onclick = function(){
  search.classList.toggle('ativo');
}

clear.onclick = function(){
  search.classList.remove('ativo');
  input.value = '';
}
