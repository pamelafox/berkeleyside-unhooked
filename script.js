// Disabled for now, until further work is done
function maybeRot() {
    var today = new Date();
    var todayStr = `${today.getFullYear()}/${today.getMonth()}/${today.getDate()}`;
    var domain = window.location.host;
    var storageKey = domain + todayStr + '2';

    chrome.storage.sync.get([storageKey], function(result) {
        let numVisitsPrev = result[storageKey] || 0;
        let numVisitsNow = numVisitsPrev + 1;

        const toSync = {};
        toSync[storageKey] = numVisitsNow;
        chrome.storage.sync.set(toSync);

        if (numVisitsNow > 5) {
          document.body.classList.add("rotting");
        }
        if (numVisitsNow > 10) {
          document.body.classList.add("rottingMore");
        } else if (numVisitsNow > 4) {
          document.body.classList.add("rottingMost");
        }

    });
}

