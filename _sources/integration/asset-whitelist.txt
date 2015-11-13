*********************
Asset User Whitelists 
*********************

Asset User white- and black-lists serve the need for companies to restrict
service to a subset of accounts. For instance, a fiat gateway may require
to follow KYC/AML regulations and can hence only deal with those
customers that have been verified accordingly. If the issuer of an user-issued
asset desires, he may set a restriction so that only users on the white-list
(and/or **not** on the blacklist) are allowed to hold his token.

Instead of putting all verified accounts into the respective asset's white-list
directly, BitShares 2.0 allows to define one or several white-list
*authorities*. In practice, the white- and black-lists of these accounts are
combined and serve as white- and black-lists for the asset.

This allows for easy out-sourcing of KYC/AML verification to 3rd-party
providers.

.. note:: By removing a user from the whitelist, funds can effectively be
   frozen.

Example
#######

Let's assume user ``alice`` wants to own a gateways IOUs called ``G.USD`` which are
restricted by a whitelists. Before being able to own ``G.USD``, ``alice`` needs
to be white-listed by one of the authorities of ``G.USD``. 

Defining an asset's list authorities
************************************
We now define the authorities (i.e. accounts) that define the white- and
blacklist of the asset ``G.USD``. We add ``g-issuer`` and ``kycprovider`` to
the white- and black-list:::

    >>> update_asset G.USD "" "{blacklist_authorities:[g-issuer, kycprovider], whitelist_authorities:[g-issuer, kycprovider], flags:white_list}" true

.. note:: The third argument for ``update_asset`` replaces the existing
   settings. Make sure to have all desired settings present.

Adding ``alice`` to a whitelist
*******************************
Let's assume the only authority is the issuer ``g-issuer`` himself for
simplicity. The issuer now needs to add ``alice`` to ``g-issuer``'s account
whitelist:::

    >>> whitelist_account g-issuer alice white_listed true


Definition
##########
White- and Black-listing of assets works with the following API call:

.. doxygenfunction:: graphene::wallet::wallet_api::update_asset

.. doxygenstruct:: graphene::chain::asset_options
     :members:

.. doxygenenum:: graphene::chain::asset_issuer_permission_flags
