*****************
What is Different
*****************

Here we give a brief overview of what is different in BitShares 2.0 when
compared to satoshi-based blockchains such as Bitcoin, Litecoin, etc.. from the
perspective of an exchange.

Several Tokens
##############

In contrast to all satoshi-based clients, BitShares 2.0 offers a variety of
blockchain tokens. There is not just the BTS (core token) but many others.
Hence, as an exchange you need to distinguish different assets, either by their
id (1.3.0 (BTS), 1.3.1 (USD), ...) or by there symbol.

Registered Identifies
#####################

All participants in BitShares 2.0 are required to have a registered unique name.
This is similar to mail addresses and are used to address recipients for
transfers. As an exchange you will only ever need to tell your customers your
BitShares account name and they will be able to send you funds.

No More Addresses
#################

In BitShares 2.0, we have separated the permissions from the identity. Hence, as
an exchange you don't need to ever deal with addresses again. In fact, you
actually cannot possibly use an address because they only define so called
*authorities* that can control the funds (or the account name). This should
greatly simplify integration as you don't need to store thousands of addresses
and their corresponding private keys.

Memos
#####

In order to distinguish customers, we make use of so called *memos* similar to
BitShares 1, which are encrypted. In contrast to BitShares 1.0, we now have a
separated memo key that is only capable of decoding your memo and cannot spend
funds. Hence, in order to monitor deposits to the exchange you no longer need to
expose the private key to an internet connected machine. Instead you only decode
the memo and leave the funds where they are.

Securing Funds
##############

Funds can be secured by *hierarchical cooperate accounts*. In practise, they
are (Threshold) Multi-Signature accounts from which funds can only be spend if
several signatures are valid. In contrast to mostly every other crypto currency,
you can propose a transaction on the blockchain and don't need other means of
communications to add your approval to a certain transactions. You can find more
details about these account types in

* :doc:`../user/Account-Memberships`
* :doc:`SecuringFunds`

Full Nodes and Clients
######################

We have rewritten the core components from scratch and separated the core P2P
and blockchain components from the wallet. Hence, you can run a full node
without a wallet and connect your wallet to any public (or non-public) full-node
(executable `witness_node`). The communication can be established securely but
the private keys never leave the wallet.

Object IDs
##########

Since BitShares 2.0 offers a variety of features to its users that are different
in many ways, we have decided to address them using *object ids*.
For instance:

+-------------+-----------------------------+
|Object ID     | translates to              |
+==============+============================+
|``1.3.1``     | asset USD                  |
+--------------+----------------------------+
|``1.3.0``     | asset BTS                  |
+--------------+----------------------------+
|``1.2.<id>``  | user with id ``<id>``      |
+--------------+----------------------------+
|``1.6.<id>``  | block signer ``<id>``      |
+--------------+----------------------------+
|``1.11.<id>`` | operation with id ``<id>`` |
+--------------+----------------------------+

Read more in the distinct :doc:`../blockchain/Objects` page.
