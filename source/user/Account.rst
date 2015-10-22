********
Accounts
********

BitShares 2.0 accounts have to be registered on the blockchain. Upon
registration they are assigned an incrementing identifier (account id).

This comes with many advantages: Besides improved scalability, we have separated
the identity from the transaction authorizing signature. In practice, *owning an
account name* is independent from being able to *spend its funds*. Furthermore,
both rights (we call them *permissions*) can split among an arbitrary complex
relation of people (we call them *authorities*) using *weights* and a required
*thresholds*.

Thanks to separating *authorities* from *identities*, BitShares 2.0 can be much
faster in processing delay while having much smaller transaction sizes. Hence,
all participants are forced to have a named account on the blockchain.
Furthermore, most transactions are tied to an account name and can thus be
linked to individuals (this includes transferes, trades, shorts, etc. but not
*stealthed* transactions).

.. note:: Even though an account is required to be registered properly, we offer
   tools to improve privacy and anonymity.


.. toctree::

    Account-Memberships
    Account-Permissions
    Account-Import
    Account-Create
    Account-Register
