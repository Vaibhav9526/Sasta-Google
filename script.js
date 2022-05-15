let Query = document.getElementById("Input1");
function Search() {
  if (Query.value == "") {
    alert("Input Field Must Not Be Empty");
  } else {
    let url = "https://www.google.com/search?q=" + Query.value;
    window.open(url);
  }
}
