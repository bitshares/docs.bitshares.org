********************************
Exchanges, Bridges, and Gateways
********************************

We here illustrate the steps necessary to securely operate as exchange or
gateway. Gateways take Fiat and convert them to their corresponding bitAsset at
a fee and vice versa. For instance:

1. A customer requests 100 bitUSD from a gateway
2. The gateway sends an invoice with bank account details
3. When the funds arrive at the gateway a percentage is taken as a fee and the
   rest is transfered as bitUSD directly into the BitShares wallet of the
   customer.

For exchanges we recommend to also read :doc:`../what-is-different` and
:doc:`../often-used-calls`.

Integration Instructions
########################

.. toctree::
   :maxdepth: 2

   step-by-step
   ../supporting-features
   ../whitelist
   ../securing-funds

Libraries
#########

.. toctree::
   :maxdepth: 1

   ../libraries/index
