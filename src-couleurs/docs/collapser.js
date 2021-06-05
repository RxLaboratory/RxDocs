var coll = document.getElementsByClassName("collapse-button");

function collapse(element)
{
  element.classList.toggle("active-collapse-button");
  var content = element.nextElementSibling;
  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  } 
}

for (var i = 0, n = coll.length; i < n; i++) {
  coll[i].addEventListener("click", function() {
    // Collapse all
    var opened = document.getElementsByClassName("active-collapse-button");
    for (var j = 0, no = opened.length; j < no; j++) {
      if (this !== opened[j]) collapse(opened[j])
    }
    // Show current
    collapse(this);
  });
} 