Requirements
############

* graphviz
* sphinx (http://sphinx-doc.org)
* breathe (https://github.com/michaeljones/breathe)

Configuration
#############

In `source/conf.py` point the graphene key to the xml folder of the graphene
sources:

.. code:: json

    breathe_projects = {
       "graphene": "../../graphene/doxygen/xml/",
    }

Building
########

.. code:: sh

    make html

Output
#######

The resulting html files will be writen to `build/html`.

Deployment
##########

The Makefile can automatically deploy to several domains. Currently, a
deployment installs the page simultanisouly at

 * docs.bitshares.org
 * docs.bitshares.eu

.. code:: sh

   git remote set-url origin github:BitSharesEurope/docs.bitshares.eu 
   git remote     add org    github:BitSharesEurope/docs.bitshares.org
   make deploy

