/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.16.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { ExecuteMsg, Addr, Nft, GetConfigResponse, GetSquadResponse, Squad, GetUserSquadCountResponse, InstantiateMsg, IsCollectionWhitelistedResponse, QueryMsg } from "./TeritoriSquadStaking.types";
export interface TeritoriSquadStakingReadOnlyInterface {
  contractAddress: string;
  getConfig: () => Promise<GetConfigResponse>;
  getUserSquadCount: ({
    user
  }: {
    user: Addr;
  }) => Promise<GetUserSquadCountResponse>;
  getSquad: ({
    owner
  }: {
    owner: Addr;
  }) => Promise<GetSquadResponse>;
  isCollectionWhitelisted: ({
    contractAddr
  }: {
    contractAddr: string;
  }) => Promise<IsCollectionWhitelistedResponse>;
}
export class TeritoriSquadStakingQueryClient implements TeritoriSquadStakingReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.getConfig = this.getConfig.bind(this);
    this.getUserSquadCount = this.getUserSquadCount.bind(this);
    this.getSquad = this.getSquad.bind(this);
    this.isCollectionWhitelisted = this.isCollectionWhitelisted.bind(this);
  }

  getConfig = async (): Promise<GetConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_config: {}
    });
  };
  getUserSquadCount = async ({
    user
  }: {
    user: Addr;
  }): Promise<GetUserSquadCountResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_user_squad_count: {
        user
      }
    });
  };
  getSquad = async ({
    owner
  }: {
    owner: Addr;
  }): Promise<GetSquadResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_squad: {
        owner
      }
    });
  };
  isCollectionWhitelisted = async ({
    contractAddr
  }: {
    contractAddr: string;
  }): Promise<IsCollectionWhitelistedResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_collection_whitelisted: {
        contract_addr: contractAddr
      }
    });
  };
}
export interface TeritoriSquadStakingInterface extends TeritoriSquadStakingReadOnlyInterface {
  contractAddress: string;
  sender: string;
  updateConfig: ({
    owner,
    squadCountLimit
  }: {
    owner?: Addr;
    squadCountLimit?: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  setSupportedCollection: ({
    contractAddr,
    isSupported
  }: {
    contractAddr: string;
    isSupported: boolean;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateCooldown: ({
    cooldownPeriod
  }: {
    cooldownPeriod: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateSquadSize: ({
    maxSquadSize,
    minSquadSize
  }: {
    maxSquadSize: number;
    minSquadSize: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateBonusMultiplier: ({
    bonusMultiplier
  }: {
    bonusMultiplier: number[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  stake: ({
    nfts
  }: {
    nfts: Nft[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  withdraw: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class TeritoriSquadStakingClient extends TeritoriSquadStakingQueryClient implements TeritoriSquadStakingInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateConfig = this.updateConfig.bind(this);
    this.setSupportedCollection = this.setSupportedCollection.bind(this);
    this.updateCooldown = this.updateCooldown.bind(this);
    this.updateSquadSize = this.updateSquadSize.bind(this);
    this.updateBonusMultiplier = this.updateBonusMultiplier.bind(this);
    this.stake = this.stake.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

  updateConfig = async ({
    owner,
    squadCountLimit
  }: {
    owner?: Addr;
    squadCountLimit?: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        owner,
        squad_count_limit: squadCountLimit
      }
    }, fee, memo, funds);
  };
  setSupportedCollection = async ({
    contractAddr,
    isSupported
  }: {
    contractAddr: string;
    isSupported: boolean;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_supported_collection: {
        contract_addr: contractAddr,
        is_supported: isSupported
      }
    }, fee, memo, funds);
  };
  updateCooldown = async ({
    cooldownPeriod
  }: {
    cooldownPeriod: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_cooldown: {
        cooldown_period: cooldownPeriod
      }
    }, fee, memo, funds);
  };
  updateSquadSize = async ({
    maxSquadSize,
    minSquadSize
  }: {
    maxSquadSize: number;
    minSquadSize: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_squad_size: {
        max_squad_size: maxSquadSize,
        min_squad_size: minSquadSize
      }
    }, fee, memo, funds);
  };
  updateBonusMultiplier = async ({
    bonusMultiplier
  }: {
    bonusMultiplier: number[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_bonus_multiplier: {
        bonus_multiplier: bonusMultiplier
      }
    }, fee, memo, funds);
  };
  stake = async ({
    nfts
  }: {
    nfts: Nft[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      stake: {
        nfts
      }
    }, fee, memo, funds);
  };
  withdraw = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      withdraw: {}
    }, fee, memo, funds);
  };
}