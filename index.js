function headingOpen(event, heading){
 let tabcontent = document.getElementsByClassName('tabcontent');
 let tablinks = document.getElementsByClassName('tablinks')
 for(let i =0; i<tabcontent.length; i++){
    tabcontent[i].style.display = "none";
 }
 for(let i = 0; i<tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace(" active", "");
 }
 document.getElementById(heading).style.display= "block";
 event.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

  
 
  
