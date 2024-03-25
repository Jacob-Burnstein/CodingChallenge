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
  } else if (patternDirection === "v") {
    let blockNumber = blockNum.toString();
    const verticalSplit = Object.keys(patternsTable[1])[0].split("");
    let arrayToSearch = [];
    for (const block of hashTable) {
      if (Object.keys(block)[0] === blockNumber) {
        arrayToSearch.push(block);
      }
    }
    if (arrayToSearch.length < 2) {
      return "There are not enough hashes to compare";
    }
    for (let i = 0; i < arrayToSearch.length - 1; i++) {
      let hashToCompare = Object.values(arrayToSearch[i])[0];
      let nextHash = Object.values(arrayToSearch[i + 1])[0];
      let nextHashSplit = nextHash.split("");
      for (let j = 0; j < hashToCompare.length; j++) {
        const splitHash = hashToCompare.split("");
        if (splitHash[j] === verticalSplit[0]) {
          if (nextHashSplit[j] === verticalSplit[1]) {
            result.push(arrayToSearch[i], arrayToSearch[i + 1]);
          }
        }
      }
    }
  }
  return result;
}

console.log(returnPattern(patternsTable, hashTable, "v", 12345));
