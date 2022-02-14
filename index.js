function pullDown() {

  const PullDownButton = document.getElementById("lists");
  const PullDownParents = document.getElementById("pull-down");
  const PullDownChild = document.querySelectorAll(".pull-down-list");
  const CurrentList = document.getElementById("current-list");

  PullDownButton.addEventListener("mouseover", function(){
    this.setAttribute("style", "background-color: red;");
  });

  PullDownButton.addEventListener("mouseout", function() {
    this.removeAttribute("style", "background-color: red;");
  });

  PullDownButton.addEventListener("click", function(){
    if (PullDownParents.getAttribute("style") == "display: block;"){
      PullDownParents.removeAttribute("style", "display: block;");
    } else {
      PullDownParents.setAttribute("style", "display: block;");
    }
  });

  PullDownChild.forEach(function(list){
    list.addEventListener("click", function(){
    const value = list.innerHTML;
    CurrentList.innerHTML = value;
    });
  });
};

window.addEventListener("load", pullDown);