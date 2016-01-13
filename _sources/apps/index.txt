**********************
Blockchain Interaction
**********************

To interface your existing platform with BitShares, you can make use of
:doc:`/api/rpc` and :doc:`/api/websocket` to either a :doc:`full node
</apps/node>` (for monitoring only) or the :doc:`CLI wallet
</apps/cliwallet>` (for accessing funds). 

All API calls are formated in JSON and return JSON only. You can read more about
the API in the separated :doc:`API documentation </api/index>`.

The Graphene toolkit comprises several tools that allow interaction with the
blockchain on different levels and shall thus be briefly described in the
following sections.

.. toctree::
    :maxdepth: 1

    node
    delayednode
    cliwallet
    webwallet
