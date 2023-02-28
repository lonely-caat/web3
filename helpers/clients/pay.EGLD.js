import {Mnemonic, UserSigner} from '@elrondnetwork/erdjs-walletcore';
import {Address, GasEstimator, TokenPayment, Transaction, TransactionPayload,} from '@elrondnetwork/erdjs';

const mnemon =
    'attitude blanket limb process oyster gorilla vote silk bind bright zoo exhibit neglect hint uphold busy usual diet path apology advice peace museum tag';
const APIUrl = 'https://devnet-api.elrond.com';
const mnemonic = Mnemonic.fromString(mnemon);

export default async function signAndBroadcastTransaction(
    amount,
    receiver_address
) {
    const userSecretKey = mnemonic.deriveKey(0);
    const userPublicKey = userSecretKey.generatePublicKey();
    const address = userPublicKey.toAddress();
    const signer = new UserSigner(userSecretKey);

    // https://docs.elrond.com/integrators/creating-transactions/#nonce-management
    const nonce = await recallAccountNonce(address);

    // https://docs.elrond.com/sdk-and-tools/erdjs/erdjs-cookbook/#preparing-a-simple-transaction
    const data = 'automation cat test';
    const gasLimit = new GasEstimator().forEGLDTransfer(data.length);
    const transaction = new Transaction({
        nonce: nonce.nonce,
        // 0.123456789000000000 EGLD "369520000000000000"
        value: TokenPayment.egldFromBigInteger(amount),
        sender: address,
        receiver: new Address(receiver_address),
        data: new TransactionPayload(data),
        gasPrice: 1000000000,
        gasLimit: gasLimit,
        chainID: 'D',
    });

    await signer.sign(transaction);
    console.log('Transaction signature', transaction.getSignature().hex());
    console.log('Transaction hash', transaction.getHash().hex());
    console.log('Data to broadcast:');
    console.log(transaction.toSendable());

    await broadcastTransaction(transaction);
}

async function recallAccountNonce(address) {
    const url = `${APIUrl}/accounts/${address.toString()}`;
    const response = await fetch(url);
    return response.json();
}

async function broadcastTransaction(transaction) {
    const url = `${APIUrl}/transactions`;
    const data = transaction.toSendable();

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    console.log(response);
}


signAndBroadcastTransaction(22030000000000000, 'erd1dsk469tusm6h6z4capnt3s5q087vhatkzur2vgq5ul74mp3tlr0qt7vsrv')
// 969520000000000000
// 24500000000000000
