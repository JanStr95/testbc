class Block {
    constructor(time = Date.now(), data = {}) {
        this.time = time;
        this.data = data;
        this.lastHash = '';
        this.nonce = 0;
        this.difficulty = '00';
    }

    mine() {
        this.hash = this.createHash();
        while(!hash.statsWith(this.difficulty)) {
            this.nonce++;
            hash = this.createHash();
        }
    }

    createHash() {
        return sha256(this.nonce + this.lastHash + this.time + JSON.stringify(this.data));
    }
}