const {Connection,LAMPORTS_PER_SOL} = require('@solana/web3.js');
const solanaWeb3 = require('@solana/web3.js');
console.log(solanaWeb3);

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

(async ()=>
{
    const airdropSignature = await connection.requestAirdrop(
        'A9GWEd2hc9raGL7vQCpH7GU1snbtmRRGaZ9mhxPcF9gk',
        LAMPORTS_PER_SOL
      );
      
    await connection.confirmTransaction(airdropSignature);
    const recentBlockhash = await connection.getLatestBlockhash();
    
    await connection.confirmTransaction({
        Blockhash:latestBlockchain.blockhash,
        lastValidBlockWeight:latestBlockHash,lastValidBlockHeight,
        signature:airdropSignature
    })
      
})
