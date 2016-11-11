window.onload = function()
{
    
    var httpRequest;
    var defbutton= document.querySelector("#search");
    
    defbutton.addEventListener("click",function(){
         httpRequest = new XMLHttpRequest(); 
         var word = document.querySelector('#word').value;
         var url="request.php";
         
        httpRequest.onreadystatechange = Req;
        httpRequest.open('POST', url);
        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        httpRequest.send('q=' + encodeURIComponent(word));
         
    });
    
    function Req() 
    {
        if (httpRequest.readyState === XMLHttpRequest.DONE) 
        {
            if (httpRequest.status === 200) 
            {
               
                var response = httpRequest.responseText;
                var result = document.querySelector('#result');
                result.innerHTML = response;
            } 
            else 
            {
                alert('There was a problem with the request.');
            }
        }
    }
}