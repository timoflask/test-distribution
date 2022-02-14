import { useState } from "react";
import { useHistory } from "react-router-dom";

import ethereum from "../assets/images/ethereum.png"
import bnb from "../assets/images/bnb.png"

const MainPage = () => {
    const [action, setAction] = useState("")
    let history = useHistory();

    const OnMintPressed = () => {
        setAction("Mint")
    }

    const OnListPressed = () => {
        setAction("List")
    }

    const OnProceedClicked = () => {
        switch (action) {
            case "Mint":
                history.push("/mint")
                break;
            case "List":
                history.push("/tokens");
                break;
            default:
                break;
        }
    }

    return (
            <div className="mainPage">
                <div>
                    <h1 id="networkTitle">KYC NFT Distribution System</h1>
                    <br/>
                    <br/>
                    <div id="descriptionTitle">Select the <p id="networkId">Mint</p> for minting KYC nft and <p id="networkId">Transfer</p> for trasfering nft.</div>
                    <h3>Only KYC contract owner can use this dApp! 😂</h3>
                    <br/>
                </div>
                <div className="totalAction">
                    <div className={`Mint ${ action === 'Mint' ? 'active' : '' }`} onClick={OnMintPressed}>
                            <button className="btn">
                                <img src={ethereum} alt="logo" />
                            </button>
                    </div>
                    <div className={`Tokens ${ action === 'List' ? 'active' : '' }`} onClick={OnListPressed}>
                            <button className="btn" >
                                <img src={bnb} />
                            </button>
                    </div>
                    <br />
                    <div className="proceed">
                        <button id="proceed" onClick={OnProceedClicked}>PROCEED</button>
                    </div>
                </div>
            </div>
    );
}

export default MainPage;