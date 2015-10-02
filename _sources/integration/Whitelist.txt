****************************
Using White- and Black-lists
****************************

White- Black-Lists exist for assets and for (lifetime member) accounts. While
the latter can only be used to cast an opinion about another account, lists for
assets serve a very practical need.

The issuer of an asset can define how is able to hold (and thus trade) an asset
and how is not.

Examples
########

Let's assume user `alice` wants to own `G.USD` which is restricted by a
whitelists. Whenever someone tries to send `G.USD` to `alice`, the blockchain
will reject the transaction as invalid. Only after being added to the assets's
whitelist by the issuer authority, alice will be able to hold `G.USD`.

.. note:: By removing a user from the whitelist, funds can effectively be
   frozen.

Definition
##########
White- and Black-listing of assets and or accounts works with the following API
call:

.. doxygenfunction:: graphene::wallet::wallet_api::whitelist_account()

It expects a `new_listing_status` to from

.. doxygenenum:: account_listing
