import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  connectMetamaskWallet,
  getWalletConnected,
  getContractOwner,
  getTotalSupply,
  getOwnerList,
  getTokenMetadata,
  getMetadataFromUri,
  transferToken
} from "../utils/interact";
import { pinFileToIPFS } from "../utils/pinata.js";
import check from "../assets/images/check.png"

const ListPage = () => {

  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [owners, setOwners] = useState([]);
  const [tokens, setTokens] = useState([]);
  const [ selected, setSelected ] = useState();
  const [receiver, setReceiver] = useState()

  const setTokenList = async () => {
    if (walletAddress == "")
      return;

    const token_owners = await getOwnerList();
    var buff = new Array;

    for (var i=0; i<token_owners.length; i++) {
      if (token_owners[i].toString().toUpperCase() == walletAddress.toString().toUpperCase()) {
        var obj = {
          tokenId: i+1,
          metadata: await getTokenMetadata(i+1)
        }

        buff.push(obj)
      }
    }

    console.log(buff)

    setTokens(buff)
  }


  useEffect(async () => {
    const {address, status} = await getWalletConnected();
    setWallet(address)
    setStatus(status);
    
    walletDetecter(); 
  }, []);

  const connectWalletClicked = async () => {
    const response = await connectMetamaskWallet();
    setStatus(response.status);
    setWallet(response.address);
  };

  function walletDetecter() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("Please connect to Metamask.");
        }
      });
    } else {
      setStatus(
        <p>
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You should install Metamask in your browser.
          </a>
        </p>
      );
    }
  }

  const OnListPressed = () => {
    setTokenList()
  }

  const OnNFTStackPressed = ( tokenId ) => {
    setSelected( tokenId );
  }

  const OnTransfer = async () => {
    const from = walletAddress;

    if (walletAddress != "") {
      const tokenId = selected;

      if (receiver != "" && tokenId != null) {
        await transferToken(from, receiver, tokenId)

        setTokenList()
      }
    }
  }

  return (
    <div className="listPanel">
      <button id="listwalletButton" onClick={connectWalletClicked}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>      

      <button id="listButton" onClick={OnListPressed}>
        Get NFT
      </button>

      <br />

      <div style={{display: "flex"}}>
          <h3>Send to</h3>
          <input
            style={{width: 400, marginLeft: 10, borderWidth: 2, borderColor: "black"}}
            type="text"
            placeholder="e.g. 0x458d671773bb4FFc020C4dE27aD06c77283c9115"
            onChange={(event) => setReceiver(event.target.value)}
          />

          <button id="listButton" onClick={OnTransfer}>
            Transfer
          </button>
      </div>

      <br />

      <div className="nftpanel">
        {tokens.map(nft => {
          return (
            <div className="nftstack" onClick={() => OnNFTStackPressed( nft.tokenId )}>
              <img src={nft.metadata.image} className="nftstack" />
              <div className="tokenId">{"#" + nft.tokenId}</div>
              <div>{nft.metadata.name}</div>

              { selected === nft.tokenId ? 
                <img className="check" src={check} alt="logo" />
              : '' }
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListPage;