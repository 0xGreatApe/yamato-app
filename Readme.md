# Yamato Appp

This app builds on the `YamatoTokenizedBallot.sol` and incorporates a full stack application that allows the user to do the following: 
- Mint voting tokens
- Delegating voting power
- Checking vote power
- Casting votes
- Querying results
- view a history of votes and proposals.

The goal of this project is to demonstrate the ability to create a voting system using ERC20 tokens

# Details

Using the “**Solidity By Example”** `Ballot.sol` as the basis for a Ballot contract (code can be found [here](https://docs.soliditylang.org/en/v0.8.17/solidity-by-example.html)), create an ERC20 voting token using OpenZeppelin to enable users to cast votes for specific proposals in a ballot contract.

# Yamato:

Yamato refers to the ancient historical period and clan in Japan, often associated with the early imperial rule and the foundation of the Japanese state.

# File Structure

 

Scripts:

Single POST method:
Request voting tokens from API passing my address
(Optional) Pass data and signature as well
Use these tokens to interact with the tokenized ballot
All other interactions must be made directly on-chain
