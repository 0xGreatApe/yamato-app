import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ethers } from 'ethers';
import * as yamatoJson from './assets/Yamato.json';
const CONTRACT_ADDRESS = '0xAd4489CA4cEc71D70E19bCf9B77Cdad216788f5D';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class AppService {
  provider: ethers.providers.InfuraProvider;
  contract: ethers.Contract;

  constructor() {
    this.provider = new ethers.providers.InfuraProvider(
      'goerli',
      process.env.INFURA_API_KEY,
    );
    this.contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      yamatoJson.abi,
      this.provider,
    );
  }

  getContractAddress(): string {
    return CONTRACT_ADDRESS;
  }

  async getTotalSupply(): Promise<number> {
    const totalSupplyBN = await this.contract.totalSupply();
    const totalSupplyString = ethers.utils.formatEther(totalSupplyBN);
    const totalSupplyNumber = parseFloat(totalSupplyString);
    return totalSupplyNumber;
  }

  async getAllowance(from: string, to: string): Promise<number> {
    const allowanceBN = await this.contract.allowance(from, to);
    const allowanceString = ethers.utils.formatEther(allowanceBN);
    const allowanceNumber = parseFloat(allowanceString);
    return allowanceNumber;
  }

  async getTransaction(
    hash: string,
  ): Promise<ethers.providers.TransactionResponse> {
    return this.provider.getTransaction(hash);
  }
  requestTokens(address: string, amount: number) {
    throw new Error('Method not implemented.');
    return {txHash: 'txHash', address: address, amount: amount};
  }
  async mintTokens(id: number, address: string) {}
  /*
  async claimPayment(id: number, secret: string, address: string) {
    const paymentOrder = this.paymentOrders.find((po) => po.id == id);
    if (!paymentOrder) {
      throw new NotFoundException('Payment order not found');
    }
    if (paymentOrder.secret !== secret) {
      throw new ForbiddenException('Invalid Secret');
    }

    const privateKey = process.env.PRIVATE_KEY;
    if (!privateKey || privateKey.length <= 0)
      throw new InternalServerErrorException(
        'Wrong server Configuration',
      );
    const wallet = new ethers.Wallet(privateKey);
    const signer = wallet.connect(this.provider);
    const valueInWei = ethers.utils.parseUnits(
      paymentOrder.value.toString(),
      18,
    );
    const mintTx = await this.contract
      .connect(signer)
      .mint(address, valueInWei);
    const txReceipt = await mintTx.wait();

    console.log(
      `tokens minted successfuly at block number: ${txReceipt.blockNumber}`,
    );
  }*/
}
