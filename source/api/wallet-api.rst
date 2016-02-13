********************
Wallet API Calls
********************

The wallet (``cli_wallet``) requires a running full node to connect to because
it does not offer P2P or blockchain capabilities directly.

If you have not set up your wallet yet, you can find more information on the
:doc:`../integration/apps/cliwallet` and the :doc:`../integration/apps/cli-faq`
pages.

.. contents:: Table of Contents
   :depth: 2

General Calls
#############
.. doxygenfunction:: graphene::wallet::wallet_api::help
.. doxygenfunction:: graphene::wallet::wallet_api::gethelp
.. doxygenfunction:: graphene::wallet::wallet_api::info
.. doxygenfunction:: graphene::wallet::wallet_api::about
.. doxygenfunction:: graphene::wallet::wallet_api::network_add_nodes
.. doxygenfunction:: graphene::wallet::wallet_api::network_get_connected_peers

Wallet Calls
############
.. doxygenfunction:: graphene::wallet::wallet_api::is_new
.. doxygenfunction:: graphene::wallet::wallet_api::is_locked
.. doxygenfunction:: graphene::wallet::wallet_api::lock
.. doxygenfunction:: graphene::wallet::wallet_api::unlock
.. doxygenfunction:: graphene::wallet::wallet_api::set_password
.. doxygenfunction:: graphene::wallet::wallet_api::dump_private_keys
.. doxygenfunction:: graphene::wallet::wallet_api::import_key
.. doxygenfunction:: graphene::wallet::wallet_api::import_accounts
.. doxygenfunction:: graphene::wallet::wallet_api::import_account_keys
.. doxygenfunction:: graphene::wallet::wallet_api::import_balance
.. doxygenfunction:: graphene::wallet::wallet_api::suggest_brain_key
.. doxygenfunction:: graphene::wallet::wallet_api::get_transaction_id
.. doxygenfunction:: graphene::wallet::wallet_api::get_private_key
.. doxygenfunction:: graphene::wallet::wallet_api::load_wallet_file
.. doxygenfunction:: graphene::wallet::wallet_api::normalize_brain_key
.. doxygenfunction:: graphene::wallet::wallet_api::save_wallet_file

Account Calls
#############
.. doxygenfunction:: graphene::wallet::wallet_api::list_my_accounts
.. doxygenfunction:: graphene::wallet::wallet_api::list_accounts
.. doxygenfunction:: graphene::wallet::wallet_api::list_account_balances
.. doxygenfunction:: graphene::wallet::wallet_api::register_account
.. doxygenfunction:: graphene::wallet::wallet_api::upgrade_account
.. doxygenfunction:: graphene::wallet::wallet_api::create_account_with_brain_key
.. doxygenfunction:: graphene::wallet::wallet_api::transfer
.. doxygenfunction:: graphene::wallet::wallet_api::transfer2
.. doxygenfunction:: graphene::wallet::wallet_api::whitelist_account
.. doxygenfunction:: graphene::wallet::wallet_api::get_vesting_balances
.. doxygenfunction:: graphene::wallet::wallet_api::withdraw_vesting
.. doxygenfunction:: graphene::wallet::wallet_api::get_account
.. doxygenfunction:: graphene::wallet::wallet_api::get_account_id
.. doxygenfunction:: graphene::wallet::wallet_api::get_account_history
.. doxygenfunction:: graphene::wallet::wallet_api::approve_proposal

Trading Calls
#############
.. doxygenfunction:: graphene::wallet::wallet_api::sell_asset
.. doxygenfunction:: graphene::wallet::wallet_api::borrow_asset
.. doxygenfunction:: graphene::wallet::wallet_api::cancel_order
.. doxygenfunction:: graphene::wallet::wallet_api::settle_asset
.. doxygenfunction:: graphene::wallet::wallet_api::get_market_history
.. doxygenfunction:: graphene::wallet::wallet_api::get_limit_orders
.. doxygenfunction:: graphene::wallet::wallet_api::get_call_orders
.. doxygenfunction:: graphene::wallet::wallet_api::get_settle_orders

Asset Calls
#############
.. doxygenfunction:: graphene::wallet::wallet_api::list_assets
.. doxygenfunction:: graphene::wallet::wallet_api::create_asset
.. doxygenfunction:: graphene::wallet::wallet_api::update_asset
.. doxygenfunction:: graphene::wallet::wallet_api::update_bitasset
.. doxygenfunction:: graphene::wallet::wallet_api::update_asset_feed_producers
.. doxygenfunction:: graphene::wallet::wallet_api::publish_asset_feed
.. doxygenfunction:: graphene::wallet::wallet_api::issue_asset
.. doxygenfunction:: graphene::wallet::wallet_api::get_asset
.. doxygenfunction:: graphene::wallet::wallet_api::get_bitasset_data
.. doxygenfunction:: graphene::wallet::wallet_api::fund_asset_fee_pool
.. doxygenfunction:: graphene::wallet::wallet_api::reserve_asset
.. doxygenfunction:: graphene::wallet::wallet_api::global_settle_asset

Governance
##########
.. doxygenfunction:: graphene::wallet::wallet_api::create_committee_member
.. doxygenfunction:: graphene::wallet::wallet_api::get_witness
.. doxygenfunction:: graphene::wallet::wallet_api::get_committee_member
.. doxygenfunction:: graphene::wallet::wallet_api::list_witnesses
.. doxygenfunction:: graphene::wallet::wallet_api::list_committee_members
.. doxygenfunction:: graphene::wallet::wallet_api::create_witness
.. doxygenfunction:: graphene::wallet::wallet_api::update_witness
.. doxygenfunction:: graphene::wallet::wallet_api::create_worker
.. doxygenfunction:: graphene::wallet::wallet_api::update_worker_votes
.. doxygenfunction:: graphene::wallet::wallet_api::vote_for_committee_member
.. doxygenfunction:: graphene::wallet::wallet_api::vote_for_witness
.. doxygenfunction:: graphene::wallet::wallet_api::set_voting_proxy
.. doxygenfunction:: graphene::wallet::wallet_api::set_desired_witness_and_committee_member_count
.. doxygenfunction:: graphene::wallet::wallet_api::propose_parameter_change
.. doxygenfunction:: graphene::wallet::wallet_api::propose_fee_change

Privacy Mode
############
.. doxygenfunction:: graphene::wallet::wallet_api::set_key_label
.. doxygenfunction:: graphene::wallet::wallet_api::get_key_label
.. doxygenfunction:: graphene::wallet::wallet_api::get_public_key
.. doxygenfunction:: graphene::wallet::wallet_api::get_blind_accounts
.. doxygenfunction:: graphene::wallet::wallet_api::get_my_blind_accounts
.. doxygenfunction:: graphene::wallet::wallet_api::get_blind_balances
.. doxygenfunction:: graphene::wallet::wallet_api::create_blind_account
.. doxygenfunction:: graphene::wallet::wallet_api::transfer_to_blind
.. doxygenfunction:: graphene::wallet::wallet_api::transfer_from_blind
.. doxygenfunction:: graphene::wallet::wallet_api::blind_transfer
.. doxygenfunction:: graphene::wallet::wallet_api::blind_history
.. doxygenfunction:: graphene::wallet::wallet_api::receive_blind_transfer

Blockchain Inspection
#####################
.. doxygenfunction:: graphene::wallet::wallet_api::get_block
.. doxygenfunction:: graphene::wallet::wallet_api::get_account_count
.. doxygenfunction:: graphene::wallet::wallet_api::get_global_properties
.. doxygenfunction:: graphene::wallet::wallet_api::get_dynamic_global_properties
.. doxygenfunction:: graphene::wallet::wallet_api::get_object

Transaction Builder
###################
.. doxygenfunction:: graphene::wallet::wallet_api::begin_builder_transaction
.. doxygenfunction:: graphene::wallet::wallet_api::add_operation_to_builder_transaction
.. doxygenfunction:: graphene::wallet::wallet_api::replace_operation_in_builder_transaction
.. doxygenfunction:: graphene::wallet::wallet_api::set_fees_on_builder_transaction
.. doxygenfunction:: graphene::wallet::wallet_api::preview_builder_transaction
.. doxygenfunction:: graphene::wallet::wallet_api::sign_builder_transaction
.. doxygenfunction:: graphene::wallet::wallet_api::propose_builder_transaction
.. doxygenfunction:: graphene::wallet::wallet_api::propose_builder_transaction2
.. doxygenfunction:: graphene::wallet::wallet_api::remove_builder_transaction
.. doxygenfunction:: graphene::wallet::wallet_api::serialize_transaction
.. doxygenfunction:: graphene::wallet::wallet_api::sign_transaction
.. doxygenfunction:: graphene::wallet::wallet_api::get_prototype_operation
