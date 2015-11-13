**************
Python Example
**************

This python library assists interfacing with a graphene-based network such as
BitShares 2.0.

Installation
############

A graphene Python 3.0 library can be installed by issuing

.. code-block:: sh

    git clone http://github.com/xeroc/python-graphenelib
    cd python-graphenelib
    easy_install-3.4 install autobahn
    python3 setup.py install --user

As you can see, this library requires Python3 and will **not** work properly
with Python2.

Configuration
#############

To make use of this library, we can instruct any full-node to send
notifications for all incoming transactions for any account. Let's discuss the
following example script in more details:

We first prepare our variables and import all required modules

Define the `accountID` and the `memo_wif_key` in `examples/monitor.py`.
The accountID can be obtained from the GUI wallet, or by issuing:::

    >>> get_account <accountname>

If the script exists abnormally, you can continue operations by setting
`last_op` to the last operation id that you have captured before the
abnormal exit.

.. note:: The current implementation has a maxium history size of 100
	  transaction. If you have missed more than 100 transaction with the
	  current implementation, manual fixing is required.

Furthermore, in Graphene, memos are usually encrypted using a distinct memo
key. That way, exposing the memo private key will only expose transaction memos
(for that key) and not compromise any funds. It is thus safe to store the memo
private key in 3rd party services and scripts. The memo public key can be
obtained from the account settings or via command line:::

    >>> get_account <myaccount>

in the cli wallet. The corresponding private key can be obtain from:::

    >>> dump_private_keys

Note that the latter command exposes all private keys in clear-text wif.

Running
#######

The monitoring script can be executed via

.. code-block:: sh

    python3 monitor.py
