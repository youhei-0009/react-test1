import './style.css'

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li生成
  const li = document.createElement("li");
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  // liの子要素
  div.appendChild(p);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);

  console.log(li);

}

document.getElementById("add-button").addEventListener("click", onClickAdd);