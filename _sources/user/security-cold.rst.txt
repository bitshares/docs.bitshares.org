***********************
Securing "Cold" Wallets
***********************

Obtaining A Private Key
#######################

Exporting Existing Private Key
******************************

Existing private keys can be obtained from the ``Permissions`` tab in the
wallet.

.. image:: export-private-key.png
        :alt: Account Permissions
        :width: 550px
        :align: center

Note that this approach should not be considered **cold** as the private keys
has been installed in the browser first.

Offline Webpage
***************

Alternatively, you can use a distinct web project that sole purpose is to
provide a public, private key pair. It can be downloaded from `github`_ and
should be opened in a browser on a non-connected device. The page generated
a random private key, derives the corresponding public key and shows it in plain
text and as QR code.

.. note:: Either copy&paste the private key or print the resulting page because
   the private key cannot be regenerated!

.. _github: https://github.com/xeroc/jshares/archive/master.zip


Updating Account Permissions
############################
As described in the :doc:`account permissions <account-permissions>` and 
:doc:`security permissions <security-permissions>` in theory, we now have to
update the accounts permissions.

.. note:: To be able to update the accounts permissions we need the **owner
   key**. Hence, if your owner key is compromised the active key can be updated
   and you will be locked out of your funds.

Make sure to give it a weight that is higher than the threshold. If you want
that key to be the sole key for accessing the funds, remove all other keys from
the active permissions tabs.

.. image:: update-account.png
        :alt: Account Permissions
        :width: 550px
        :align: center

Importing Keys
##############

Private keys can be reimported using the wallet management console. Then funds
and account features will be available to your wallet again:

.. image:: ../migration/import-keys.png
        :alt: Account Permissions
        :width: 550px
        :align: center
