import { useEffect, useState } from "react";
import {
  connectMetamaskWallet,
  getWalletConnected,
  mint,
  getContractOwner,
  getTotalSupply,
  getOwnerList
} from "../utils/interact";
import { pinFileToIPFS } from "../utils/pinata.js";
import Select from 'react-select';

const Minter = (props) => {
  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  /////////// metadata params /////////////////////
  const [name, setName] = useState("")
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("")

  const [fullreportUrl, setFullReportUrl] = useState("")
  const [identitydoc, setIdentityDocument] = useState("")
  const [selfie, setSelFie] = useState("");
  const [fullname, setFullName] = useState("");
  const [nationality, setNationality] = useState("");
  const [address, setAddress] = useState("")
  const [dob, setDOB] = useState("")
  const [gender, setGender] = useState("")
  const [verifiedproject, setVerifiedProject] = useState("")
  const [verifiedby, setVerifiedBy] = useState("")
  const [createdtime, setCreatedTime] = useState("")


  var url = ""
 
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

  const walletDetecter = async () => {
    const contractOwner = await getContractOwner();

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          if (accounts[0].toString().toUpperCase() == contractOwner.toString().toUpperCase()) {
            setWallet(accounts[0]);
            setStatus("You are contract owner so you can mint. Write a message in the text-field above.");
          } else {
            setWallet("")
            setStatus("You are not contract owner so you can't use this dapp for minting KYC nft.");
          }
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
  
  const setUploadImagePinata = async () => {
    if (selectedFile == null)
      return;

    const waitStatus = "Please wait.";
    setStatus(waitStatus)
    var pinataResponse  = await pinFileToIPFS(selectedFile)
    if (pinataResponse.success) {
      console.log(pinataResponse.pinataUrl)
      // setURL(pinataResponse.pinataUrl)
      url = pinataResponse.pinataUrl
      return true;
    } else {
      return false;
    }
  }

  const onMintPressed = async () => {
    console.log(walletAddress)

    if (walletAddress == "")
      return;

    var uploadSuccess = await setUploadImagePinata();

    if (name.trim() == "" || description.trim() == "" || fullreportUrl.trim() == "" ||
    identitydoc.trim() == "" || selfie.trim() == "" || fullname.trim() == "" ||
    nationality.trim() == "" || address.trim() == "" || dob.trim() == "" ||
    gender.trim() == "" || verifiedproject.trim() == "" || verifiedby.trim() == ""
    ) {
      const typeError = "Please make sure all fields are completed before minting."
      setStatus(typeError);
      return;
    }


    setCreatedTime((new Date()).toGMTString())

    const attributes = [
      {
        trait_type: "Full report URL",
        value: fullreportUrl
      },
      {
        trait_type: "Identity document",
        value: identitydoc
      },
      {
        trait_type: "Selfie",
        value: selfie
      },
      {
        trait_type: "Full name",
        value: fullname
      },
      {
        trait_type: "Nationality",
        value: nationality
      },
      {
        trait_type: "Address",
        value: address
      },
      {
        trait_type: "DOB",
        value: dob
      },
      {
        trait_type: "Gender",
        value: gender
      },
      {
        trait_type: "Verified project",
        value: verifiedproject
      },
      {
        trait_type: "Verified by",
        value: verifiedby
      },
      {
        trait_type: "Created Time",
        value: (new Date()).toGMTString()
      }
    ]

    console.log(attributes)

    if (uploadSuccess) {
      // const { success, status } = await new_mint(name, url, description, attributes);
      const { success, status } = await mint(name, url, description, attributes);
      setStatus(status);
      if (success) {

        url = ""
      }
    } else {
      const retryStatus = "Please retry to mint.";
      setStatus(retryStatus)      
    }
  };

  const identityDocumentOptions = [
    { value: 'Passport', label: 'Passport' },
    { value: 'Drivers', label: 'Drivers' },
    { value: 'ID card', label: 'ID card' },
    { value: 'Residence permit', label: 'Residence permit' },
  ]

  const selfieOptions = [
    { value: 'Verified', label: 'Verified' },
    { value: 'Not verified', label: 'Not verified' },
    { value: 'Incomplete', label: 'Incomplete' },
  ]

  const fullnameOptions = [
    { value: 'Verified', label: 'Verified' },
    { value: 'Unverified', label: 'Unverified' },
  ]

  const nationalityOptions = [
    { value: 'Verified', label: 'Verified' },
    { value: 'Unverified', label: 'Unverified' },
  ]

  const addressOptions = [
    { value: 'Verified', label: 'Verified' },
    { value: 'Unverified', label: 'Unverified' },
  ]

  const dobOptions = [
    { value: 'Verified', label: 'Verified' },
    { value: 'Unverified', label: 'Unverified' },
  ]

  const genderOptions = [
    { value: 'Verified', label: 'Verified' },
    { value: 'Unverified', label: 'Unverified' },
  ]

  return (
    <div className="Minter">
      <button id="walletButton" onClick={connectWalletClicked}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <form>
        <div>
          <h3>Name</h3>
          <input
            type="text"
            placeholder="e.g. TAASLABS KYC #00001 | Project 1"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <h3>NFT Image</h3>
          <input 
                  type="file"
                  accept=".png, .jpg, .gif, .mp4"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
            />
        </div>

        <div>
          <h3>Description</h3>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          >

          </textarea>
          {/* <input
            type="textarea"
            placeholder="e.g. "
            onChange={(event) => setDescription(event.target.value)}
          /> */}
        </div>

        <br></br>
        <br></br>
        <br></br>


        <div>
          <h3>Full report URL</h3>
          <input
            type="text"
            placeholder="e.g. "
            onChange={(event) => setFullReportUrl(event.target.value)}
          />
        </div>

        <div>
          <h3>Identity Document</h3>
          <Select options = {identityDocumentOptions} onChange={e => setIdentityDocument(e.value)} />
        </div>

        <div>
          <h3>Selfie</h3>
          <Select options = {selfieOptions} onChange={e => setSelFie(e.value)}/>
        </div>

        <div>
          <h3>Full name</h3>
          <Select options = {fullnameOptions} onChange={e => setFullName(e.value)}/>
        </div>

        <div>
          <h3>Nationality</h3>
          <Select options = {nationalityOptions} onChange={e => setNationality(e.value)} />
        </div>

        <div>
          <h3>Address</h3>
          <Select options = {addressOptions} onChange={e => setAddress(e.value)}  />
        </div>

        <div>
          <h3>DOB</h3>
          <Select options = {dobOptions} onChange={e => setDOB(e.value)}  />
        </div>

        <div>
          <h3>Gender</h3>
          <Select options = {genderOptions} onChange={e => setGender(e.value)}  />
        </div>

        <div>
          <h3>Verified Project</h3>
          <input
            type="text"
            placeholder="e.g. "
            onChange={(event) => setVerifiedProject(event.target.value)}
          />
        </div>

        <div>
          <h3>Verfied by</h3>
          <input
            type="text"
            placeholder="e.g. "
            onChange={(event) => setVerifiedBy(event.target.value)}
          />
        </div>     

        <div>
          <h3>Created time</h3>
          <div>{createdtime}</div>
        </div>
      </form>
      <button id="mintButton" onClick={onMintPressed}>
        Mint
      </button>

      <p id="statusLabel">Status</p>
      <p id="status">
        {status}
      </p>
      <br/>
      <br/>
    </div>
  );
};

export default Minter;
