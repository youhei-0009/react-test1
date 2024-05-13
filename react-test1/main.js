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

  // button (完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // button (削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // liの子要素
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);

  console.log(completeButton);

}

document.getElementById("add-button").addEventListener("click", onClickAdd);