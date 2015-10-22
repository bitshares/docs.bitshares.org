***************
User Whitelists
***************

Any live-time member can cast an opinion about other accounts using white- and
black-lists. They **do not** prevent anyone from interacting with your account
but serve as a basis for *list authorities*.

Examples
########

A user ``white`` can be added to the white-list of account ``provider`` with:::

    >>> whitelist_account provider white white_listed true

In contrast a ``black`` user can be added to its blacklist with:::

    >>> whitelist_account provider black black_listed true

Both can be removed from their lists with:::

    >>> whitelist_account provider black no_listing true
    >>> whitelist_account provider white no_listing true

Definition
##########
White- and Black-listing of accounts works with the following API call:

.. doxygenfunction:: graphene::wallet::wallet_api::whitelist_account()

It expects a `new_listing_status` from

.. doxygenenum:: account_listing
