// phone plus button action
const plusPhoneBtn = document.getElementById('phnPlus').addEventListener('click',function(){
    const quantity = document.getElementById("phoneQuantity").value;
    const addNumber = parseFloat(quantity);
    const finalQuantity = addNumber + 1;
   document.getElementById("phoneQuantity").value = finalQuantity;

       const totalPhoneAmount = finalQuantity * 1219;
       document.getElementById('totalPhonePrice').innerText = totalPhoneAmount;
     totalprice();
   })
        
   //phone minus button action


   const minusPhoneBtn = document.getElementById('phnMinus').addEventListener('click', function(){
    const quantity = document.getElementById('phoneQuantity').value;
    const addNumber = parseFloat(quantity);
    const finalQuantity =  addNumber - 1;
     if (finalQuantity >= 0) {
              
         document.getElementById("phoneQuantity").value = finalQuantity;

      }

        var totalPhoneAmount = finalQuantity * 1219;
     if (totalPhoneAmount >= 0) {
        document.getElementById("totalPhonePrice").innerText = totalPhoneAmount;
     }
     const TotalPrice = totalprice();
     

    })
  //case plus button action
  const PlusCaseBtn = document.getElementById('casePlus').addEventListener('click', function(){
    const quantity = document.getElementById("caseQuantity").value;
    const addNumber = parseFloat(quantity);
    const finalQuantity = addNumber + 1;
    document.getElementById("caseQuantity").value = finalQuantity ;

    const totalCaseAmount = finalQuantity * 59;
    document.getElementById("totalCasePrice").innerText = totalCaseAmount;
   
    totalprice();
 })
//case minus button action
    const minusCaseBtn = document.getElementById('caseMinus').addEventListener('click', function(){
    const caseQuantity = document.getElementById("caseQuantity").value;
    const addNumber = parseFloat(caseQuantity);
    const finalQuantity = addNumber - 1;
    
    if ( finalQuantity >= 0){
    document.getElementById("caseQuantity").value = finalQuantity;
    }
        const totalCaseAmount = finalQuantity * 59;
        if( totalCaseAmount >= 0){
           document.getElementById('totalCasePrice').innerText = totalCaseAmount;
        } 
        totalprice();  
          
      })
      function totalprice(){
        const mobilePrice = document.getElementById("totalPhonePrice").innerText;
        const mobilePriceNmuber =parseFloat(mobilePrice);
        const casePrice = document.getElementById("totalCasePrice").innerText;
        const casePriceNumber = parseFloat(casePrice);
        const totalPriceNumber = mobilePriceNmuber + casePriceNumber;     
        document.getElementById("subtotal").innerText = totalPriceNumber;
        document.getElementById("total").innerText = totalPriceNumber;
        
     }