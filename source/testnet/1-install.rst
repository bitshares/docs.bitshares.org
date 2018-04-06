************************************
Installation/Confguration of Witness
************************************

Fork the BitShares-Core code base
####################

.. code-block:: sh

   git clone https://github.com/bitshares/bitshares-core.git bitshares-core-testnet
   cd bitshares-core-testnet/
   git checkout testnet

Installation according to :doc:`../installation/Build`

Configuration
##############

Blockchain Parameters
*********************

The blockchain parameters can be modified in the
`libraries/chain/include/graphene/chain/config.hpp
<https://github.com/bitshares/bitshares-core/blob/master/libraries/chain/include/graphene/chain/config.hpp>`_
file:

.. code-block:: sh

   vim libraries/chain/include/graphene/chain/config.hpp

Default Seed Node List
**********************

We can add a default list of seed nodes that the witness is supposed to
try to connect to in `libraries/app/application.cpp
<https://github.com/bitshares/bitshares-core/blob/master/libraries/app/application.cpp>`_
and will add the IP/Address and port of the machine we are going to
setup later already:

    testnet.bitshares.eu:11010

The full changeset can be seen in the corresponding `git commit
<https://github.com/BitSharesEurope/graphene-testnet/commit/94f0a95be6f80cb5a7926ba6cc920dd795eb3a19>`_

Initial Compilation
###################

.. code-block:: sh

   cmake .
   make

We first need to compile the project so that we can let it
generate a plain genesis file in the proper format.
