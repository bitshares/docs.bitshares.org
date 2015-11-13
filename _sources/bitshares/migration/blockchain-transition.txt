******************
Blockchain Upgrade
******************

BitShares 2.0 will be initialized with what is called a *Genesis Block*. That
genesis block will be constructed from the balances of BitShares 1.0. BitShares
1.0 offers many features that need to be migrated into BitShares 2.0. To
simplify the process and reduce the risk of errors, the following conditions
will be met:

* **Funds**:

  * **BTS Tokens**: All BTS balances will be migrated 1:1. The supply not change!
  * **User-Issed-Assets**: All UAI tokens will be migrated 1:1
  * **BitAssets**: Because the new chain is a simple migration and should
    retain all the same "perceived value", all BitAssets and short positions are
    migrated 1:1.

* **Account Names**:

  Under BitShares 2.0, accounts are transferable and have different prices
  based upon the "quality" of the account name. Any "premium" names registered
  on or after 2015-06-08 (US Eastern time) will be given the prefix “bts-“ or
  similar after the migration. All account names registered on or after
  2015-06-18 (US Eastern time) will be prefixed with "bts-" unless they were
  registered using the BitShares Faucet. 

  * **Premium Name**:  No numbers and has vowles 
  * **Cheap Name**:    Has numbers or no vowels 

  All other account names will be migrated with their corresponding
  owner/active keys.

* **Open Orders**:
  Open orders (except open short positions) will **not** migrate and the funds
  will be credited to the corresponding owners.
* **Open Shorts**:
  Short orders will be migrated to BitShares 2.0 on a 1:1 ratio. You collateral
  will be imported as a separated account (e.g. ``usd-collateral-holder-124``)
  under your control.
* **Transaction History**:
  Transaction histories of BitShares 1.0 will be inaccessible in BitShares 2.0.
* **Vesting Balances**:
  Vesting balances will migrate under the existing terms, if two or more vesting
  balances were partially claimed as part of the same transaction prior to the
  snapshot the vesting balances may be merged into a single balance.
* **Unclaimed Delegate Pay**:
  Delegates that did not claim their pay prior to the snapshot will be able to
  claim their pay by importing their corresponding keys similar to any other
  balance.
* **Assets**:
  User issued assets and market pegged assets will migrated with their
  corresponding issuer and holders.
* **Deprecated Features**:
  Some features have turned out to be unreliable or impractical and will thus
  deprecate:

  * **Wall Messages** will not be migrated as the feature is now deprecated
  * Asset **description information** is no longer part of the blockchain state
    and will not be migrated
  * Account **public data** is deprecated and is no longer part of the blockchain state
  * BitShares URL scheme: `bts://` will be deprecated due to migration to hosted
    web wallets
