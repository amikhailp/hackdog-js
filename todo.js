var todosTxt = document.getElementById('todos');
var dateTxt = document.getElementById('date');
var id = document.getElementById('todoID');

var firebaseRef = firebase.database().ref();


function submitButton() {
	
	firebaseRef.child("todo").child(id.value).set({

		Todo:todosTxt.value,
		Date:dateTxt.value,
		
	})
	
}

function updateButton() {

	firebaseRef.child("todo").child(id.value).set({

		Todo:todosTxt.value,
		Date:dateTxt.value,
		
	})

	readData()

}

function removeButton() {
	
	firebaseRef.child("todo").child(id.value).remove()
	
	readData()

}

function readData() {

	$("#listData").html("");
	var root = firebaseRef.child("todo");
	root.on("child_added", snap=>{
		console.log(snap.val())
		$("#listData").append(`<p ${snap.val().Todo},${snap.val().Date},${snap.key}>${snap.val().Todo}, ${snap.val().Date}, ${snap.key}</p>`)
	});
}