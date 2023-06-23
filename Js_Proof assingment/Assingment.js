// create a variable to hold your NFT's
const OPNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _color, _shirtColor, _hairColor) {
    const OP = {
        "id": OPNFTs.length+1,
        "name": _name,
        "color": _color,
        "shirtColor": _shirtColor,
        "hairColor": _hairColor
    };

    OPNFTs.push(OP);
    console.log("Successfully Minted:", _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<OPNFTs.length;i++){
        console.log("\n")
        console.log("ID:", OPNFTs[i].id);
        console.log("Name:", OPNFTs[i].name);
        console.log("Color:", OPNFTs[i].color);
        console.log("Shirt Color:", OPNFTs[i].shirtColor);
        console.log("Hair Color:", OPNFTs[i].hairColor);
        
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total Supply:", OPNFTs.length);
}

// call your functions below this line

mintNFT("James","Green","Blue","Black");
mintNFT("Tim","Maroon","Black","Brown");
mintNFT("Mark","Blue","Gray","Green");
mintNFT("Kim","Green","Pink","Pink");

getTotalSupply()
listNFTs()
