Using White- and Black-lists
============================

Definition
----------
White- and Black-listing of assets and or accounts works with the following API
call:

.. doxygenfunction:: graphene::wallet::wallet_api::whitelist_account()

It expects a `new_listing_status` to from

.. doxygenenum:: account_listing

Examples
--------

Let's assume user `alice` wants to trade bitUSD with user `bobeway` who is a
gateway. `bobeway` can restrict transfers to himself to only those users that
have been verified properly according to some rules. `bobeway` can whitelist
`alice` via:::

    whitelist_account bobeway alice white_listed true

In contrast, customer `eve` skrew up her reputation and `bebeway` decides to not
continue his relation with her. He can remove eve by:::

    whitelist_account bobeway eve no_listing true

or even blacklist here via:::

    whitelist_account bobeway eve black_listed true
