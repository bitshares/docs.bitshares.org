*********************
Importing Your Wallet
*********************

Web Wallet
##########

The web wallet of BitShares 2.0 has a **Wallet management Console.** that will
help you import your funds. It can be access via `BitShares 2.0: Settings -> Wallets` 

.. image:: ../static/wallet-management-console.png
        :alt: Wallet Management Console in BitShares 2.0
        :width: 550px
        :align: center

Here you can provide the wallet backup file produced from BitShares 0.9.3c
You will be asked to define where to put your individual balances if you have
multiple accounts.

.. image:: ../static/import-keys.png
        :alt: Import Wallet Backup from BitShares 1.0
        :width: 550px
        :align: center

After confirming all required steps, your accounts and the balances should
appear accordingly.

CLI wallet
##########

The wallet backup file can be imported by ::

    import_accounts <path to exported json> <password of wallet you exported from>

Note that this doesn't automatically claim the balances. They have to be
imported one by one (unless this has been updated recently).
The proper syntax to do so is::

    import_balance <account name> <private key> true

But I always import my accounts and then use the gui to import my balances cause
it's way easier.
