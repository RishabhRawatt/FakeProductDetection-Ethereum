// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductOwnership {

    //mapping for check if product ID is exist before claiming
    mapping(bytes32 => bool) public productExists;

    // Mapping of product IDs to their owners
    mapping(bytes32 => address) public productOwnership;

    // Mapping of product IDs to their ownership history
    mapping(bytes32 => address[]) public productOwnershipHistory;

    // Store the address of the person who deployed the contract
    address public contractDeployer;

    // Constructor to store the deployer's address
    constructor() {
        contractDeployer = msg.sender;
    }

    struct Product {
        bytes32 id;
        string name;
        string description;
        uint256 dateAdded; 
    }

    mapping(bytes32 => Product) public products;

    //write function

    bytes32 public tempProductId;

    // bytes32[] public AllproductIds;

    event ProductAdded(bytes32 productId);

    function addProduct(string memory productName, string memory productDesc)
        public
        returns (bytes32)
    {
        require(
            msg.sender == contractDeployer,
            "Only the contract deployer can add new products."
        );
        bytes32 productId = sha256(abi.encodePacked(productName));
        products[productId] = Product({
            id: productId,
            name: productName,
            description: productDesc,
            dateAdded: block.timestamp
            
        });
        tempProductId = productId;
        productExists[productId] = true;
        // AllproductIds.push(productId);
        emit ProductAdded(productId);
        return productId;
    }

    //write function
    function transferOwnership(bytes32 productId, address newOwner) public {
        // Only the current owner can transfer ownership
        require(
            msg.sender == productOwnership[productId],
            "Only the current owner can transfer ownership."
        );
        // Add the current owner to the product's ownership history
        productOwnershipHistory[productId].push(productOwnership[productId]);
        // Transfer ownership
        productOwnership[productId] = newOwner;
    }

    // Function to show all previous owners of a product

    //read function
    function showOwnershipHistory(bytes32 productId)
        public
        view
        returns (address[] memory)
    {
        return productOwnershipHistory[productId];
    }

    // Function to claim ownership of a product

    //write function
    function claimOwnership(bytes32 productId) public {

        //check if the productID actually exist
         require(
        productExists[productId],
        "This product does not exist. you came Early"
    );
        // Only unowned products can be claimed
        require(
            productOwnership[productId] == address(0),
            "This product already has an owner."
        );
        // Claim ownership
        productOwnership[productId] = msg.sender;
    }
}
