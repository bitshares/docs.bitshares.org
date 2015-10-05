*********************
Exporting Your Wallet
*********************

In this tutorial, we will export you wallet including all keys to access your
accounts and funds, into a single JSON-formated file. Note that your private
keys will be encrypted and you will be required to provide the corresponding
pass phrase when importing your funds into BitShares 2.0.

BitShares 1.0 Full Client
#########################
..  Since BitShares 0.9.3c, we have a Graphene compatible *Export Wallet*
  function that can be selected from the menu bar ands allows to easily
  export your current wallet. 
  .. note:: Version 0.9.3**c** is required for this step. Otherewise the backup
            will have the old, incompatible format!

.. .. image:: ../static/export-menu-bar.png
        :alt: Export compatible keys from Menu bar
        :width: 550px
        :align: center

Since BitShares 0.9.3c, we have a Graphene compatible *Export Wallet*
function that can be issued in the console
(`Account List->Advanced Settings->Console`)::

          wallet_export_keys keys.json

.. image:: ../static/export-wallet-console.png
        :alt: Export compatible keys from Menu bar
        :width: 550px
        :align: center

The resulting file ``keys.json`` will be located in your 

* **Windows**: ``%APPDATA%\Roaming\BitShares`` (Try going to Start->Run and opening %APPDATA%, then open the BitShares folder)
* **Mac**: ``~/Library/Application Support/BitShares`` (Open a Finder window and press Command-Shift-G, then paste in the path)
* **Linux**: ``~/.BitShares``

.. note:: The exported wallet file will be encrypted with your pass phrase! Make
          sure to remember it when trying to use that file again!

.. note:: Bitshares in Windows might need to be started as administrator, if
          you export to the c:/ drive directy, i.e. with ``wallet_export_keys c:\keys.json``


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
