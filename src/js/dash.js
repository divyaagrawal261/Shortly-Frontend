const storedToken = localStorage.getItem('accessToken');
const apiURL = "http://localhost:8001";
const token = JSON.parse(storedToken).token;
const allUrls = `${apiURL}/api/url`;
const container = document.querySelector(".analytics-container");
const submitBtn = document.getElementById("button-addon2");
const logOutBtn = document.getElementById("logOut-Btn");

// Fetch all URLs
fetch(allUrls, {
    method: "GET",
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
}).then((response) => response.json())
.then((data) => {
    var count = 0;
    data.forEach((url) => {
        count++;
        const shortId = url.shortId;
        const clicks = url.clicks;
        const entry = document.createElement("div");
        entry.className = "row urlAnalytics";
        entry.innerHTML = `
            <div class="col-1 serialNumber">${count}.</div>
            <div class="col-9 shortLink"><a href="${apiURL}/${shortId}" target="_blank">${apiURL}/${shortId}</a></div>
            <div class="col-2 clicks">clicks: ${clicks}</div>
        `;
        container.append(entry);
    });
    document.querySelector(".speedometer").innerHTML = count;
});

// Shorten Link function
const shorten = (event) => {
    const url = document.getElementById("url").value;
    fetch(allUrls, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: url
        })
    }).then(response => response.json())
    .then((data) => {
        console.log(data); // Handle success
        updateShortenedURLs(data);
    }).catch(error => console.error(error));
};

// Update the list of shortened URLs
function updateShortenedURLs(newUrlData) {
    const entry = document.createElement("div");
    entry.className = "row urlAnalytics";
    entry.innerHTML = `
        <div class="col-1 serialNumber">New.</div>
        <div class="col-9 shortLink"><a href="${apiURL}/${newUrlData.shortId}" target="_blank">${apiURL}/${newUrlData.shortId}</a></div>
        <div class="col-2 clicks">clicks: ${newUrlData.clicks || 0}</div>
    `;
    container.append(entry);
}

// Log out and clear localStorage
logOutBtn.addEventListener("click", () => {
    localStorage.clear();
    window.location.replace("../index.html");
});

// Add event listener for the shorten button
submitBtn.addEventListener("click", shorten);
