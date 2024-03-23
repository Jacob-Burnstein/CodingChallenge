const patternsTable = [{ 420: "h" }, { "3d": "v" }];

const hashTable = [
  { 12345: "abcd1234ef5678" },
  { 67890: "efgh5678ij9012" },
  { 12345: "yahf91d8hk4953" },
  { 987654: "qrst7420uv1234" },
];

function returnPattern(patternsTable, hashTable, patternDirection, blockNum) {
  let result = [];
  if (patternDirection === "h") {
    let sequence = Object.keys(patternsTable[0])[0];
    for (const hash of hashTable) {
      if (Object.values(hash)[0].includes(sequence)) {
        result.push(hash);
      }
    }
  }
  return result;
}

console.log(returnPattern(patternsTable, hashTable, "h"));
