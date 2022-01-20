let todoWrapper = document.querySelector(".todo-items-wrapper");
let itemsWrapper = document.querySelector(".todo-items");
const itemsLeft = document.querySelector(".item-left");

function addItem(event) {
  event.preventDefault();
  let text = document.getElementById("todo-input");
  db.collection("todo-items").add({
    text: text.value,
    status: "active",
  });
  text.value = "";
  countCompleted();
}

function getItems() {
  db.collection("todo-items").onSnapshot((snapshot) => {
    console.log(snapshot);
    let items = [];
    snapshot.docs.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    generateItems(items);
  });
  countCompleted()

}

function generateItems(items) {
  let itemsHTML = "";
  items.forEach((item) => {
    itemsHTML += `
                <div class="todo-item">
                    
                    <div class="check">
                        <div data-id="${item.id}" class="check-mark ${
      item.status == "completed" ? "checked" : ""
    }">
                            <img src="./assets/icon-check.svg" alt="">
                        </div>
                    </div>
                    <div class="todo-text ${
                      item.status == "completed" ? "checked" : ""
                    }">
                        ${item.text}
                    </div>
                    <div class="binmarkwraper">           <div class="binmarkcont ${
                      item.status == "completed" ? "checked" : "nothing"
                    }"  data-id="${item.id}">
  
                      <span> <i class ="fas fa-trash trash-icon"></i> </span>
  
                      </div></div>
                </div>
                
                `;
    updateItemsCount();
  });
  document.querySelector(".todo-items").innerHTML = itemsHTML;
  document.querySelector(".item-left").innerHTML =
    items.length + " " + "items(s) left";
  createEventListeners();
}

function createEventListeners() {
  let todoCheckMarks = document.querySelectorAll(".todo-item .check-mark");
  todoCheckMarks.forEach((checkMark) => {
    checkMark.addEventListener("click", function () {
      markCompleted(checkMark.dataset.id);
    });
  });
}

function markCompleted(id) {
  // coming from a database
  let item = db.collection("todo-items").doc(id);
  item.get().then(function (doc) {
    if (doc.exists) {
      let status = doc.data().status;
      if (status == "active") {
        item.update({
          status: "completed",
        });
      } else if (status == "completed") {
        item.update({
          status: "active",
        });
      }
    }
  });
}

getItems();

function fun(e) {
  var val = e.value;
  document.body.setAttribute("style", "filter: brightness(" + val + "%);");
}

function updateItemsCount(number) {
  itemsLeft.innerText = +(+itemsLeft.innerText) + number;
}

function allDeleter() {
  var item = db.collection("todo-items");

  item.get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      doc.ref.delete();
    });

    
    countCompleted()
  });
}

// document.querySelector(".clear-items").addEventListener("click", async (e) => {
// e.preventDefault();

// db.collection("todo-items").onSnapshot((snapshot) =>
//     snapshot.docs.forEach(async (doc) => {
//     const record = db.collection("todo-items").doc();
//     await record.delete();
//     })
// );
// itemsWrapper.innerHTML = "";
// });

function createEventListeners() {
  let todoCheckMarks = document.querySelectorAll(".todo-item .check-mark");

  let bins = document.querySelectorAll(".binmarkcont");

  todoCheckMarks.forEach((checkMark) => {
    checkMark.addEventListener("click", function () {
      markCompleted(checkMark.dataset.id);
    });
  });

  bins.forEach((bin) => {
    bin.addEventListener("click", function () {
      deleteOne(bin.dataset.id);


      countCompleted();
    });
  });
}

function deleteOne(id) {
  let item = db.collection("todo-items").doc(id);

  item.delete();
}

function countCompleted() {
  db.collection("todo-items")
    .where("status", "==", "completed")

    .get()

    .then((snap) => {
      size = snap.size;

      document.getElementById("counter").innerHTML = size;
      console.log("size" + size)
    });
}
getItems()
countCompleted()
