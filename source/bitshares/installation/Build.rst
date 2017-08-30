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
                         autoconf libtool git

Boost 1.57
**********

The Boost which ships with Ubuntu 15.04 is too old.  You need to download the
Boost tarball for Boost 1.60.0.

.. code-block:: sh

    export BOOST_ROOT=$HOME/opt/boost_1_60_0
    sudo apt-get update
    sudo apt-get install autotools-dev build-essential \
                         g++ libbz2-dev libicu-dev python-dev
    wget -c 'http://sourceforge.net/projects/boost/files/boost/1.60.0/boost_1_60_0.tar.bz2/download'\
         -O boost_1_60_0.tar.bz2
    sha256sum boost_1_60_0.tar.bz2
    # "686affff989ac2488f79a97b9479efb9f2abae035b5ed4d8226de6857933fd3b"
    tar xjf boost_1_60_0.tar.bz2
    cd boost_1_60_0/
    ./bootstrap.sh "--prefix=$BOOST_ROOT"
    ./b2 install

.. _this mailing list post: http://boost.2283326.n4.nabble.com/1-58-1-bugfix-release-necessary-td4674686.html

Building BitShares
###########################

After downloading the BitShares sources according to :doc:`the download
page <./Sources>`, we can run ``cmake`` for configuration and compile with
``make``:

.. code-block:: sh

    cmake -DBOOST_ROOT="$BOOST_ROOT" -DCMAKE_BUILD_TYPE=Release .
    make 

Note that the environmental variable ``$BOOST_ROOT`` should point to your
install directory of boost if you have installed it manually.

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
