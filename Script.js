function data(s1,s2,s3,s4,s5,s6,s){
    const total = s1+s2+s3+s4+s5+s6
    const avg  = (total / 600)
    const percentage = avg *100;
    
      return(`the student ${s}   total marks is ${total} and the average is ${avg} and the per is ${percentage}%`)
    }

    function listenToclick (e){
        e.preventDefault();
         let s1 =Number(document.getElementById("s1").value)
         let s2 =Number(document.getElementById("s2").value)
         let s3 =Number(document.getElementById("s3").value)
         let s4 =Number(document.getElementById("s4").value)
         let s5 =Number(document.getElementById("s5").value)
         let s6 =Number(document.getElementById("s6").value)
         let s =(document.getElementById("name").value)   
         const template  = data(s1,s2,s3,s4,s5,s6,s);
         console.log(template)
         document.getElementById("temp").innerText = template
    }
   

      
        
      
  //   function resetForm(e) {
  //     e.preventDefault();
  //     document.getElementById("myForm").reset(); // Resets the form inputs
  //     document.getElementById("temp").innerText = ""; //
  // }
  
  // document.getElementById("myForm").addEventListener("submit", listenToclick);
  // document.getElementById("resetButton").addEventListener("click", resetForm);


  // function reset(){
  //   document.getElementById("reset").value=" ";
  // }
  // document.getElementById("myForm").addEventListener("submit",reset());

  function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("s1").value = "";
    document.getElementById("s2").value = "";
    document.getElementById("s3").value = "";
    document.getElementById("s4").value = "";
    document.getElementById("s5").value = "";
    document.getElementById("s6").value = "";
    document.getElementById("temp").innerText = ""; // Clears the result
}
document.getElementById("myForm").addEventListener("submit",listenToclick);
document.getElementById("resetForm").addEventListener("click",resetForm);

