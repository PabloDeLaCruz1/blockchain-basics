import sha256 from 'crypto-js/sha256';

let Block = class {
    constructor(previousHash, timestamp) {
        this.previousHash = previousHash;
        this.timestamp = timestamp
    }
    generateHash = (obj) => {
        this.hash = sha256(JSON.stringify(obj));
    }
}