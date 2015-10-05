***********************
Asset Market Whitelists 
***********************

An issuer of an user-issued-asset may want to restrict trading partners for his
assets for legal reasons. For instance, a gateway for US dollar may not be
allowed to let his customers trade USD against CNY because additional licenses
would be required. Hence, in BitShares 2.0 we let issuers chose to restrict
trading partners with white- and black-lists.

Example
#######

A gateway with IOU ``G.USD`` that wants to prevent his customers from trading
``G.USD`` against ``bitCNY`` can do so by adding ``bitCNY`` to the blacklist of
``G.USD`` by issuing:::

    update_asset G.USD "" "{blacklist_markets:[CNY]}" true

Alternatively, if an issuer may want to only open the market ``G.USD : bitUSD``
with his asset, he can do so as well with:::

    update_asset G.USD "" "{whitelist_markets:[USD]}" true

.. note:: The third argument for ``update_asset`` replaces the existing
   settings. Make sure to have all desired settings present.

Defintion
#########
Asset Market white-lists work with the following API call:

.. doxygenfunction:: graphene::wallet::wallet_api::update_asset

.. doxygenstruct:: graphene::chain::asset_options
     :members:

.. doxygenenum:: graphene::chain::asset_issuer_permission_flags
