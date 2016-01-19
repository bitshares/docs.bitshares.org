***********
Witness FAQ
***********

What is the best way to interact with the witness node?
*******************************************************
The only way you can interact with the witness node is through the CLI
client by using its API.  You can also use the GUI (i.e. the light
client). In the GUI, change `Settings -> API connection`, add
`ws://127.0.0.1:8090/ws` (according to settings of your witness node)
and select it.

How do I check whether the witness node is already synced?
**********************************************************
Run the `info` command in the CLI client and check the `head_block_age` value.

If it seems to be unable to sync beyond a certain date
******************************************************
You should always make sure you use the newest build available `here_`
as earlier releases will get stuck due to hard-forks.

.. _here: https://github.com/bitshares/bitshares-2/releases/latest

Whose private key is `["BTS6MRyAjQ..","5KQwrPbwdL.."]`? Why is it predefined ion the `config.ini`?
**************************************************************************************************
It's a shared key for some special purpose. But I don't remember what it
is. If I remember BM or someone else has ever explained it in the forum,
but I can't find the post right now. Just let it be there. I think if
you comment it out, it will appear again automatically, it's generated
by the code of witness_node.

What is the meaning of all those different text colors in the witness node console?
***********************************************************************************

* green - debug  
* white - info/default  
* yellow/brown - warning  
* red - error  
* blue - some kind of info, I don't know  

Related source files are in `libraries/fc/include/fc/log/` and
`libraries/fc/src/log/`.

How can I close the witness node in a clean way?
************************************************
In windows use `ctrl-c`.

Is it safe to delete logs stored in `witness_node_data_dir\logs\p2p`?
*********************************************************************
Yes, but  

* they're rotated automatically after 24 hours anyway  
* if you don't use them you should probably modify `config.ini` so they
  aren't written to disk in the first place.

What is the difference between public and private testnet?
**********************************************************
Not much. The biggest difference is that public testnet are intended for
wider audience and has fixed (not easy to change parameters), while
private testnets can be setup with arbitrary settings.
