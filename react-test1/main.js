import './style.css'

const onClickAdd = () => {
  //初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // 未完了リスト追加
  createIncompleteTodo(inputText);

}

//未完了TODO作成関数
const createIncompleteTodo = (todo) => {
  // li生成
  const li = document.createElement("li");
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  // button (完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", ()=> {
    //完了後に完了TODOに移動
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // todo内容取得して未完了リストに追加
      const todoText = backButton.previousElementSibling.innerText
      createIncompleteTodo(todoText);
      // li 削除
      backButton.closest("li").remove();
    });
    moveTarget.firstElementChild.appendChild(backButton);
    document.getElementById("complete-list").appendChild(moveTarget);
  });

  // button (削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", ()=> {
    //削除処理
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
    console.log(deleteTarget);
  });

  // liの子要素
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);