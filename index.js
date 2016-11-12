window.onload = function()
{
    
    var httpRequest;
    var getXmlBtn = document.querySelector('#getAll');
    var defbutton= document.querySelector("#search");
    

    defbutton.addEventListener('click', function() 
    {
         httpRequest = new XMLHttpRequest();
        // GET Request
        var url = "request.php";
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
                var word = document.querySelector('#word').value;
                var temp=document.createTextNode(word);
                var response = httpRequest.responseXML;
                var results = document.querySelector('#result');
                var dict = response.getElementsByTagName('dictionary');

                var list = document.createElement('ol');
                results.appendChild(list);
                for (var x = 0; x < dict.length; x++)
                {
                    var words = document.createElement('ol');
                    var text = document.createTextNode(dict[x].children[0].childNodes[0].nodeValue);
                    if(dict[x].children[0].childNodes[0].nodeValue===word)
                    {
                        var text2 = document.createTextNode(dict[x].children[1].childNodes[0].nodeValue);
                        var text3 = document.createTextNode(dict[x].children[2].childNodes[0].nodeValue);
                        words.appendChild(text)
                        words.appendChild(text2)
                        words.appendChild(text3)
                        list.appendChild(words);
                    }
                }
            }
            else 
            {
               alert('There was a problem with the request.');
            }
        }
    }
    
    getXmlBtn.addEventListener('click', function() 
    {
         httpRequest = new XMLHttpRequest();

        // GET Request
        var url = "request.php";
        httpRequest.onreadystatechange = getXml;
        httpRequest.open('GET', url);
        httpRequest.send();
    });

    function getXml() 
    {
        if (httpRequest.readyState === XMLHttpRequest.DONE) 
        {
            if (httpRequest.status === 200) 
            {
                var response = httpRequest.responseXML;
                var results = document.querySelector('#result');
                var dict = response.getElementsByTagName('dictionary');

                var list = document.createElement('ol');
                results.appendChild(list);
                for (var x = 0; x < dict.length; x++)
                {
                    var words = document.createElement('li');
                    var text = document.createTextNode(dict[x].children[0].childNodes[0].nodeValue);
                    var text2 = document.createTextNode(dict[x].children[1].childNodes[0].nodeValue);
                    var text3 = document.createTextNode(dict[x].children[2].childNodes[0].nodeValue);
                    words.appendChild(text)
                    words.appendChild(text2)
                    words.appendChild(text3)
                    list.appendChild(words);
                }
            }
            else 
            {
               alert('There was a problem with the request.');
            }
        }
    }
   
};