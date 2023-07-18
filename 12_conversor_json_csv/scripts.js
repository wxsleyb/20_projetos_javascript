const converterForm = document.querySelector("#converterForm");
const converterInput = document.querySelector("#converterInput");
const jsonToCsvButton = document.querySelector("#jsonToCsvButton");
const csvToJsonButton = document.querySelector("#csvToJsonButton");
const copyJsonButton = document.querySelector("#copiar-json");

function jsonToCsv(json) {
    const headers = Object.keys(json[0])
    const csvRows = []

    csvRows.push(headers.join(","));

    console.log(csvRows)

    for (const row of json) {
        const values = headers.map((header) => {
            let value = row[header];

            if (value === null || value === undefined) {
                value = ""
            } else if (typeof value === "object") {
                value = JSON.stringify(value);

            }

            return value;
        });

        csvRows.push(values.join(","))
    }
    return csvRows.join("\n")
}

function csvToJson(csv) {
    const lines = csv.split("\n");
    const headers = lines[0].split(",");
    const json = []

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(",")
        const row = {}
        if (values.length !== headers.length) {
            continue;
        }

        for (let j = 0; j < headers.length; j++) {
            let value = values[j];

            if (value[0] === "{" || value[0] === "[") {
                value = JSON.parse(value);
            }

            row[headers[j]] = value;
        }
        json.push(row);
    }

    return (json)

}

jsonToCsvButton.addEventListener("click", function () {
    const json = JSON.parse(converterInput.value.trim())
    csv = jsonToCsv(json);
    downloadCsv(csv);

});

csvToJsonButton.addEventListener("click", function () {
    const csv = converterInput.value.trim()
    const json = csvToJson(csv);

    displayJson(json);

})

copyJsonButton.addEventListener("click", copyJSON);
downloadCsvButton.addEventListener("click", downloadCsv);

function downloadCsv(csv) {
    const downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(csv)
    );

    downloadLink.setAttribute("download", "data.csv");

    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink)


}


let convertedJson = null;


function displayJson(json) {
    const jsonDisplay = document.querySelector("#jsonDisplay");
    jsonDisplay.innerHTML = "";

    convertedJson = JSON.stringify(json, null, 2);

    const resultArea = document.createElement("pre");
    resultArea.textContent = convertedJson;

    jsonDisplay.appendChild(resultArea);
}


function copyJSON() {
    if (convertedJson) {
        navigator.clipboard.writeText(convertedJson).then(
            () => {
                const alertMessage = "JSON copiado para a área de transferência.";
                alert(alertMessage);

                
                setTimeout(() => {
                    
                }, 3000);
            },
            (err) => {
                console.log("Erro ao copiar JSON: ", err);
            }
        );
    } else {
        alert("Nenhum JSON convertido para copiar.");
    }
}


