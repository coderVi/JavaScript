const shoppingList = document.querySelector('.shopping-list');
loadItems();
function loadItems() {
    const items = [
        {
            id:1,
            name: "Yumurta",
            completed: false
        },
        {
            id:2,
            name: "Balık",
            completed: true
        },
        {
            id:3,
            name: "Süt",
            completed: false
        }
    ]
    shoppingList.innerHTML = '';
    for (const item of items) {
        const li = createList(item);
        shoppingList.appendChild(li);
    }
}

function createList(item) {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.className = "form-check-input";
    input.checked = item.completed;

    const div = document.createElement("div");
    div.textContent = item.name;
    div.classList.add("item-name");

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fs-4 bi bi-x text-danger delete-icon";

    const li = document.createElement("li");
    li.className = "border rounded p-3 mb-1 d-flex align-items-center";
    li.appendChild(input);
    li.appendChild(div);
    li.appendChild(deleteIcon);
    return li;
}