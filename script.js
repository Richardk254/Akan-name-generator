var maleName=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
var femaleName=['Akosua','Adwoa', 'Abenaa','Akua','Yaa','Afua','Ama']
function findName(){
    var year =document.getElementById("year").value
    var month =document.getElementById("month").value
    var day =document.getElementById("day").value
    var dd =parseInt(day);
    var mm =parseInt(month);
    var yy =parseInt(year);
    var cc = (yy-1)/100+1
    var birthDay=parseInt(((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10))+ dd)%7;
    
    if(document.getElementById("gender").checked){
        var gender="male"
      }else {
        var gender="female"
      }

      if(dd <=0 || dd >31 || dd ==""){
        alert("Invalid Date")
    
      }else if(mm <=0 || mm >12){
        alert("Invalid Month")
      }
    
       else if(year <=0 || year =="" ){
         alert("Invalid Year")
     }    
      else if(Math.abs(birthDay)==1 && gender ==="male"){
        alert("Your name is:" + maleName[1])
      }
      else if(Math.abs(birthDay)==2 && gender ==="male"){
        alert("Your name is:" + maleName[2])
      }
      else if(Math.abs(birthDay)==3 && gender ==="male"){
        alert("Your name is:" + maleName[3])
      }
      else if(Math.abs(birthDay)==4 && gender ==="male"){
        alert("Your name is:" + maleName[4])
      }
    
      else if(Math.abs(birthDay)==5 && gender ==="male"){
        alert("Your name is:" + maleName[5])
      }
    
      else if(Math.abs(birthDay)==6 && gender ==="male"){
        alert("Your name is:" + maleName[6])
      }
      else if(Math.abs(birthDay)==0 && gender ==="male"){
        alert("Your name is:" + maleName[0])
      }
      else if(Math.abs(birthDay)==1 && gender ==="female"){
        alert("Your name is:" + femaleName[1])
      }
      else if(Math.abs(birthDay)==2 && gender ==="female"){
        alert("Your name is:" + femaleName[2])
      }
      else if(Math.abs(birthDay)==3 && gender ==="female"){
        alert("Your name is:" +femaleName [3])
      }
      else if(Math.abs(birthDay)==4 && gender ==="female"){
        alert("Your name is:" + femaleName[4])
      }
    
      else if(Math.abs(birthDay)==5 && gender ==="female"){
        alert("Your name is:" +femaleName[5])
      }
    
      else if(Math.abs(birthDay)==6 && gender ==="female"){
        alert("Your name is:" + femaleName[6])
      }
      else if(Math.abs(birthDay)==0 && gender ==="female"){
        alert("Your name is:" + femaleName[0])
      }
    else{
        alert("The input should not be null")
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    








}