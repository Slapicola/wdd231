const currentyear = document.querySelector("#currentyear");

const today = new Date();
currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;


const currentUrl = window.location.href;
console.log(currentUrl);

const allData = currentUrl.split("?");
console.log(allData);

let formInfo = allData[1].split("&");
console.log(formInfo);

function showData(input) {
    formInfo.forEach((element) => {
        if (element.startsWith(input)) {
            info = element.split("=")[1].replace("%2B", "+").replace("%40", "@").replaceAll("+", " ").replaceAll("%3A", ":");
        }
    })
    return(info);
}

const dataInfo = document.querySelector("#info");
dataInfo.innerHTML = `
<p><strong>Name:<strong> ${showData("first")} ${showData("last")}</p>
<p><strong>Email:<strong> ${showData("email")}</p>
<p><strong>Phone Number:<strong> ${showData("phone")}</p>
<p><strong>Business/Organization Name:<strong> ${showData("business")}</p>
<p><strong>Date and Time that form was submitted:<strong> ${showData("timeLoaded")}</p>`