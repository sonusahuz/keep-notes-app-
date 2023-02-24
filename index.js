const addnotebtn = document.getElementById("addnotebtn");
const applend = document.getElementById("applend");
const title = document.getElementById("title");

const addNoteButton = () => {
  if (title.value.trim() == "") {
    alert("Please Enter Some Note!");
    return;
  } else {
    const mynote = document.getElementById("mynote");

    const newItem = document.createElement("div");
    newItem.classList.add("active");
    newItem.innerHTML = `<div class="mynote" id="mynote">
        <p>${title.value}</p>
          <ion-icon name="create-outline"></ion-icon>
          <ion-icon name="trash-outline" id="deletebtn"></ion-icon>
      </div>`;
    applend.appendChild(newItem);
    title.value = "";
  }
};

addnotebtn.addEventListener("click", addNoteButton);
