Overview
========

We here illustrate the steps necessary to securely operate as

* merchant,
* exchange, or
* fiat-gateway.

Merchants
---------

Take funds from customers on the blockchain and deliver a good. Hence, a
merchant should monitor the blockchain and be notified on incoming
transactions. Thanks to (encrypted) transaction memos attachable to each
transfer the merchant can easily distinguish different customers.

Fiat-Gateways
-------------

Gateways take Fiat and convert them to their corresponding bitAsset at a fee
and vice versa. 
For instance:

 1. A customer requests 100 bitUSD from a gateway
 2. The gateway sends an invoice with bank account details
 3. When the funds arrive at the gateway a percentage is taken as a fee and the
    rest is transfered as bitUSD directly into the BitShares wallet of the
    customer.
