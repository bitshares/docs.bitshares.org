Requirements
============

* graphviz
* sphinx (http://sphinx-doc.org)
* breathe (https://github.com/michaeljones/breathe)

Configuration
=============

In `source/conf.py` point the graphene key to the xml folder of the graphene
sources:

    breathe_projects = {
       "graphene": "../../graphene/doxygen/xml/",
    }

Building
========

    make html

Results
=======

The resulting html files will be writen to `build/html`.
