function createEntryNode(entryJson) {
    const entryTemplate = document.getElementById("id-entryTemplate");
    const entryNode = entryTemplate.content.cloneNode(true);

    entryNode.querySelector(".data-name").innerText = entryJson.name;

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
        .then(data => {return data.json()})
        .then(json => {
            displayData(json, destinationId);
        });
}