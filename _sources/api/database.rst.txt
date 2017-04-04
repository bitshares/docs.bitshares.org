************
Database API
************

The database API is available from the full node via websockets.

If you have not set up your websockets connection, please read :doc:`this
article <websocket>`.

.. contents:: Table of Contents
   :depth: 2

Objects
#######
.. doxygenfunction:: graphene::app::database_api::get_objects

Subscriptions
#############
.. doxygenfunction:: graphene::app::database_api::set_subscribe_callback
.. doxygenfunction:: graphene::app::database_api::set_pending_transaction_callback
.. doxygenfunction:: graphene::app::database_api::set_block_applied_callback
.. doxygenfunction:: graphene::app::database_api::cancel_all_subscriptions

Blocks and transactions
#######################
.. doxygenfunction:: graphene::app::database_api::get_block_header
.. doxygenfunction:: graphene::app::database_api::get_block
.. doxygenfunction:: graphene::app::database_api::get_transaction
.. doxygenfunction:: graphene::app::database_api::get_recent_transaction_by_id

Globals
#######
.. doxygenfunction:: graphene::app::database_api::get_chain_properties
.. doxygenfunction:: graphene::app::database_api::get_global_properties
.. doxygenfunction:: graphene::app::database_api::get_config
.. doxygenfunction:: graphene::app::database_api::get_chain_id
.. doxygenfunction:: graphene::app::database_api::get_dynamic_global_properties

Keys
####
.. doxygenfunction:: graphene::app::database_api::get_key_references

Accounts
########
.. doxygenfunction:: graphene::app::database_api::get_accounts
.. doxygenfunction:: graphene::app::database_api::get_full_accounts
.. doxygenfunction:: graphene::app::database_api::get_account_by_name
.. doxygenfunction:: graphene::app::database_api::get_account_references
.. doxygenfunction:: graphene::app::database_api::lookup_account_names
.. doxygenfunction:: graphene::app::database_api::lookup_accounts
.. doxygenfunction:: graphene::app::database_api::get_account_count

Balances
########
.. doxygenfunction:: graphene::app::database_api::get_account_balances
.. doxygenfunction:: graphene::app::database_api::get_named_account_balances
.. doxygenfunction:: graphene::app::database_api::get_balance_objects
.. doxygenfunction:: graphene::app::database_api::get_vested_balances
.. doxygenfunction:: graphene::app::database_api::get_vesting_balances

Assets
######
.. doxygenfunction:: graphene::app::database_api::get_assets
.. doxygenfunction:: graphene::app::database_api::list_assets
.. doxygenfunction:: graphene::app::database_api::lookup_asset_symbols

Markets / feeds
###############
.. doxygenfunction:: graphene::app::database_api::get_order_book
.. doxygenfunction:: graphene::app::database_api::get_limit_orders
.. doxygenfunction:: graphene::app::database_api::get_call_orders
.. doxygenfunction:: graphene::app::database_api::get_settle_orders
.. doxygenfunction:: graphene::app::database_api::get_margin_positions
.. doxygenfunction:: graphene::app::database_api::subscribe_to_market
.. doxygenfunction:: graphene::app::database_api::unsubscribe_from_market
.. doxygenfunction:: graphene::app::database_api::get_ticker
.. doxygenfunction:: graphene::app::database_api::get_24_volume
.. doxygenfunction:: graphene::app::database_api::get_trade_history

Witnesses
#########
.. doxygenfunction:: graphene::app::database_api::get_witnesses
.. doxygenfunction:: graphene::app::database_api::get_witness_by_account
.. doxygenfunction:: graphene::app::database_api::lookup_witness_accounts
.. doxygenfunction:: graphene::app::database_api::get_witness_count

Committee members
#################
.. doxygenfunction:: graphene::app::database_api::get_committee_members
.. doxygenfunction:: graphene::app::database_api::get_committee_member_by_account
.. doxygenfunction:: graphene::app::database_api::lookup_committee_member_accounts

Workers
#######
.. doxygenfunction:: graphene::app::database_api::get_workers_by_account

Votes
#####
.. doxygenfunction:: graphene::app::database_api::lookup_vote_ids

Authority / Validation
######################
.. doxygenfunction:: graphene::app::database_api::get_transaction_hex
.. doxygenfunction:: graphene::app::database_api::get_required_signatures
.. doxygenfunction:: graphene::app::database_api::get_potential_signatures
.. doxygenfunction:: graphene::app::database_api::get_potential_address_signatures
.. doxygenfunction:: graphene::app::database_api::verify_authority
.. doxygenfunction:: graphene::app::database_api::verify_account_authority
.. doxygenfunction:: graphene::app::database_api::validate_transaction
.. doxygenfunction:: graphene::app::database_api::get_required_fees

Proposed Transactions
#####################
.. doxygenfunction:: graphene::app::database_api::get_proposed_transactions

Blinded balances
################
.. doxygenfunction:: graphene::app::database_api::get_blinded_balances
