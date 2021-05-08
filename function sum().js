function sum()
{
    var str1;
    var str2;
    var str3;
    var str4;
    var str5;
    var str6;
    var str7;
    var str8;
    var str9;
    var str10;
    var str11;
    var str12;
    var str13;
    var str14;
    var str15;
    var str16;
    var str17;
    
   
  str1=document.getElementById("name").value;
  str2=document.getElementById("last name").value;
  str3=document.getElementById("date").value; 
  str4=document.getElementById("street").value;
  str5=document.getElementById("city").value;
  str6=document.getElementById("code").value;
  str7=document.getElementById("home no.").value;
  str8=document.getElementById("cell no.").value;
  str9=document.getElementById("mail").value;
if(document.getElementById("level1").checked==true)
{
    str10="level 1";
}
  else if(document.getElementById("level2").checked==true)
    {
        str10="level2";
    }
      else if(document.getElementById("level3").checked==true)
        {
            str10="level3";
        }
         else if(document.getElementById("level4").checked==true)
            {
                str10="level4";
            }
                
                else
                {
                    str10="level5";
                }
        


  str11=document.getElementById("add1").value;
  str12=document.getElementById("add2").value; 
  str13=document.getElementById("text").value;
  str14=document.getElementById("gname").value;
  str15=document.getElementById("ph no.").value;
  if(document.getElementById("yes").checked==true)
{
      str16="yes";
}
  else
 {
      str16="no";

 }
  
  if(document.getElementById("yes1").checked==true)
  {
      str17="yes";
  }
  else
 {
      str17="no";

  }
 
  alert(str1+"...."+str2+"...."+str3+"...."+str4+"...."+str5+"...."+str6+"...."+str7+"...."+str8+"...."+str9+"...."+str10+"...."+str11+"...."+str12+"...."+str13+"...."+str14+"...."+str15+"...."+str16+"...."+str17+"....");
}