What is the standard Bitshares address structure and format?
############################################################
address = 'BTS'+base58(ripemd(sha512(compressed_pub)))  (checksum obviated)
But addresses are not used directly, instead you have an account (that can be controlled by one or more address, pubkey or another account).
https://bitshares.org/technology/dynamic-account-permissions/

What public key system is used? If elliptic curve, then what is the curve?
##########################################################################
Same as Bitcoin, secp256k1.

Is there a specification for Bitshares scripting language? (assuming there is one)
##################################################################################
No scripting

Is the scripting language turing complete?
##########################################
No scripting

What transaction types are natively supported?
##############################################
Transaction are composed of operations (about ~40 different types).
Example of operations are:
 * transfer_operation
 * limit_order_create_operation
 * asset_issue_operation

Full list
https://github.com/cryptonomex/graphene/blob/master/libraries/chain/include/graphene/chain/protocol/operations.hpp

How is accounting addressed in Bitshares? Is it a Nxt style accounting model or like Bitcoin's UTXO
###################################################################################################
Each account has a finite set of balances, one for each asset type.

What is the average size in Bytes of a Bitshares transaction?
#############################################################
Average wire size of operations is ~30 bytes.
Average mem size of operations is ~100 bytes.
https://github.com/cryptonomex/graphene/blob/master/programs/size_checker/main.cpp

How are transactions validated?
###############################
Each operation has a defined evaluator that checks for preconditions (do_evaluate) and modify the state (do_apply). (After signature verification)

.. code-block:: cpp
    class transfer_evaluator : public evaluator<transfer_evaluator>
       {
          public:
             typedef transfer_operation operation_type;

             void_result do_evaluate( const transfer_operation& o );
             void_result do_apply( const transfer_operation& o );
       }

Are there any special affordances made for privacy?
####################################################
...such as using CoinJoin or a ZK-SNARK based privacy scheme like Zerocash? If
mixing is integrated at the protocl level are you using the standards set forth
by the BNMCKF Mixcoin proposal

Confidential values (same as blockstream elements using the same secp256k1-zkp lib) + stealth addresses.
https://github.com/ElementsProject/elementsproject.github.io/blob/master/confidential_values.md
No mixing, No CoinJoin.

What data structures are used in the blockchain?
################################################

::
    Blocks => transactions => operations => objects.

The blockchain state is contained in an object database that is affected by the operations.
Example objects:::

    account_object
    asset_object
    account_balance_object
    ...

.. code-block:: cpp

    class account_balance_object : public abstract_object<account_balance_object>
       {
          public:
             static const uint8_t space_id = implementation_ids;
             static const uint8_t type_id  = impl_account_balance_object_type;

             account_id_type   owner;
             asset_id_type     asset_type;
             share_type        balance;

             asset get_balance()const { return asset(balance, asset_type); }
             void  adjust_balance(const asset& delta);
       };

What is the format of the block header?
########################################

.. code-block:: cpp

    struct block_header
       {
          digest_type                   digest()const;
          block_id_type                 previous;
          uint32_t                      block_num()const { return num_from_id(previous) + 1; }
          fc::time_point_sec            timestamp;
          witness_id_type               witness;
          checksum_type                 transaction_merkle_root;
          extensions_type               extensions;

          static uint32_t num_from_id(const block_id_type& id);
       };

What is the maximum bitshares block size?
#########################################
Configurable by chain parameters.

.. code-block:: cpp

   struct chain_parameters
   {
      /** using a smart ref breaks the circular dependency created between operations and the fee schedule */
      smart_ref<fee_schedule> current_fees;                       ///< current schedule of fees
      uint8_t                 block_interval                      = GRAPHENE_DEFAULT_BLOCK_INTERVAL; ///< interval in seconds between blocks
      uint32_t                maintenance_interval                = GRAPHENE_DEFAULT_MAINTENANCE_INTERVAL; ///< interval in sections between blockchain maintenance events
      uint8_t                 maintenance_skip_slots              = GRAPHENE_DEFAULT_MAINTENANCE_SKIP_SLOTS; ///< number of block_intervals to skip at maintenance time
      uint32_t                committee_proposal_review_period    = GRAPHENE_DEFAULT_COMMITTEE_PROPOSAL_REVIEW_PERIOD_SEC; ///< minimum time in seconds that a proposed transaction requiring committee authority may not be signed, prior to expiration
      uint32_t                maximum_transaction_size            = GRAPHENE_DEFAULT_MAX_TRANSACTION_SIZE; ///< maximum allowable size in bytes for a transaction
      uint32_t                maximum_block_size                  = GRAPHENE_DEFAULT_MAX_BLOCK_SIZE; ///< maximum allowable size in bytes for a block
      uint32_t                maximum_time_until_expiration       = GRAPHENE_DEFAULT_MAX_TIME_UNTIL_EXPIRATION; ///< maximum lifetime in seconds for transactions to be valid, before expiring
      uint32_t                maximum_proposal_lifetime           = GRAPHENE_DEFAULT_MAX_PROPOSAL_LIFETIME_SEC; ///< maximum lifetime in seconds for proposed transactions to be kept, before expiring
      uint8_t                 maximum_asset_whitelist_authorities = GRAPHENE_DEFAULT_MAX_ASSET_WHITELIST_AUTHORITIES; ///< maximum number of accounts which an asset may list as authorities for its whitelist OR blacklist
      uint8_t                 maximum_asset_feed_publishers       = GRAPHENE_DEFAULT_MAX_ASSET_FEED_PUBLISHERS; ///< the maximum number of feed publishers for a given asset
      uint16_t                maximum_witness_count               = GRAPHENE_DEFAULT_MAX_WITNESSES; ///< maximum number of active witnesses
      uint16_t                maximum_committee_count             = GRAPHENE_DEFAULT_MAX_COMMITTEE; ///< maximum number of active committee_members
      uint16_t                maximum_authority_membership        = GRAPHENE_DEFAULT_MAX_AUTHORITY_MEMBERSHIP; ///< largest number of keys/accounts an authority can have
      uint16_t                reserve_percent_of_fee              = GRAPHENE_DEFAULT_BURN_PERCENT_OF_FEE; ///< the percentage of the network's allocation of a fee that is taken out of circulation
      uint16_t                network_percent_of_fee              = GRAPHENE_DEFAULT_NETWORK_PERCENT_OF_FEE; ///< percent of transaction fees paid to network
      uint16_t                lifetime_referrer_percent_of_fee    = GRAPHENE_DEFAULT_LIFETIME_REFERRER_PERCENT_OF_FEE; ///< percent of transaction fees paid to network
      uint32_t                cashback_vesting_period_seconds     = GRAPHENE_DEFAULT_CASHBACK_VESTING_PERIOD_SEC; ///< time after cashback rewards are accrued before they become liquid
      share_type              cashback_vesting_threshold          = GRAPHENE_DEFAULT_CASHBACK_VESTING_THRESHOLD; ///< the maximum cashback that can be received without vesting
      bool                    count_non_member_votes              = true; ///< set to false to restrict voting privlegages to member accounts
      bool                    allow_non_member_whitelists         = false; ///< true if non-member accounts may set whitelists and blacklists; false otherwise
      share_type              witness_pay_per_block               = GRAPHENE_DEFAULT_WITNESS_PAY_PER_BLOCK; ///< CORE to be allocated to witnesses (per block)
      uint32_t                witness_pay_vesting_seconds         = GRAPHENE_DEFAULT_WITNESS_PAY_VESTING_SECONDS; ///< vesting_seconds parameter for witness VBO's
      share_type              worker_budget_per_day               = GRAPHENE_DEFAULT_WORKER_BUDGET_PER_DAY; ///< CORE to be allocated to workers (per day)
      uint16_t                max_predicate_opcode                = GRAPHENE_DEFAULT_MAX_ASSERT_OPCODE; ///< predicate_opcode must be less than this number
      share_type              fee_liquidation_threshold           = GRAPHENE_DEFAULT_FEE_LIQUIDATION_THRESHOLD; ///< value in CORE at which accumulated fees in blockchain-issued market assets should be liquidated
      uint16_t                accounts_per_fee_scale              = GRAPHENE_DEFAULT_ACCOUNTS_PER_FEE_SCALE; ///< number of accounts between fee scalings
      uint8_t                 account_fee_scale_bitshifts         = GRAPHENE_DEFAULT_ACCOUNT_FEE_SCALE_BITSHIFTS; ///< number of times to left bitshift account registration fee at each scaling
      uint8_t                 max_authority_depth                 = GRAPHENE_MAX_SIG_CHECK_DEPTH;
      extensions_type         extensions;

      /** defined in fee_schedule.cpp */
      void validate()const;
   };


Are there any sharding mechanics currently deployed?
####################################################
No

How are SPV clients handled?
############################
No SPV clients at the moment, each full node can expose a public websocket/http api.

Does the protocol provide mechanisms for overlay protocols to interact such as OR_RETURN?
##########################################################################################
Yes, using a custom_operation.

.. code-block:: cpp

    struct custom_operation : public base_operation
       {
          struct fee_parameters_type {
             uint64_t fee = GRAPHENE_BLOCKCHAIN_PRECISION;
             uint32_t price_per_kbyte = 10;
          };

          asset                     fee;
          account_id_type           payer;
          flat_set<account_id_type> required_auths;
          uint16_t                  id = 0;
          vector<char>              data;

          account_id_type   fee_payer()const { return payer; }
          void              validate()const;
          share_type        calculate_fee(const fee_parameters_type& k)const;
       };


How is time addressed in the blockchain? Is NTP used or some other protocol?
############################################################################
NTP

How do new clients bootstrap into the network?
##############################################
Trusted seed nodes. Knowledge of initial witness keys.

What is the average block time?
###############################
Current 3 seconds, configurable by chain parameters.

Is this done via a gossip protocol or through a federate relay?
###############################################################
Each node immediately broadcast the data it receives to its peers after validating it
https://github.com/cryptonomex/graphene/blob/master/libraries/p2p/design.md
