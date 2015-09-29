Exporting Your Wallet
===================================
We offer several options to export your account names and funds from BitShares 1.0:

* **Menu Bar Item** (recommended):
  Since BitShares 0.9.3c, we have a Graphene compatible *Export Wallet*
  function that can be selected from the menu bar ands allows to easily
  export your current wallet. 
  .. note:: Version 0.9.3**c** is required for this step. Otherewise the backup will have the old, incompatible format!

  <img src="support/export-menu-bar.png" alt="Export compatible keys from Menu bar" style="width: 550px;"/>
  :
* **Exporting Brainkey** (wallet.bitshares.org only)
  The keys of the [web wallet](http://wallet.bitshares.org) can be
  exported simply by copying the brainkey provided as backup option. It can
  be obtained from the web wallet's preferences: (`Account List->Advanced Settings->Wallet->Recovery Key`)
  <img src="support/export-brainkey.png" alt="Export Brainkey" style="width: 550px;"/>

* **Manual Exporting**:
  Use the Console in you BitShares 1.0 client 
  (`BitShares 1.0: Account List -> Advanced Settings -> Console`) and type:::

      wallet_export_keys C:\WalletForImport.json

  The file `WalletForImport.json` will be created, which may, depending on
  the size of your wallet, take some time. Note, that the wallet will reply
  with `OK` even though the exporting has not yet been completed.

  .. note:: Version 0.9.3**c** is required for this step. Otherewise the backup will have the old, incompatible format!
