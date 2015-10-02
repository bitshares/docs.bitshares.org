**************
NodeJS Example
**************

This nodejs script monitors the balance history of an account in a
graphene-based network such as BitShares 2.0.

Installation
############

A NodeJS library to monitor incoming transactions can be downloaded from::

    git clone https://github.com/xeroc/node-graphene-monitor
    cd node-graphene-monitor
    npm install

Configuration
#############

To make use of this library, we can instruct any full-node to send
notifications for all incoming transactions for any account. Let's discuss the
following example script in more details:

We first prepare our variables and import all required modules

Define the `accountID` and the `memo_wif_key`.
The accountID can be obtained from the GUI wallet, or by issuing:::

    get_account <accountname>

If the script exists abnormally, you can continue operations by setting
`last_op` to the last operation id that you have captured before the
abnormal exit.

.. note:: The current implementation has a maxium history size of 100
	  transaction. If you have missed more than 100 transaction with the
	  current implementation, manual fixing is required.

The settings are located in `config.js` and take

 * the rpc connection settings
 * the memo decoding private key in wif format
 * the account ID to monitor
 * the last operation that has been logged successfully in your backed in case
   of ungraceful shutdown

.. note:: The last operation will show a maximum of 100 most recent
	  transactions. If more have been missed due to a down-time. Manual
          intervention is necessary.

Furthermore, in Graphene, memos are usually encrypted using a distinct memo
key. That way, exposing the memo private key will only expose transaction memos
(for that key) and not compromise any funds. It is thus safe to store the memo
private key in 3rd party services and scripts. The memo public key can be
obtained from the account settings or via command line:::

    get_account <myaccount>

in the cli wallet. The corresponding private key can be obtain from:::

    dump_private_keys

Note that the latter command exposes all private keys in clear-text wif.

Running
#######

The script can be executed simply by::

    npm start

and will show all incoming transactions and corresponding (decoded) memo.
