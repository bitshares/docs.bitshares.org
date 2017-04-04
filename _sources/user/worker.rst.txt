**********************
Workers / Budget Items
**********************

Thanks to the funds stored in the reserve pool, BitShares can offer to not only
pay for its own development and protocol improvement but also support and
encourage growth of an ecosystem.

Payouts
#######

A blockchain parameter (defined by shareholders through the committee) defines
the daily available budget. No more than that can be paid at any time to all
workers combined.

The daily budget is distributed as follows:

* The available budget is taken out of reserves pool.
* The budget items are sorted according to their approval rate (``Pro - Con``) in a descending order.
* Starting at the worker with the highest approval rate, the requested daily pay is payed until the daily budget is depleted.
* The worker with the least approval rate that was paid may receive less than the requested pay

Hence, in order to be successfully funded by the BitShares ecosystem, the
shareholder approval for your budget item needs to be highly ranked.

Since the payments for workers from the non-liquid reserve pool result in an
increased supply of BTS, these payments are vesting over a period of time
defined by shareholders.

Working for BitShares
#####################

In order to be get paid by BitShares, a proposal containing

* the date of work begin,
* the date of work end,
* a daily pay (denoted in BTS),
* the worker's name, and
* an internet address.

has to be publish on the blockchain and approved by shareholders.

A worker can also choose on of the following properties:

* **vesting**: *pay to the worker's account*
* **refund**:  *return the pay back to the reserve pool to be used for future projects*
* **burn**:    *destroys the pay thus reducing share supply, equivalent to share buy-back of a company stock.*

A blockchain parameter (defined by shareholders through the committee) defines
the daily available budget. No more than that can be paid at any time to all so
called *workers* combined.

The daily budget is distributed follows:

* The available budget is taken out of reserves pool.
* The budget items are sorted according to their approval rate in a descending order.
* Starting at the worker with the highest approval rate, the requested daily pay is payed until the daily budget is depleted.
* The worker with the least approval rate that was paid may receive less than the requested pay

Hence, in order to be successfully funded by the BitShares ecosystem, the
shareholder approval for your budget item needs to be highly ranked.

Since the payments for workers from the non-liquid reserve pool result in an
increased supply of BTS, these payments are vesting over a period of time
defined by shareholders.

A description on how to create your own worker can be found in the
:doc:`tutorials <../tutorials/worker-create>`.

Pseudo Workers
##############

Three types of pseudo workers exist that are not primarily used to for salary.

Polling Workers
***************

A worker proposal can be used to poll the shareholders for an opinion. Those
workers usually have no or very small pay. Additionally, they come with a
*proposal*, *recommendation* or other topic on which shareholders can publish a
binary opinion (pro, or contra).

Refund Worker
*************

This worker is used to set an approval limit for worker proposals and their
payment by simply refunding his payment/salary to the reserve pool. If its 
amount of daily pay is as large as the daily available funds, and the worker
has highest approval among all worker proposals, all funds will be returned to
the reserves and no one will be payed. If, however, an other worker proposal has
more votes than the refund worker, the proposal gets paid its salary, and the
rest is return.

Burn Worker
***********

This type of worker is similar to the *Refund Worker* above but **burns** his
pay.
