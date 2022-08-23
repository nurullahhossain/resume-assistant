// Get the modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

const handleClick = title => {
  document.getElementById("modalTitle").innerHTML = title;
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
