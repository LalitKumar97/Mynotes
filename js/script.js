// show note from  local storage already saved

shownotes();
// If user adds a notes ,add it local storage
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click",function(e){
 let addtxt = document.getElementById("addtxt");
 let notes = localStorage.getItem("notes");

 if(notes == null)
 {
     notesobj = [];
 }
 else
 {
  notesobj = JSON.parse(notes); 
 }
 notesobj.push(addtxt.value);
 localStorage.setItem("notes",JSON.stringify(notesobj));
 addtxt.value = "";
 shownotes();

})
//  Function to show notes from local storage
function shownotes(){
    let notes = localStorage.getItem("notes");

    if(notes == null)
    {
        notesobj = [];
    }
    else
    {
     notesobj = JSON.parse(notes); 
    }
 let html = "";
 notesobj.forEach( function(element,index){
     html +=`
     
         
        
     <div class="card my-2 mx-2" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Note ${index + 1}</h5>
              <p class="card-text">${element}</p>
              <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">
                Delete Note
              </button>
            </div>
          </div>
          
     `
 });
   
 let noteselm = document.getElementById("notes");
 if(noteselm.length != 0)
{
noteselm.innerHTML = html;
}
}

// function to delete notes

function deleteNote(index){
  let notes = localStorage.getItem("notes");

  if(notes == null)
  {
      notesobj = [];
  }
  else
  {
   notesobj = JSON.parse(notes); 
  }
  notesobj.splice(index,1) ;
  localStorage.setItem("notes",JSON.stringify(notesobj));
  shownotes();
}
// function for search key word in notes

let search = document.getElementById("searchtxt");
search.addEventListener("input", function(){
  let inputval = search.value.toLowerCase();
  let card = document.getElementsByClassName("card");
  Array.from(card).forEach(function(element){
  let cardtxt = element.getElementsByTagName("p")[0].innerText;
  if(cardtxt.includes(inputval)){
    element.style.display = "block";
  }
  else{
    element.style.display = "none";
  }
 })
})