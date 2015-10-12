*********************
Exporting Your Wallet
*********************

In this tutorial, we will export you wallet including all keys to access your
accounts and funds, into a single JSON-formated file. Note that your private
keys will be encrypted and you will be required to provide the corresponding
pass phrase when importing your funds into BitShares 2.0.

BitShares 1.0 Full Client
#########################

Firstly, you need to upgrade your BitShares client to version 0.9.3c. To do the upgrade you need to:

* download the installation file from the `bitshares webpage`_
* uninstall your previous version of the BitShares client
* install the new version

.. _bitshares webpage: http://bitshares.org/download

Once you've upgraded you might want to perform two actions, which might be optional depending on your judgement:

* attempt to sync with the blockchain (this is only necessary with if you think
  that since the last time you did the syncing there have been some new
  transactions involving any of your accounts)
* send all your funds to yourself (this is only necessary if you want to tidy
  up and consolidate your accounts before importing them to BTS 2.0, this is
  optional as everything will be fine if you skip this step)

Since BitShares 0.9.3c, we have a Graphene compatible Export Keys function that can be accessed in two ways:

* by accessing it in the main menu
* by issuing a command in the console.

Using the main menu
*******************

Just select ``File Menu -> Export Wallet``  and you'll be asked to select a
file location where the keys will be exported. 

.. note:: Due to a known bug, if you are on Windows the only option that will
        work for you is the console command - the file exported using the menu will not
        be compatible with BTS 2.0. This refers to Windows only.

Using the console
*****************

* navigate to the console: Account List -> Advanced Settings -> Console
* type: wallet_export_keys [full path to the file]/[file name].json
  e.g. on Windows: ``wallet_export_keys C:\Users\[your user name]\Desktop\keys.json``
  e.g. on Mac: ``wallet_export_keys /Users/[your user name]/Desktop/keys.json``
  e.g. on Linux: ``wallet_export_keys /home/[your user name]/Desktop/keys.json``
* Please replace ``[your user name]`` with your Windows account name.
* and hit Enter

.. note:: The exported wallet file will be encrypted with your pass phrase!
          Make sure to remember it when trying to use that file again!
.. note:: If you are on Windows and your file path tries to access the C drive
          directly (e.g. C:\keys.json) you might need to run the BitShares client as an
          administrator. So the least complicated option will be to aim for the desktop
          as in the example above.

.. image:: ../static/export-wallet-console.png
        :alt: Export compatible keys from Menu bar
        :width: 550px
        :align: center

wallet.bitshares.org
####################

The keys of the `web wallet`_ can be exported simply by downloading a backup
wallet. It can be obtained from the web wallet's preferences: 
(`Account List->Advanced Settings->Wallet`).

.. image:: ../static/export-wallet-backup-webwallet.png
        :alt: Export compatible keys from Menu bar
        :width: 550px
        :align: center

.. _web wallet: http://wallet.bitshares.org
