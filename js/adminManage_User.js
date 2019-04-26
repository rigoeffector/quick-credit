function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }



  
    var openModelBtn = document.querySelectorAll("#app-detail");
    var singleModal = document.getElementById("single-app__model");
    var closeModal = document.querySelectorAll(".close");
    for(let i = 0; i < openModelBtn.length; i++){
        openModelBtn[i].addEventListener("click",()=>{
            singleModal.style.display ="block";
        });
        
    }
    for(let c=0; c< closeModal.length;c++){
        closeModal[c].addEventListener("click",()=>{
            singleModal.style.display ="none";
        });
    }
    window.onclick = (event)=>{
        if(event.target ==  singleModal){
            singleModal.style.display = "none"
        }
    }

    var userVerification = document.querySelectorAll("#user_Verification");
    for(let u=0; u < userVerification.length;u++){
        userVerification[u].addEventListener("click",(event)=>{
           var box = confirm("Are you sure to veirfy this user");
           if(box == false){
              event.preventDefault()
           }
        })
    }