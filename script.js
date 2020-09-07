var selectedRow = null;
function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) {
      insertNewRecord(formData);
    } else updateRecord(formData);

    resetForm();
  }
}
function readFormData() {
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["stdId"] = document.getElementById("stdId").value;
  formData["tGrade"] = document.getElementById("tGrade").value;
  formData["branch"] = document.getElementById("branch").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("studentList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.stdId;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.tGrade;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.branch;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a><a onClick="onDelete(this)">Delete</a>`;
}
function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("stdId").value = "";
  document.getElementById("tGrade").value = "";
  document.getElementById("branch").value = "";
}
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("stdId").value = selectedRow.cells[1].innerHTML;
  document.getElementById("tGrade").value = selectedRow.cells[2].innerHTML;
  document.getElementById("branch").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.stdId;
  selectedRow.cells[2].innerHTML = formData.tGrade;
  selectedRow.cells[3].innerHTML = formData.branch;
}
function onDelete(td) {
  if (confirm("Are You Sure To delete Or Not ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("studentList").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("fullName").value == "") {
    isValid = false;
    document.getElementById("fullNameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      document
        .getElementById("fullNameValidationError")
        .classList.contains("hide")
    ) {
      document.getElementById("fullNameValidationError").classList.add("hide");
    }
  }
  return isValid;
}
