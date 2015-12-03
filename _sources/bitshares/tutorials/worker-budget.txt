.. original author: maqifrnswa

****************
Claim Worker Pay
****************

Every second, `[ 17/(2^32) * reserve fund ]` is allocated for witnesses and
workers where reserve fund is how many BTS are currently not distributed (see
the `source code`_).

.. _source code: https://github.com/cryptonomex/graphene/blob/f85dec1c23f6bf9259ad9f15311b2e4aac4f9d44/libraries/chain/include/graphene/chain/config.hpp

Every hour the total available reserve fund is calculated by finding how many
BTS are available to be distributed and how many BTS will be returned to the
reserve fund (i.e., "burnt") during the next maintenance interval.

First find how many BTS have not been distributed:

::

    # get max_supply from 
    get_object 1.3.0
    # get current_supply from
    get_object 2.3.0

    ==> from_initial_reserve = max_supply - current supply of BTS

Then modify it by adding the accumulated fees and witness budget remaining
(i.e., 1.5 BTS per block is budgeted, so budget remaining is 

::

    1.5 BTS * (number of blocks left in maintenance period+blocks missed by witnesses))

in this maintenance cycle (they will be added to the "reserve fund" permanently
at maintenance)

::

     get_object 2.13.*

     ==> updated reserve fund = from_initial_reserve +  from_accumulated_fees + from_unused_witness_budget

For example:

::

     new >>> get_object 2.13.361
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

Then calculate how much is available to be spent on workers and witnesses is:

::

    total_budget = (updated reserve fund)*(time_since_last_budget)*17/(2^32)  #rounded up to the nearest integer

Ok, now to find how much workers will get in this budget period (1 hour), you
find the smaller of the available pay AFTER subtracting witness budget from the
total_budget OR the worker_budget_per_day/24 from "get_global_properties"

::

    worker_budget=min(total_budget-witness_budget,worker_budget_per_day/24)

That is how much per hour allocated for all workers. NOW you rank each worker
and pay them one hours worth of pay in order or # votes.

References:
***********
https://github.com/cryptonomex/graphene/blob/4c09d6b8ed350ff5c7546e2c3fd15d0e6699daf2/libraries/chain/db_maint.cpp
