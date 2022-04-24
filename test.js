const { Block } = require('./block.class');
const { Blockchain } = require('./blockchain.class');

console.log('Creating blockchain');
let jChain = new Blockchain();

mine();

function mine() {
    console.log('--- Starting to mine a new Block ---');
    let block = new Block(Data.now(), {'junus': 100, 'manu': 50 }, );
    block.mine();
    jChain.addBlock(block);
    console.log(jChain.chain);
    mine();
}