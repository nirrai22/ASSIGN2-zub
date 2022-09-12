const addButton = document.querySelector(".add");

const input = document.querySelector(".details");

function removeInput() {
  this.parentElement.remove();
}

function addInput() {
  const desig = document.createElement("input");
  desig.type = "text";
  desig.placeholder = "Designation";

  const name = document.createElement("input");
  name.type = "text";
  name.placeholder = "Employee Name";

  const emId = document.createElement("input");
  emId.type = "number";
  emId.placeholder = "Employee Id";

  const prevCompany = document.createElement("input");
  prevCompany.type = "text";
  prevCompany.placeholder = "Previous Company";

  const deleteOne = document.createElement("a");
  deleteOne.className = "delete";
  deleteOne.innerHTML = "&times";
  deleteOne.addEventListener("click", removeInput);

  const flex = document.createElement("div");
  flex.className = "flex";

  input.appendChild(flex);
  flex.appendChild(desig);
  flex.appendChild(name);
  flex.appendChild(emId);
  flex.appendChild(prevCompany);
  flex.appendChild(deleteOne);
}

addButton.addEventListener("click", addInput);
