*********
Guia API 
*********

Esta página sirve como una referencia completa para la API de Graphene y 
su blockchain, como por ejemplo :doc:`../bitshares/index` y 
:doc:`../muse/index`.


Las APIs están separadas en dos categorías, que son

* la **API blockchain** que se utiliza para consultar datos de blockchain (cuenta, activos, historial de trading, etc) y
* la **API Wallet** que tiene tus claves privadas cargadas y es necesaria cuando se interactúa con la blockchain con nuevas transacciones.

.. note:: Para interactúar con *el monedero* necesitas ejercutar 
          :doc:`../integration/apps/cliwallet`. Ni el 
          **light-wallet**, ni el **monedero web** te proporcionarán 
          una API.


A diferencia de muchos ecosistemas existentes, no hay servicios centralizados que 
te permitan acceder a las llamadas de una API privada después de una autenticación 
exitosa. En vez de eso ejecuta tu monedero (y opcionalmente un nodo completo) 
**localmente** y este con **tu propio proveedor de servicios API**. Obviamente, esto 
tiene la ventaja de que no necesitas dar acceso a tus fondos a ningún tercero, pero 
tiene la leve desventaja de que necesitas ejecutar una :doc:`aplicación monedero 
<../integration/apps/cliwallet>`, que sin embargo no descarga toda la blockchain 
para su verificación. Si gestionas un negocio sensible, te recomendamos que también 
ejecutes un nodo completo local para descargar y verificar la blockchain e interactúes 
con tu monedero con tu nodo completo local.


Esta página te dará una descripción detallada de ambas categorías de API, 
Llamadas de Procedimiento Remoto y Websockets, y dará una introducción a muchas 
llamadas disponibles.


Interconectando con Graphene
############################

El conjunto de llamadas disponibles depende de si se conecta a un nodo completo
(``witness_node``) o la monedero (``cli_wallet``). Ambos admiten RPC-JSON. El
nodo completo también es compatible con el protocolo websocket con notificaciones.

A qué red de blockchain te conectas (BitShares, MUSE, ..) depende de la 
configuración del nodo completo y el monedero. Si ejecutas un nodo completo, 
te recomendamos conectar tu monedero a tu nodo completo local, aunque también 
podrías conectarte a cualquier otro nodo completo público.


.. graphviz::

   digraph foo {
    rankdir=LR;
    ranksep=0.5;
    nodesep=0.1;
    overlap=false;
    splines=ortho;

    node [shape=box];
    node [fontname=Verdana,fontsize=12]
    node [style=filled]
    node [fillcolor="#EEEEEE"]
    node [color="#EEEEEE"]
    edge [color="#31CEF0", dir=back, fontsize=9, fontname=Verdana]

    "P2P network" -> "Full Node" [dir="both"]
    "Full Node" -> "Blockchain API"
    "Full Node" -> "Wallet" -> "Withdraw API"

    {rank=same "Withdraw API" "Blockchain API"}
   }

Para negocios sensibles que desean garantizar que los depósitos sean irreversibles, 
recomendamos el uso de :ref:`Configuración de Alta Seguridad <highsecuritynetworksetup>`. 
Que contiene un *nodo retrasado* para pasar sólo transacciones irreversibles a la API.


.. note:: Todas las llamadas API tienen formato en JSON y sólo devuelven JSON.

API Wallet 
----------

Este capítulo presenta las llamadas disponibles a través de wallet API. Si aún no 
has configurado tu monedero, puedes encontrar más información en las páginas 
:doc: `../integration/apps/cliwallet` y :doc: `../integration/apps/cli-faq`.




.. toctree::
   :maxdepth: 1

   rpc
   wallet-api

API(s) de Blockchain
--------------------

La API de blockchain se puede usar para obtener cualquier clase de datos almacenados 
en la blockchain. Además de almacenar datos en la propio blockchain (bloques, 
transacciones, etc.), los objetos de nivel superior (como cuentas, saldos, etc...) 
se pueden recuperar a través de la base de datos del nodo completo.

No es necesario ejecutar un nodo completo local si deseas consultar un determinada
blockchain o base de datos, pero también puedes consultar cualquier nodo público 
existente para información.


.. toctree::
   :maxdepth: 1

   rpc
   websocket
   blockchain-api


Objetos de la Blockchain y sus Identificadores
----------------------------------------------

A diferencia de otros proyectos, la tecnología de Graphene distingue 
diferentes tipos de objetos, tanto en el protocolo como en el espacio de 
implementación.


En el espacio de protocolo, hay objetos en bruto como, cuentas, activos, 
miembros del comité, así como pedidos, propuestas y saldos. El espacio de implementación 
se usa para obtener acceso a capas de abstracción más altas, por ejemplo, el contenido 
del estado actual de la base de datos (esto incluye, propiedades globales y actuales de la blockchain, 
datos dinámicos de activos, historiales de transacciones, así como estadísticas de cuentas 
y registros presupuestarios).


.. toctree::
   :maxdepth: 1

   ../development/blockchain/objects
