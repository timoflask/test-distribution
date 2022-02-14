import { pinJSONToIPFS } from "./pinata.js";
import Web3 from 'web3'
import { contractAddress } from '../constants/address'
import { chainId } from '../constants/address'
const axios = require('axios');


const web3 = new Web3("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
// const web3 = new Web3("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")

const contractABI = require("../constants/contract.json")


export const connectMetamaskWallet = async () => {
  const contractOwner = await getContractOwner();

  if (window.ethereum) { 
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (addressArray[0].toString().toUpperCase() == contractOwner.toString().toUpperCase()) {
        const obj = { 
          status: "You are contract owner so you can mint. Write a message in the text-field above.",
          address: addressArray[0],
        };
        return obj;
      } else {
        const obj = {
          status: "You are not contract owner so you can't use this dapp for minting KYC nft.",
          address: "",
        };
        return obj;
      }

    } catch (err) {
      return {
        address: "",
        status: err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You should install Metamask in your browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getWalletConnected = async () => {
  const contractOwner = await getContractOwner();

  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        if (addressArray[0].toString().toUpperCase() == contractOwner.toString().toUpperCase()) {
          return {
            address: addressArray[0],
            status: "You are contract owner so you can mint. Write a message in the text-field above.",
          };
        } else {
          return {
            address: "",
            status: "You are not contract owner so you can't use this dapp for minting KYC nft.",
          };
        }
      } else {
        return {
          address: "",
          status: "Connect to Metamask.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You should install Metamask in your browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getContractOwner = async () => {
  const contract = await new web3.eth.Contract(contractABI, contractAddress);
  const contractOwner = await contract.methods.contractOwner().call();
  console.log(contractOwner)

  return contractOwner;
}

export const getTotalSupply = async () => {
  const contract = await new web3.eth.Contract(contractABI, contractAddress);
  const totalSupply = await contract.methods.totalSupply().call();
  console.log(totalSupply)

  return totalSupply;
}

export const getOwnerList = async () => {
  const contract = await new web3.eth.Contract(contractABI, contractAddress);
  const totalSupply = await contract.methods.totalSupply().call();

  var ownerlist =  new Array;
  var owner;

  for(var i = 0; i < totalSupply; i++) {
    owner = await contract.methods.ownerOf(i+1).call();
    ownerlist.push(owner)
  }
  
  console.log(ownerlist)
  return ownerlist;
}

export const getTokenMetadata = async (tokenid) => {
  const contract = await new web3.eth.Contract(contractABI, contractAddress);

  try {
    const tokenUri = await contract.methods.tokenURI(tokenid).call();
    const metadata = await getMetadataFromUri(tokenUri);
    return metadata;
  } catch {
    return null;
  }
}

const getMetadataFromUri = async (tokenUri) => {
  const response = await axios.get(tokenUri);
  return response.data;
}

export const transferToken = async (sender, receiver, tokenId) => {
  const contract = await new web3.eth.Contract(contractABI, contractAddress);

  console.log(sender)
  console.log(receiver)
  console.log(tokenId)

  try {
    const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: contract.methods
        .transferFrom(sender, receiver, tokenId)
        .encodeABI(),
    };
    
    try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });

      return {
        success: true,
        status:
          "✅ Please check your transaction on rinkeby.etherscan.io " +
          txHash,
      };
    } catch (error) {
      return {
        success: false,
        status: "Something went wrong: " + error.message,
      };
    }
  } catch {
    return {
      success: false,
      status: "Something went wrong: " + error.message,
    };
  }
}

export const mint = async (fullname, url, description, attributes) => {
  //make metadata
  const metadata = new Object();
  metadata.name = fullname;
  metadata.image = url;
  metadata.description = description;
  metadata.attributes = attributes;

  console.log(metadata)

  const pinataResponse = await pinJSONToIPFS(metadata);
  if (!pinataResponse.success) {
    return {
      success: false,
      status: "Something went wrong while uploading your tokenURI.",
    };
  }
  const tokenURI = pinataResponse.pinataUrl;

  window.contract = await new web3.eth.Contract(contractABI, contractAddress);

  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.contract.methods
      .mintNFT(window.ethereum.selectedAddress, tokenURI)
      .encodeABI(),
  };

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });

    return {
      success: true,
      status:
        "✅ Please check your transaction on rinkeby.etherscan.io " +
        txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "Something went wrong: " + error.message,
    };
  }
};