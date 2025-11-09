(function () {
    const PASSWORDS = {
        "building bridge.html": "00080578",
        "collecting.html": "15253545",
        "animal conservation.html": "93284755",
        "creepy.html": "65920148",
        "ecotourism.html": "99112733",
        "asthma.html": "55442011",
        "iguana.html": "88993344",
        "archaeology.html": "44661290",
        "landlocked.html": "99117788",
        "consumer.html": "21235544",
        "environmental.html": "12125544",
        "crazy.html": "90987654",
        "exam.html": "77770000",
        "extra.html": "88889999",
        "racial.html": "50505050",
        "great apes.html": "33334444",
        "Charities.html": "22221111",
        "illiteracy.html": "11997755",
        "indigenous.html": "11002233",
        "life.html": "44778899",
        "weather.html": "32005411",
        "philosophy.html": "55006677",
        "martial.html": "77553322",
        "airplanes.html": "99900011",
        "tobacco.html": "66664444"
    };

    const STORAGE_KEY = "unlockedPages";

    let unlocked = {};
    try {
        unlocked = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
        unlocked = {};
    }

    function checkAndGo(page) {
        if (!PASSWORDS.hasOwnProperty(page)) {
            alert("This section is not available.");
            return;
        }

        if (unlocked[page]) {
            location.href = page;
            return;
        }

        const entered = prompt("Enter password for this section:");
        if (entered === null) return;

        if (entered === PASSWORDS[page]) {
            unlocked[page] = true;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(unlocked));
            location.href = page;
        } else {
            alert("Incorrect password ❌");
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll(".unit[data-page]");
        buttons.forEach(function (btn) {
            btn.addEventListener("click", function () {
                const page = btn.getAttribute("data-page");
                checkAndGo(page);
            });
        });
    });
})();
