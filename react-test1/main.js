import './style.css'

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li生成
  const li = document.createElement("li");
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  console.log("div");

}

document.getElementById("add-button").addEventListener("click", onClickAdd);