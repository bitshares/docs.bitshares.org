***********************
Public Graphene Testnet
***********************

We produdly present the first `public testnet`_ based on graphene and
took the opportunity to construct a tutorial from the process.

Public Testnet
##############

* **Access**: 
  
  * Web wallet: `public testnet`_
  * Seed node: ``testnet.bitshares.eu:11010``
  * Chain-id: ``39f5e2ede1f8bc1a3a54a7914414e3779e33193f1f5693510e73cb7a87617447``
  * Sources: 
    
    * `Blockchain <https://github.com/BitSharesEurope/graphene-testnet>`_
    * `Wallet <https://github.com/BitSharesEurope/graphene-ui-testnet>`_
    * `Faucet <https://github.com/BitSharesEurope/faucet-testnet>`_
    * `Python Scripts <https://github.com/BitSharesEurope/testnet-pythonscripts>`_

  * Full nodes: 

    * ``programs/witness_node/witness_node -s testnet.bitshares.eu:11010``

* **Core Unit**: ``TEST``

  * 10k TEST for free upon registration

* **Asset**: ``PEG.RANDOM``

  * price feed at a random walk started at 100.0
  * price feed updated every 15 minutes
  * force Settlement Delay: 300 seconds
  * maintenance collateral ratio: 120%
  * short squeeze protection: 110%

* **Asset**: ``PEG.PARITY``

  * price feed at ``1.0``
  * price feed updated every full hour (UTC)
  * force Settlement Delay: 300 seconds
  * maintenance collateral ratio: 120%
  * short squeeze protection: 110%

* **Witnesses**: currently ``init0`` ... ``init9``
* **Committee members**: currently ``committee-member-1`` ... ``committee-member-10``

.. warning:: On this network, **everything** is allowed. As a
             consequence the *outside* price of any token on this
             blockchain is exactly **zero**. A reset of the blockchain
             may occure at any moment!

.. _public testnet: http://testnet.bitshares.eu

How it has been deployed
########################

We took the opportunity to write the process of customizing and
deploying a graphene blockchain as well as the faucet, web wallet and
feed scripts into a tutorial for everyone to use.

.. toctree::
   :maxdepth: 1

   1-install
   2-genesis
   3-init-blockchain
   4-cli-wallet
   5-committee
   6-webwallet
   7-faucet
   8-nginx
   9-python-library
   10-create-assets
