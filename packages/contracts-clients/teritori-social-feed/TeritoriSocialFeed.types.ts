//@ts-nocheck

/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.25.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export type Addr = string;
export interface Config {
  owner: Addr;
  [k: string]: unknown;
}
export type ExecuteMsg =
  | {
      update_config: {
        owner?: string | null;
        [k: string]: unknown;
      };
    }
  | {
      update_fee_by_category: {
        category: number;
        fee: Uint128;
        [k: string]: unknown;
      };
    }
  | {
      add_free_posts: {
        free_count: Uint128;
        wallets: string[];
        [k: string]: unknown;
      };
    }
  | {
      create_post: {
        category: number;
        identifier: string;
        metadata: string;
        parent_post_identifier?: string | null;
        [k: string]: unknown;
      };
    }
  | {
      update_post: {
        category: number;
        identifier: string;
        metadata: string;
        [k: string]: unknown;
      };
    }
  | {
      react_post: {
        icon: string;
        identifier: string;
        up: boolean;
        [k: string]: unknown;
      };
    }
  | {
      tip_post: {
        identifier: string;
        [k: string]: unknown;
      };
    }
  | {
      delete_post: {
        identifier: string;
        [k: string]: unknown;
      };
    }
  | {
      lock_tokens: {
        [k: string]: unknown;
      };
    }
  | {
      unlock_tokens: {
        amount: Uint128;
        [k: string]: unknown;
      };
    }
  | {
      withdraw_fund: {
        [k: string]: unknown;
      };
    }
  | {
      add_a_i_bot: {
        addr: Addr;
        name: string;
        post_limit: number;
        [k: string]: unknown;
      };
    }
  | {
      create_post_by_bot: {
        category: number;
        identifier: string;
        metadata: string;
        parent_post_identifier?: string | null;
        [k: string]: unknown;
      };
    };
export type Uint128 = string;
export interface InstantiateMsg {
  [k: string]: unknown;
}
export type PostCategory =
  | "Reaction"
  | "Comment"
  | "Normal"
  | "Article"
  | "Picture"
  | "Audio"
  | "Video"
  | "Question"
  | "BriefForStableDiffusion";
export interface PostResult {
  category: number;
  deleted: boolean;
  identifier: string;
  metadata: string;
  parent_post_identifier?: string | null;
  post_by: Addr;
  reactions: Reaction[];
  sub_post_length: number;
  tip_amount: Uint128;
  user_reactions: string[];
  [k: string]: unknown;
}
export interface Reaction {
  count: number;
  icon: string;
  [k: string]: unknown;
}
export interface Post {
  category: number;
  deleted: boolean;
  fee_amount: Uint128;
  identifier: string;
  is_free: boolean;
  metadata: string;
  parent_post_identifier?: string | null;
  post_by: Addr;
  reactions: Reaction[];
  tip_amount: Uint128;
  [k: string]: unknown;
}
export type QueryMsg =
  | {
      config: {
        [k: string]: unknown;
      };
    }
  | {
      query_fee_by_category: {
        category: number;
        [k: string]: unknown;
      };
    }
  | {
      query_locked_tokens: {
        wallet: string;
        [k: string]: unknown;
      };
    }
  | {
      query_available_free_posts: {
        wallet: string;
        [k: string]: unknown;
      };
    }
  | {
      query_post: {
        identifier: string;
        user?: string | null;
        [k: string]: unknown;
      };
    }
  | {
      query_sub_post: {
        identifier: string;
        index: number;
        user?: string | null;
        [k: string]: unknown;
      };
    }
  | {
      query_sub_posts: {
        count: number;
        from: number;
        identifier: string;
        sort: string;
        user?: string | null;
        [k: string]: unknown;
      };
    }
  | {
      query_main_posts: {
        count: number;
        from: number;
        sort: string;
        user?: string | null;
        [k: string]: unknown;
      };
    }
  | {
      query_main_posts_count: {
        [k: string]: unknown;
      };
    };