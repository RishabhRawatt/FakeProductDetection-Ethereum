import React from 'react';

function HowWork() {
  return (
    <div className="all-div">
      <h2>Here's how the system works:</h2>
      <p> <h3>Add Product:</h3> To register a product, it is first assigned a unique product ID using a secure SHA algorithm. This ID ensures the product's uniqueness and serves as its digital identifier within the system.</p>

      <p><h3>Claim Ownership:</h3> If a product has no assigned owner or is newly created, users can claim ownership of the product. This can be done by entering or scanning the product ID. Once claimed, the product becomes associated with the user as the rightful owner.</p>


      <p><h3>Assigning Owner: </h3> The system records and securely stores the ownership information on the blockchain. This ensures transparency and immutability, preventing tampering or fraudulent ownership claims.</p>

      <p><h3>Transferring Ownership: </h3> If the current owner decides to sell the product, they can transfer ownership to a buyer. The ownership transfer process requires the input of the buyer's wallet address and the product ID. This transaction is securely executed through the blockchain, maintaining a transparent and auditable history of ownership transfers.</p>

      <p><h3>Seller's Wallet Address:</h3>  As part of the ownership transfer, the seller's wallet address is recorded in the product's transaction history. This allows for traceability and accountability, as past owners' wallet addresses are displayed, providing a comprehensive record of ownership changes.</p>

      <p><h3>Ensuring Authenticity: </h3>  The system utilizes the unique product IDs, ownership records, and the decentralized nature of the blockchain to ensure authenticity. By cross-referencing the product ID and ownership history, users can verify the product's authenticity and trust the information stored on the blockchain.</p>    

      <p><h3>Secure Transactions: </h3>  The use of blockchain technology ensures the security of transactions. Cryptographic signatures and the decentralized nature of the blockchain make the system resistant to tampering and fraudulent activities, providing a secure environment for ownership transfers.</p>   

      <h2>DHANYAWAD🙏  </h2>
    </div>

  );
}

export default HowWork;


