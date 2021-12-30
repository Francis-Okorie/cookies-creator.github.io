//var numbersofAccordion = document.querySelectorAll("accordion-question").length;
//for (var i = 0; i<numbersofAccordion; i++) {

    //document.querySelectorAll("#accordion-question").addEventListener("click" , accordion);

    //function accordion () {
       // alert("i got clicked")
    //}

//}//

//const question = document.querySelector("#accordion-question");
//question.addEventListener("click" , () => {
    //if (question.parentNode.classList.contains("active")) {
     //   question.parentNode.classList.toggle("active");
   // } else{
   //     question => question.parentNode.classList.remove("active");
   // }
//});

   // function accordion () {
   //     alert("i got clicked")
   // }

   var numberofQuestions = document.querySelectorAll("#accordion-question").length;
   for (var i=0; i<numberofQuestions; i++) {
    document.querySelectorAll("#accordion-question")[i].addEventListener("click" , function () {
        this.classList.toggle("active");
        var accordionAnswer = this.nextElementSibling;
        if (accordionAnswer.style.display === "block") {
            accordionAnswer.style.display = "none";
        }
         else {
            accordionAnswer.style.display = "block";
        }

        
    });
   }

   


   