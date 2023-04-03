function getitem()
{
    const url ='https://api.thecatapi.com/v1/breeds';
    const api_key ="live_0tF9Ii1R1I1Z2BeJR4ndaRgZbaXifChUyZ7E6ziaASX6jh8RNrNkWtwqMGWliwrk";
    if(document.getElementById("CS"==""))
    alert("enter a breed name");
    let storedBreeds = [];
    fetch(url,{headers:{'x-api-key':api_key}})
    .then((response)=>response.json())
    .then((data)=>
    {
        const breedname = (document.getElementById("St1").value).toLowerCase().trim();
        storedBreeds = data;
        var flag =0;
        console.log(data);
        for(let i=0;i<storedBreeds.length;i++)
        {
            const S_bn = (storedBreeds[i].name).toLowerCase();
            if(breedname==S_bn)
            {
                flag=1;
                document.getElementById("bdp").src=storedBreeds[i].image.url;
                document.getElementById("bn").innerHTML+=storedBreeds[i].name;
                document.getElementById("desc").innerHTML+=storedBreeds[i].description;
                document.getElementById("ls").innerHTML+=storedBreeds[i].life_span;
                document.getElementById("origin").innerHTML+=storedBreeds[i].origin;
                document.getElementById("te").innerHTML+=storedBreeds[i].temperament;
                document.getElementById("wiki").href=storedBreeds[i].wikipedia_url;
                document.getElementById("cfa").href=storedBreeds[i].cfa_url;
            }
        }
        if(flag!=1)
        {
            alert("sorry : "+breedname + "is not in out database");
            location.reload();
        }
        
    });

}