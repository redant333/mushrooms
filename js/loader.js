function createEntryNode(entryJson) {
    const entryTemplate = document.getElementById("id-entryTemplate");
    const entryNode = entryTemplate.content.cloneNode(true);
    const dataDir = "/data/";

    entryNode.querySelector(".data-title").innerText = entryJson["name-lat"];
    entryNode.querySelector(".data-sub-line-1").innerText = entryJson["name-eng"];
    entryNode.querySelector(".data-sub-line-2").innerText = entryJson["name-swe"];
    entryNode.querySelector(".data-thumbnail").src = dataDir + entryJson.thumbnail;

    return entryNode;
}

function displayData(json, destinationId) {
    const destination = document.getElementById(destinationId);

    for (const entry of json) {
        const entryNode = createEntryNode(entry);
        destination.appendChild(entryNode);
    }
}

function loadData(jsonPath, destinationId) {
    fetch(jsonPath)
        .then(data => { return data.json() })
        .then(json => {
            displayData(json, destinationId);
        });
}