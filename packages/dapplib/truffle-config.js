require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remember solid inflict phone obscure setup'; 
let testAccounts = [
"0x4051cfecb050b41f951bab6dcae073539657ccc172991da1c06850587cbc3bb8",
"0xf8ecdaa2b04e46430004e07e36227aec35fa8b261d72eabff912cc33d62842cd",
"0x62ef92eab56d69b1884289902973905f024e4d6bc42b3bc000d791acc8fa6519",
"0xfb6ce07ca023eedd3ace96e9d64b8334a38e69475dd8a525304279d6d1a2bfcf",
"0x7768c172131cdc2a09b398b476373617bfd67e302efe8b43d44f344f044ad423",
"0x175f8f0af808473896477b4514686874190dc4905eea1259cbb8cc648e5ff331",
"0x2d60f9d61ff22e94a85bb7422a6928696b4dbd87a1f6eea4b98da392e97831b1",
"0x2e6398dd3f258a9eebe4f3d9608faf64e37d9d76dfc082288fa0d768a953453b",
"0x6d23362fc193f2da042c992ef302836f3825e00f096464afb32768f2088f0e7b",
"0x5c4e29c0f3eb595b2e438a741dfe869b2c3f20d7a620064fdab3f1801bd7b18f"
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
            version: '^0.5.11'
        }
    }
};
