************************
Establishing a Committee
************************

Our network, of course, needs a committee. We need to initialy create
new accounts and let them apply as committee member.

Creating members
****************

::

    create_account_with_brain_key com0 com0 faucet faucet true
    create_account_with_brain_key com1 com1 faucet faucet true
    create_account_with_brain_key com2 com2 faucet faucet true
    create_account_with_brain_key com3 com3 faucet faucet true
    create_account_with_brain_key com4 com4 faucet faucet true
    create_account_with_brain_key com5 com5 faucet faucet true
    create_account_with_brain_key com6 com6 faucet faucet true

Upgrading members
*****************

Since only lifetime members can be committee members, we need to fund
these accounts and upgrade them accordingly:

::

    transfer faucet com0 100000 CORE "some cash" true
    transfer faucet com1 100000 CORE "some cash" true
    transfer faucet com2 100000 CORE "some cash" true
    transfer faucet com3 100000 CORE "some cash" true
    transfer faucet com4 100000 CORE "some cash" true
    transfer faucet com5 100000 CORE "some cash" true
    transfer faucet com6 100000 CORE "some cash" true
    upgrade_account com0 true
    upgrade_account com1 true
    upgrade_account com2 true
    upgrade_account com3 true
    upgrade_account com4 true
    upgrade_account com5 true
    upgrade_account com6 true

Registering as committee member
*******************************

We can apply for committee with `create_committee_member`:

::
    create_committee_member com0 "" true
    create_committee_member com1 "" true
    create_committee_member com2 "" true
    create_committee_member com3 "" true
    create_committee_member com4 "" true
    create_committee_member com5 "" true
    create_committee_member com6 "" true

Voting with faucet account
**************************

All we need to do know is vote for our own committee members:

::

    vote_for_committee_member faucet com0 true true
    vote_for_committee_member faucet com1 true true
    vote_for_committee_member faucet com2 true true
    vote_for_committee_member faucet com3 true true
    vote_for_committee_member faucet com4 true true
    vote_for_committee_member faucet com5 true true
    vote_for_committee_member faucet com6 true true
