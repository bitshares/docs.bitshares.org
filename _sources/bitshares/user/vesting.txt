****************
Vesting Balances
****************

In BitShares 2, some balances are vesting over time. This feature has
been introduced initially in BitShares 1 when merging several
blockchain businesses into one blockchain.

Now, we make even more use of this functionality in such that an
accounts income in form of

* worker pay,
* witness pay,
* the referral program, or
* cashback

is vesting over several days with different strategies.

For instance, a worker can define for how long he would like his pay to
vest to encourage shareholders to vote for him due to no imminent
additional sell pressure from the worker.

Strategies
==========

CCD / Coin Days Destroyed
-------------------------

The economic effect of this vesting policy is to require a certain
amount of "interest" to accrue before the full balance may be withdrawn.
Interest accrues as coindays (balance * length held). If some of the
balance is withdrawn, the remaining balance must be held longer.

Linear Vesting with Cliff
-------------------------

This vesting balance type is used to mimic traditional stock vesting
contracts where each day a certain amount vests until it is fully
matured.

Tutorials
=========

.. toctree::
   :maxdepth: 1

   ../tutorials/vesting-list
   ../tutorials/vesting-claim
