***************
Objects and IDs
***************

In contrast to most cryptocurrency wallets, the BitShares 2.0 has a different
model to represent the blockchain, its transactions and accounts. This chapter
wants to given an introduction to the concepts of *objects* as they are used by
the BitShares 2.0 client. Furthermore, we will briefly introduce the API and
show how to subscribe to object changes (such as new blocks or incoming
deposits). Afterwards, we will show how exchange may monitor their accounts and
credit incoming funds to their corresponding users.

Objects
#######

On the BitShares blockchains there are no addresses, but objects identified by a
unique *id*, an *type* and a *space* in the form:::

    space.type.id

List of commonly used objects
-----------------------------

+--------+------------------------------------+ 
| ID     | Object Type                        |
+========+====================================+ 
| 1.1.x  | base object                        | 
+--------+------------------------------------+ 
| 1.2.x  | account object                     | 
+--------+------------------------------------+ 
| 1.3.x  | asset object                       | 
+--------+------------------------------------+ 
| 1.4.x  | force settlement object            | 
+--------+------------------------------------+ 
| 1.5.x  | committee member object            | 
+--------+------------------------------------+ 
| 1.6.x  | witness object                     | 
+--------+------------------------------------+ 
| 1.7.x  | limit order object                 | 
+--------+------------------------------------+ 
| 1.8.x  | call order object                  | 
+--------+------------------------------------+ 
| 1.9.x  | custom object                      | 
+--------+------------------------------------+ 
| 1.10.x | proposal object                    | 
+--------+------------------------------------+ 
| 1.11.x | operation history object           | 
+--------+------------------------------------+ 
| 1.12.x | withdraw permission object         | 
+--------+------------------------------------+ 
| 1.13.x | vesting balance object             | 
+--------+------------------------------------+ 
| 1.14.x | worker object                      | 
+--------+------------------------------------+ 
| 1.15.x | balance object                     | 
+--------+------------------------------------+ 
| 2.0.x  | global_property_object             | 
+--------+------------------------------------+ 
| 2.1.x  | dynamic_global_property_object     | 
+--------+------------------------------------+ 
| 2.3.x  | asset_dynamic_data                 | 
+--------+------------------------------------+ 
| 2.4.x  | asset_bitasset_data                | 
+--------+------------------------------------+ 
| 2.5.x  | account_balance_object             | 
+--------+------------------------------------+ 
| 2.6.x  | account_statistics_object          | 
+--------+------------------------------------+ 
| 2.7.x  | transaction_object                 | 
+--------+------------------------------------+ 
| 2.8.x  | block_summary_object               | 
+--------+------------------------------------+ 
| 2.9.x  | account_transaction_history_object | 
+--------+------------------------------------+ 
| 2.10.x | blinded_balance_object             | 
+--------+------------------------------------+ 
| 2.11.x | chain_property_object              | 
+--------+------------------------------------+ 
| 2.12.x | witness_schedule_object            | 
+--------+------------------------------------+ 
| 2.13.x | budget_record_object               | 
+--------+------------------------------------+ 
| 2.14.x | special_authority_object           | 
+--------+------------------------------------+ 

Examples
--------
To get a feeling about what these objects do, we recomment to obtain these
exemplary objects.

 * ``2.0.0`` (global blockchain parameters)
 * ``2.1.0`` (current blockchain data)
 * ``1.2.0`` (committee-account details)
 * ``1.3.0`` (core asset details)

Definitions
###########

For advanced users that want to deal with the C++ code of graphene, we here
list the definition of ``object_type`` and ``impl_object_type``:

Protocol Space (1.x.x)
----------------------

.. doxygenenum:: graphene::chain::object_type

Implementattion Space (2.x.x)
-----------------------------

.. doxygenenum:: graphene::chain::impl_object_type
