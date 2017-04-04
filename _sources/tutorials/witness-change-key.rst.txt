**************************************
Change the Signing Key of your Witness
**************************************

As a witness you may want to change your key occasionally or on a
regular basis. You can do so by calling ``update_witness``::

   >>> update_witness <witness-name> <url> <new-publickey> false

By replacing ``false`` with ``true``, the signed transaction will be
broadcast and executed otherwise it will only print the signed
transaction for review.

You can get a new public key by calling::

   >>> suggest_brain_key
