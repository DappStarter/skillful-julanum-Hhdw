require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember exchange hockey arena outer swift'; 
let testAccounts = [
"0xdc00460e2f7f048de2291b9cf1671fe5bf25babea331cabf40131285244121ce",
"0x76b8051e40fea330dbf4eedd54b9039e71d610d0dbc96200078995eacd887e7b",
"0x6972532e589924e46a7913189753d16705d631316efde722f0663dab95335035",
"0x4d116673c7564d6711c9395a209145c7a208d2bc8d6aaf98baaf4ef963a405a5",
"0x8b48ff8a1c8b5c57ee74aa15e09449979088eeeb703fc21cfb576ef58d5db4c3",
"0x518ef2c67eb7940ea58a98de0facb0a5c48dac6fbdb7d48f19339e0273bc5909",
"0x61b33e816f9882327be93d0e20b7c2c4dd32e0f1c4e78d8e28fea2e0cd1413f0",
"0x21a62cb5f40df2c19dff27fe1563fbdebfe97ce1b99f8c465d7f83c2001779e8",
"0x9f513636fbde4dc8c4ce42f0d9217b9cc7c2e3a9c606b61e876b2da5a6ad8f33",
"0x600582e9396312fb009b405fd9039509b3e21db272e19e7ca6a5d0ad7d11d404"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

