************************
Wallet Merchant Protocol
************************

The purpose of this protocol is to enable a merchant to request payment from the
user via a hosted wallet provider or via a browser plugin. We will assume that
the wallet is hosted at ``https://wallet.org`` and that the merchant is hosted
at ``https://merchant.org``.

Privacy Concerns
################

The goal of this protocol is to maintain user and merchant privacy from
the wallet provider which should never have direct access to the invoice
data.

To securely pass data from ``https://merchant.org`` to the javascript wallet
hosted at ``https://wallet.org``, the data will have to be passed after the
``#``. Assuming the wallet provider is not serving up pages designed to
compromise your privacy, only your web browser will have access to the invoice
data.

Step 1: Define your Invoice via JSON
####################################

This invoice provides all of the data needed by the wallet to display an invoice
to the user.

::

    {
       "to" : "merchant_account_name",
       "to_label" : "Merchant Name",
       "memo" : "Invoice #1234",
       "currency": "BTS",
       "line_items" : [
            { "label" : "Something to Buy", "quantity": 1, "price" : "1000.00 SYMBOL" },
            { "label" : "10 things to Buy", "quantity": 10, "price" : "1000.00 SYMBOL" },
            { "label" : "User Specified Price", "quantity": 1, "price" : "CUSTOM SYMBOL" },
            { "label" : "User Asset and Price", "quantity": 1, "price" : "CUSTOM" }
        ],
        "note" : "Something the merchant wants to say to the user",
        "callback" : "https://merchant.org/complete"
    }

By itself this data is 579 characters which after URL encoding is 916
characters, with a 2000 character limit this approach doesn't scale as
well as we would like.

Step 2: Compress your JSON representation
#########################################

Using `LZMA-JS <https://github.com/nmrugg/LZMA-JS/>`__ library to
compress the JSON into a binary array. This will be the most compact
form of the data. After running the compression the example JSON was
reduced to 281 bytes from 579 bytes.

Step 3: Convert to Base58
#########################

Using the `bs58 <http://cryptocoinjs.com/modules/misc/bs58/>`__ library
encode the compressed data in base58. Base58 is URL friendly and size
efficient. After converting to base58 the string will be 385 characters
which can easily be passed in a URL and easily support much larger
invoices.

Step 4: Pass to Wallet
######################

Once the Base58 data is known, it can be passed to the wallet with the
following URL:::

    https://wallet.org/#/invoice/BASE58BLOB

Step 5: Receive Callback from Wallet
####################################

After the wallet has signed a transaction, broadcast it, and gotten
confirmation from https://wallet.org that the transaction was included
in ``block 12345`` as ``transaction 4`` wallet will direct the user to
``https://merchant.org/complete?block=12345&trx=4``

The merchant will then request that transaction from
``https://wallet.org/api?block=12345&trx=4`` which will respond with the
transaction that was included in the blockchain. The merchant will decrypt the
memo from the transaction and use memo content to confirm payment for the
invoice.

Step 6: Payment Complete
########################

At this point the user has successfully made a payment and the merchant
has verified the payment has been received without having to maintain a
full node.

Example Python script
#####################

.. code-block:: python

    import json
    import lzma
    from graphenebase.base58 import base58encode, base58decode
    from binascii import hexlify, unhexlify

    invoice = {
        "to": "bitshareseurope",
        "to_label": "BitShares Europre",
        "currency": "EUR",
        "memo": "Invoice #1234",
        "line_items": [
            {"label": "Something to Buy", "quantity": 1, "price": "10.00"},
            {"label": "10 things to Buy", "quantity": 10, "price": "1.00"}
        ],
        "note": "Payment for reading awesome documentation",
        "callback": "https://bitshares.eu/complete"
    }

    compressed = lzma.compress(bytes(json.dumps(invoice), 'utf-8'), format=lzma.FORMAT_ALONE)
    b58 = base58encode(hexlify(compressed).decode('utf-8'))
    url = "https://bitshares.openledger.info/#/invoice/%s" % b58

    print(url)
