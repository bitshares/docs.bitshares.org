***************************
Building from Sources
***************************

Downloading the sources
#######################

The sources can be downloaded from github as described 
:doc:`here <../installation/Sources>`.

Dependencies
#############

Development Toolkit
*******************

The following dependencies were necessary for a clean install of Ubuntu 14.04
LTS:

.. code-block:: sh

    sudo apt-get install gcc-4.9 g++-4.9 cmake make \
                         libbz2-dev libdb++-dev libdb-dev \
                         libssl-dev openssl libreadline-dev \
                         autoconf libtool git libcurl4-openssl-dev

Boost (optional)
****************

BitShares-core now supports Boost up to version 1.63.0.
If you have a newer version installed, this is how you can install boost
1.63.0 individually:

.. code-block:: sh

    export BOOST_ROOT=$HOME/opt/boost_1_63_0
    sudo apt-get update
    sudo apt-get install autotools-dev build-essential \
                         g++ libbz2-dev libicu-dev python-dev
    wget -c 'http://sourceforge.net/projects/boost/files/boost/1.63.0/boost_1_63_0.tar.bz2/download'\
         -O boost_1_63_0.tar.bz2
    sha256sum boost_1_63_0.tar.bz2
    # "beae2529f759f6b3bf3f4969a19c2e9d6f0c503edcb2de4a61d1428519fcb3b0"
    tar xjf boost_1_63_0.tar.bz2
    cd boost_1_63_0/
    ./bootstrap.sh "--prefix=$BOOST_ROOT"
    ./b2 install

Building BitShares
###########################

After downloading the BitShares sources according to :doc:`the download
page <./Sources>`, we can run ``cmake`` for configuration and compile with
``make``:

.. code-block:: sh

    cmake -DBOOST_ROOT="$BOOST_ROOT" -DCMAKE_BUILD_TYPE=Release .
    make 

Note that the environmental variable ``$BOOST_ROOT`` points to your
local install directory of boost if you have installed it manually.

Updating BitShares
#######################

A quick tutorial on updating your BitShares binaries can be found
:doc:`here <Upgrades>`.

Distribution Specific Settings
##############################

Ubuntu 14.04
************

As ``g++-4.9`` isn't available in 14.04 LTS, you need to do this first:

.. code-block:: sh

    sudo add-apt-repository ppa:ubuntu-toolchain-r/test
    sudo apt-get update

If you get build failures due to abi incompatibilities, just use gcc 4.9

.. code-block:: sh

    CC=gcc-4.9 CXX=g++-4.9 cmake .


Ubuntu 15.04
************

Ubuntu 15.04 uses gcc 5, which has the c++11 ABI as default, but the boost
libraries were compiled with the cxx11 ABI (this is an issue in many distros).
If you get build failures due to abi incompatibilities, just use gcc 4.9:

.. code-block:: sh

    CC=gcc-4.9 CXX=g++-4.9 cmake .
