**********************
Workers / Budget Items
**********************

This is a primer for those interested in being a worker or want to know what one is.

.. https://bitsharestalk.org/index.php/topic,19507.msg250953.html#msg250953


How to Create a Worker
######################

Workers are currently created with the cli_wallet with the following command
syntax:::
    >>> create_worker owner_account work_begin_date work_end_date daily_pay name url worker_settings broadcast

example, awesomebitsharer is creating a one day worker starting Oct 28 and will
get paid 1 BTS/day (vesting in 1 day) to make an android app. The first command
won't broadcast, this will just check:::

    >>> create_worker "worker-name" "2015-10-28T00:00:00" "2015-10-29T00:00:00" 10000 "Description" "http://URL" {"type" : "vesting", "pay_vesting_period_days" : 1} false

The URL should point to something describing your proposal. We recommend to answer the following questions:

 * What will you do with the funds?
 * By when will you be done?
 * For how much?

The variable ``type`` can be 

* ``refund`` to return your pay back to the pool to be used for future projects, 
* ``vesting`` to pay that you pay yourself, or 
* ``burn`` to destroys your pay thus reducing share supply, equivalent to share buy-back of a company stock

The variable ``pay_vesting_period_days`` is the integer number of days you set for vesting.
Some people don't want workers to withdraw and sell large sums of BTS
immediately, as it puts sell pressure on BTS. Also, if you require vesting, you
have "skin in the game" and thus an incentive to improve BTS value. Pay is pay
per day (not hour or maintenance period) and is in units of 1/10,000 BTS (the
precision of BTS)

To **actually** generate a worker proposal, replace the last ``false`` by ``true``.

How to see proposals on the chain
#################################

Since there is no support in the UI yet, go to http://cryptofresh.com/ and look at the worker proposal chart.
You also can inspect all the objects 1.4.*:::

    >>> unlocked >>> get_object 1.14.4
    get_object 1.14.4
    [{
        "id": "1.14.4",
        "worker_account": "1.2.22517",
        "work_begin_date": "2015-10-21T11:00:00",
        "work_end_date": "2015-11-21T11:00:00",
        "daily_pay": 1000000000,
        "worker": [
          1,{
            "balance": "1.13.235"
          }
        ],
        "vote_for": "2:73",
        "vote_against": "2:74",
        "total_votes_for": "14632377015617",
        "total_votes_against": 0,
        "name": "bitasset-fund-pool",
        "url": "https://bitsharestalk.org/index.php/topic,19317.0.html"
      }
    ]

How to Vote for a Worker
########################

Currently the GUI doesn't have an interface, but you an vote using the CLI:::

    >>> update_worker_votes your-account {"vote_for":["proposal-id"]} true

for example:::

    >>> update_worker_votes "awesomebitsharer" {"vote_for":["1.4.0"]} true

you can also vote against or abstain (remove your vote for or against)::

    >>> update_worker_votes your-account {"vote_against":["proposal-id"]} true
    >>> update_worker_votes your-account {"vote_abstain":["proposal-id"]} true

How Workers Get Paid
####################

Every hour the worker budget is processed and workers are paid in full order of
the number of votes for minus the number of votes against. The last worker to
get paid will be paid with whatever is left, so may receive partial payment. The
daily budget can be estimated by inspecting the most recent budget object 2.13.*
for example:::

    >>> get_object 2.13.361
    get_object 2.13.361
    [{
        "id": "2.13.361",
        "time": "2015-10-28T15:00:00",
        "record": {
          "time_since_last_budget": 3600,
          "from_initial_reserve": "106736452914941",
          "from_accumulated_fees": 15824269,
          "from_unused_witness_budget": 2250000,
          "requested_witness_budget": 180000000,
          "total_budget": 1520913100,
          "witness_budget": 180000000,
          "worker_budget": 1340913100,
          "leftover_worker_funds": 0,
          "supply_delta": 1502838831
        }
      }
    ]


So the daily budget is::

    worker_budget*24 = 1340913100 * 24 = 32181914400 (or 321,8191.44 BTS)
    
There is currently a maximum daily worker pay of 500k BTS, and this can be found
using the ``get_global_properties`` command in the cli_wallet

Technical Details
#################

Every second, ::

      [ 17/(2^32) * reserve fund ]

is allocated for witnesses and workers. The reserve fund is maximum number of
BTS available less those currently in circulation (`source`_)

.. _source: https://github.com/cryptonomex/graphene/blob/f85dec1c23f6bf9259ad9f15311b2e4aac4f9d44/libraries/chain/include/graphene/chain/config.hpp

Every hour the total available reserve fund is calculated by finding how many
BTS are available to be distributed and how many BTS will be returned to the
reserve fund (i.e., "burnt") during the next maintenance interval.

First find how many BTS have not been distributed:::

    >>> from_initial_reserve = max_supply - current supply of BTS

The max_supply can be obtained by::

    >>> get_object 1.3.0

and the current_supply is given in::

   >>> get_object 2.3.0

Modify it by adding the accumulated fees and witness budget remaining
(i.e., 1.5 BTS per block is budgeted, so budget remaining is 1.5 BTS * (number
of blocks left in maintenance period+blocks missed by witnesses)) in this
maintenance cycle (they will be added to the "reserve fund" permanently at
maintenance)::

    updated reserve fund = from_initial_reserve + from_accumulated_fees + from_unused_witness_budget

variables all from: ``get_object 2.13.*`` (choose the most recent one, for example)

Next calculate how much is available to be spent on workers and witnesses is:::

    total_budget = (updated reserve fund)*(time_since_last_budget)*17/(2^32)

rounded up to the nearest integer

Ok, now to find how much workers will get in this budget period (1 hour), you
find the smaller of the available pay AFTER subtracting witness budget from the
``total_budget`` OR the ``worker_budget_per_day/24`` from ``get_global_properties``::

    worker_budget=min( total_budget - witness_budget , worker_budget_per_day / 24 )

That is how much per hour allocated for all workers. NOW you rank each worker
and pay them one hours worth of pay in order or # votes.
