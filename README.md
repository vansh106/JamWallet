<img src = "http://ForTheBadge.com/images/badges/built-by-developers.svg">

# JamWallet
JAMWallet is an ethereum-based wallet with its own cryptocurrency - **JAMCoin** and an inbuilt nominee selection functionality to ease recovery of assets which may get trapped in a wallet due to loss of the *Private Key*.
## How the Nominee Selection System Works
* The JAMWallet essentially allows every user to set up a nominee (back-up) account for himself along with a specified time period which measures the user's inactivity duration. 
* In case of a prolonged period of inactivity of the main account, the Smart Contract assumes that the owner of the main account has lost access to his/her private key.
* This is where the account recovery functionality kicks in. Once the user's inactivity period exceed the time-limit set by the user, the user gets the option to transfer all the JAMCoins in his JAMWallet to the chosen nominee's account.
*  This can be accomplished easily by calling the burn function from the nominee's account. **NOTE: The burn function can only be called by the chosen account's nominee and is only functional after the set timeperiod expires.**

## Application Overview
The application contains the following folders:
* The Node Modules
* Public Folder: This folder cointains all files that are intended to be sent to the client server. This includes HTML, CSS and Images.
* Contracts Folder: This folder contains our solidity code which deploys the Smart Contract that governs the application.
* App.js
* Index.html
* .gitignore: Contains all the information that has not been pushed to the GitHub repository.
* package.json

## Prerequisites
* [NodeJS](https://nodejs.org/en/)
* [Ganache](https://trufflesuite.com/ganache/)
* [MetaMask](https://metamask.io/)
* Solidity VSCode Extension by Juan Blanco

## Technologies and Languages

<img src = "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src = "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"/>
<img src = "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
<img src = "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src = "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
<img src = "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">
<img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
<img src = "https://img.shields.io/badge/Hyper-000000?style=for-the-badge&logo=hyper&logoColor=white">
<img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white"/>
<img src = "https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img src = "https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white">

## Downloading and Running the JAMWallet Project

1. Once you have your NodeJS installed, download the  github repository. This can be done by running the following commands in your [VSCode](https://code.visualstudio.com/) terminal or [Hyper](https://hyper.is/).
``` 
git init
git clone https://github.com/vansh106/JamWallet.git
```
2. Once the github repository has been cloned to your local system, you must install all the node modules and dependencies. This can be accomplished easily by running the following code in your terminal:
```
npm install
```
3. Now, JAMWallet is ready to be deployed. Run the following command in your terminal.
```
node app.js
```
4. Finally, open >http://localhost:5000 through your web browser to view the application.
    
## Other Stats
<img src="https://img.shields.io/github/issues-pr-closed/vansh106/JamWallet.svg"/>
<img src="https://img.shields.io/github/watchers/vansh106/JamWallet.svg"/>
<img src="https://badge-size.herokuapp.com/vansh106/JamWallet/master/node_modules"/>
<img src="https://img.shields.io/github/issues-pr/{username}/{repo-name}.svg"/>
<img src="https://img.shields.io/github/downloads/{username}/{repo-name}/total.svg"/>
