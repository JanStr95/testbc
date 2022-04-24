class Blockchain {
    constructor() {
        this.chain = [];
    }

    addBlock(block) {
        block.lastHash = this.getLastBlock().createHash();
        this.chain.push(Object.freeze(block));
    }

    isValid() {
        let invalidBlock = this.chain.find((currBlock, i) => {
            let prevBlock = this.chain[i - 1];
            return prevBlock && prevBlock.createHash() != currBlock.lastHash;
        });
        if (invalidBlock) {
            return true;
        } else {
            return false;
        }
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }
}