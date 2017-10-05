**********************
Public Testnet Details
**********************

We produdly present the first `public testnet`_ based on graphene and
took the opportunity to construct a tutorial from the process.

General Information
###################
  
* Web wallet: `public testnet`_
* Seed node: ``testnet.bitshares.eu:11010``
* Chain-id: ``39f5e2ede1f8bc1a3a54a7914414e3779e33193f1f5693510e73cb7a87617447``
* `Genesis Block <https://github.com/BitSharesEurope/graphene-testnet/blob/testnet/genesis.json>`_
* Sources: 
  
  * `Full Node <https://github.com/bitshares/bitshares-core>`_ (branch `testnet`)
  * `Wallet <https://github.com/bitshares/bitshares-ui>`_
  * `Faucet <https://github.com/BitSharesEurope/faucet-testnet>`_
  * `Python Scripts <https://github.com/BitSharesEurope/testnet-pythonscripts>`_

* Full nodes: 

In order to run a full node, get the  `sources
<https://github.com/BitShares/bitshares-core>`_ (branch `testnet`) and
compile them as described in the `build instructions
<../bitshares/install/Build>`_.  Then run the node with:

::

  $ programs/witness_node/witness_node --genesis-json genesis.json

.. warning:: On this network, **everything** is allowed. As a
             consequence the *outside* price of any token on this
             blockchain is exactly **zero**. A reset of the blockchain
             may occure at any moment!

.. _public testnet: http://testnet.bitshares.eu


* **Core Unit**: ``TEST``

  * 10k TEST for free upon registration
