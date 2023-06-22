bannerDiv = document.getElementById("bannerDiv");
settings = document.getElementById("settings");
bannerValue = document.getElementById("bannerValue");
showBanner = document.getElementById("showBanner");
showSettings = document.getElementById("showSettings");
banner = document.getElementById("banner");
setBanner = document.getElementById('setBanner');

function updateBanner() {
    chrome.storage.local.get(["bannertext"], (result) => {
        if (!result.bannertext) {
            result.bannertext = "banner is empty";
        }
        banner.innerText = result.bannertext;
        bannerValue.value = result.bannertext;
    });
}
updateBanner();
showBanner.addEventListener('click', () => {
    bannerDiv.style.display = "block";
    settings.style.display = "none";
});

showSettings.addEventListener('click', () => {
    bannerDiv.style.display = "none";
    settings.style.display = "block";
});

setBanner.addEventListener('click', () => {
    chrome.storage.local.set({ 'bannertext': bannerValue.value }, () => {
        console.log('data had been stored');
        updateBanner();
        showBanner.click();
    });
});

chrome.storage.local.get(null, (result) => {
    console.log(remove);
});