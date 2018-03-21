const ChunkParser = require("chunk2json");
const parser = new ChunkParser();

parser.on("json", (api_dataNP) => {
    const result = JSON.parse(api_dataNP);
    console.log(result); // Prints the expected array
});
