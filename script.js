function addTodo() {
    const input = document.getElementById("todoInput")
    const text = input.value.trim()

    if ( text === "") return 

     const li = document.createElement("li");
    li.className =
    "flex items-center justify-between bg-gray-50 border rounded-xl px-3 py-2";

     li.innerHTML = `
    <div class="flex items-center gap-2">
      <input type="checkbox" class="w-4 h-4" onclick="toggleDone(this)">
      <span class="text-gray-800">${text}</span>
    </div>
    <button onclick="deleteTodo(this)" class="text-red-500 hover:text-red-700">
      ✕
    </button>
  `;
    document.getElementById("todoList").appendChild(li)
    input.value = ""
}
function deleteTodo(btn) {
    btn.parentElement.remove()
}
function toggleDone(checkbox){
    const text = checkbox.nextElementSibling;
    text.classList.toggle("line-through")
    text.classList.toggle("text-gray-400")
}eak

const dateElement = document.getElementById("todayDate")
const today = new Date()

const options = {
    weekday : "long",
    year : "numeric",
    month : "long",
    day : "numeric"
}
dateElement.textContent = today.toLocaleDateString("id-ID",options)