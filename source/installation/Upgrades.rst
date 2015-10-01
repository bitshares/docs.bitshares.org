Upgrading from Sources
======================

For upgrading from source you only need to execute:::

    git fetch
    git checkout <version>
    git submodule update --init --recursive
    cmake .
    make
