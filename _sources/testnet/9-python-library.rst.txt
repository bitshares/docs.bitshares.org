******************************
Installation of Python Library
******************************

Requirements
############

First, we need to install `pip3` which will deal with the packages
dependencies:

.. code-block:: sh

   sudo apt-get install python3-pip

Installation
############

Afterwards, we can fetch the python libraries from github and install
it:
.. code-block:: sh

   git clone https://github.com/xeroc/python-graphenelib
   cd python-graphenelib/

   pip3 install --user -r requirements.txt
   python3 setup.py install --user

Usage
#####

The usage of this library is well documented on

* https://readthedocs.org/projects/python-graphenelib/
