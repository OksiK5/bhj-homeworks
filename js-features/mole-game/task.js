const holes = document.querySelectorAll(".hole");
const hits = document.getElementById("dead");
const misses = document.getElementById("lost");

holes.forEach(hole => {
  hole.onclick = function () {
    hole.className.includes("hole_has-mole") ? hits.textContent++ : misses.textContent++;
    if (parseInt(hits.textContent) === 10 || parseInt(misses.textContent) === 5) {
      alert(parseInt(hits.textContent) === 10 ? "Вы выиграли!" : "Вы проиграли!");
      hits.textContent = 0;
      misses.textContent = 0;
     } 
   }
 });