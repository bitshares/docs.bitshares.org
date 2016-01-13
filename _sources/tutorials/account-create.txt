********************
Account Registration
********************

The process of registering a new account on the blockchain consists of two
parts:

 * Picking a random brain key and deriving a *priate/public key* pair
 * Create the corresponding account and registering it on the blockchain

Brain, Private and Public Key Derivation
****************************************

We can derive a new set auf keys using the ``suggest_brain_key`` command in the
:doc:`/apps/cliwallet`. The result will look like this:

.. code-block:: js

    >>> suggest_brain_key
    {
      "brain_priv_key": "FILINGS THEREOF ENSILE JAW OVERBID RETINAL PILULAR RYPE CHITTY RAFFERY HANDGUN ERANIST UNPILE TWISTER BABYDOM CIBOL",
      "wif_priv_key": "5JVrt2921aikA7QP5ZCtR2sJh4wbEnsHsK6qo67Shnk9ArKMzNT",
      "pub_key": "BTS7D8jpQ2UwaQxqKyGpuhFQ9LBugCNxDhE7UN2jqgjVQgzG7zo9n"
    }

The hierarchy for these values goes like this:::

    HASH(brain_priv_key) -> wif_priv_key
    HASH(HASH(brain_priv_key)) -> pub_key

Hence, if you keep the brain key, you will be able to recover your required keys
to access your account and/or funds.

Creating and Registering an account
***********************************

If you want to create and register a new account on your own because you have
the funds in another account and don't want someone else involved, you can make
use of the command ``create_account_with_brain_key``:::

    >>> create_account_with_brain_key <brain_key> <account_name> <registrar_account> <referrer_account> <broadcast>

For our example, we would get:::

    >>> create_account_with_brain_key "FILINGS THEREOF ENSILE JAW OVERBID RETINAL PILULAR RYPE CHITTY RAFFERY HANDGUN ERANIST UNPILE TWISTER BABYDOM CIBOL" mywallet myfunds anonymous 100 true

Registering an Account
***************************

If you want to register the account of someone else, all you need is the public
key. In theory, the BitShares blockchain distinguishes three keys for each
account, namely the **owner**, **active**, and the **memo** key.  However, for
the sake of simplicity, we here make use of only one public key (see example
above).

In order to register an account, we need an other account that has enough funds
to pay the fee for the registration transaction. This account will be called
``registrar_account``. Another account ``referrer_account`` can be registered
that will get ``referrer_percentage`` of the referral bonus program. Any
registered account can take the role of the referrer. Hence we here say that
user ``anonymous`` has referred us. The syntax goes like this:::

    >>> register_account name, owner_pubkey, active _pubkey, registrar_account, referrer_account, referrer_percent, broadcast

For our example we say we register a new user called ``mywallet``, use the
pubkey derived above and let our account ``myfunds`` pay the fee:::

    >>> register_account mywallet BTS7D8jpQ2UwaQxqKyGpuhFQ9LBugCNxDhE7UN2jqgjVQgzG7zo9n BTS7D8jpQ2UwaQxqKyGpuhFQ9LBugCNxDhE7UN2jqgjVQgzG7zo9n myfunds anonymous 100 true

.. note:: Note that in order to register an account, the registrar (here:
   ``myfunds``) needs to be a **lifetime member**!


