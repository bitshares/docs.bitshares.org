Migration Remarks
*****************

Recommended Preparations (Optional)
###################################
To ease your migration we recommend that everyone upgrade to BitShares 0.9.3c
prior to the snapshot date and transfer 100% of every asset balance to
yourself. This will consolidate your balances under a single account.

If you missed this action, nothing will be lost. You will still be able to
import all your account names and funds into BitShares 2.0 (see below).

Remarks on Private Keys
#######################
Depending on the users (trade) activity and investors behavior please also note
the following:

* **TITAN Transactions**:
  If there is a chance that you might have received a TITAN transaction
  (default transaction format) since you last opened your wallet, you are
  required to completely synchronize with the BitShares 1.0 blockchain to catch
  that transaction and generate the corresponding private key. After that, you
  can use the graphene-compatible wallet export function.

* **Market transactions**:
  Each market order is associated a key that is derived when placing your
  order and is hence part of your wallet. Please note that for the transition
  to BitShares 2.0, all open orders (except short orders) will be closed and
  the funds returned to their owners.

* **Cold Storage Funds**:
  You cold storage funds can be claimed by simply importing your cold private
  key into BitShares 2.0. This will result in a transaction that claims your
  funds and puts them into your account.

* **PTS/AGS donators**:
  You can import your corresponding private keys into BitShares 2.0 directly to
  claim your funds. Note that, since the web wallet cannot parse your
  `wallet.dat` file, you may be required to manually dump your private keys.
  with a 3rd party tool. If you feel not comfortable with this, we recommend
  you import your `wallet.dat` file into the BitShares 1.0 client and export a
  graphene-compatible wallet file that can be imported in the BitShares 2.0 web
  wallet.

Technical Explanation
#####################
The BitShares 2.0 wallet architecture is vastly different than BitShares 1.0.
In BitShares 1.0, each account consists of dozens or even thousands of keys,
each of which is controlling a small portion of your balance and for TITAN
users, none of the balances associated with your account use the same key as
your account.  Under BitShares 2.0, all of these "balances" become unique
accounts rather than a single logical account. The BitShares 2.0 wallet has
an "import" interface that allows you to specify a set of private keys and
the name of an account that you would like to receive all of the funds
associated with those keys. Then it generates a transaction that spends the
full balances from all accounts associated with those keys to your new
unified BitShares 2.0 account. The BitShares 0.9.x wallet provides a utility
to dump all private keys associated with a given account to make the
migration process easy.
