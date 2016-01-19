************************************
Installation/Confguration of Witness
************************************

Fork CNX's code base
####################

.. code-block:: sh

   git clone https://github.com/cryptonomex/graphene
   mv graphene/ graphene-testnet
   cd graphene-testnet/
   git branch testnet
   git remote set-url origin https://github.com/BitSharesEurope/graphene-testnet
   git push origin testnet

Installation according to :doc:`../installation/Build`

Configuration
##############

The blockchain parameters can be modified in the `config.hpp`_ file:

.. _config.hpp: https://github.com/cryptonomex/graphene/blob/master/libraries/chain/include/graphene/chain/config.hpp

.. code-block:: sh

   vim libraries/chain/include/graphene/chain/config.hpp


Initial Compilation
###################

.. code-block:: sh

   cmake .
   make

We first need to compile the graphene toolkit so that we can let it
generate a plain genesis file in the proper format.
