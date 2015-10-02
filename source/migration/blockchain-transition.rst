******************
Blockchain Upgrade
******************

* **Funds**:

  * **BTS Tokens**: All BTS balances will be migrated 1:1
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

  * **Premium Name**:  No Numbers and has Vowles 
  * **Cheap Name**:    Has Numbers or No Vowels 

  All other account names will be migrated with their corresponding
  owner/active keys.

* **Open Orders**:
  All open (non-short) orders will be canceled prior to the snapshot and their
  funds returned to their owners.
* **Open Shorts**:
  Short orders will be migrated to BitShares 2.0 on a 1:1 ratio. You collateral
  will be imported as a separated account under your control.
* **Transaction History**:
  Transaction histories of BitShares 1.0 will be inaccessible in BitShares 2.0.
* **Vesting Balances**:
  Vesting balances will migrate under the existing terms, if two or more vesting
  balances were partially claimed as part of the same transaction prior to the
  snapshot the vesting balances may be merged into a single balance.
* **Deprecated Features**:

  * Wall Messages will not be migrated as the feature is now deprecated
  * Asset name/description information is no longer part of the blockchain state
  * Account public data is deprecated and is no longer part of the blockchain state
  * BitShares URL scheme: `bts://` will be deprecated due to migration to hosted
    wallets
