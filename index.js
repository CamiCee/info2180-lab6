window.onload = function()
{
    
    var httpRequest;
    var defbutton= document.querySelector("#search");
    
    defbutton.addEventListener("click",function(){
         httpRequest = new XMLHttpRequest(); 
         var word = document.querySelector('#word').value;
         var url="https://info2180-lab6-04-cami-cee.c9users.io/request.php?q=definition";
        
         
        httpRequest.onreadystatechange = Req;
         httpRequest.open('GET', url);
        httpRequest.send();
         
    });
    
    function Req() 
    {
        if (httpRequest.readyState === XMLHttpRequest.DONE) 
        {
            if (httpRequest.status === 200) 
            {
               
                alert(httpRequest.responseText);
        
            } 
            else 
            {
                alert('There was a problem with the request.');
            }
        }
    }
}