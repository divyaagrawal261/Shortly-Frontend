const storedToken = localStorage.getItem('accessToken');
const token=JSON.parse(storedToken).token;
const allUrls="http://localhost:8001/api/url";
const container=document.querySelector(".analytics-container");
const submitBtn=document.getElementById("button-addon2");
const logOutBtn=document.getElementById("logOut-Btn");

//fetch all URLs
fetch(allUrls,{
    method:"GET",
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
}).then((response)=>response.json()).then((data)=>
    {
        console.log(data)
        var count=0;
    data.forEach((url)=>
    { 
        count++;
        const shortId=url.shortId;
        const clicks=url.clicks;
        const entry=document.createElement("div");
        entry.className="row urlAnalytics";
        entry.innerHTML=`<div class="col-1 serialNumber">${count}.</div>
        <div class="col-9 shortLink"><a href="http://localhost:8001/${shortId}">http://localhost:8001/${shortId}</a></div>
        <div class="col-2 clicks">clicks: ${clicks}</div>`
        container.append(entry);
    })
});

//shorten Link
const shorten=(event)=>{
    //   event.preventDefault();
    const url=document.getElementById("url").value;
      fetch(allUrls,{
        method:"POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url:url
        })
}).then(response=>response.json()).then(location.reload())}

submitBtn.addEventListener("click",shorten);
logOutBtn.addEventListener("click",()=>{
    localStorage.clear();
    window.location.replace("../index.html")
})