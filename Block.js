import sha256 from 'crypto-js/sha256';
// import Promise from 'bluebird';

let Block = class {
    constructor(data) {
        this.id = 0;
        this.nonce = 144444;
        this.body = data;
        this.hash = "";
    }
    generateHash() {
        let self = this;
        return new Promise((resolve, reject) => {
            self.hash = sha256(JSON.stringify(self)).toString()
            if (self.hash != "") {
                resolve(self);
            } else {
                reject(Error("It broke"));
            }
        })
    }
}
module.exports.Block = Block;