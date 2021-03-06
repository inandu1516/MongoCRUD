/**

C:> node
C:\data>db
C:\Program Files\MongoDB\Server\3.2\bin
	-Server: mongod.exe
	-Client: mongo.exe

MONGO
------------
-show dbs
-use <db>
-db.DbName.dropDatabase()
-show collections
-db.createCollection("nom")
-db.NomColeccio.drop()
-db.NomColeccio.find().pretty()

INSERTS
------------
db.inventari.insert({fabricant: {companyia:'NitroRiders', pais:'USA'} })


CONSULTES
------------
Retorna només noms i marcas de tots productes en stock
	- db.productes.find( {"stock":true}, { "_id":0, "name":1, "marca":1} )

Retorna totes botes ski en stock: (AND)
	- db.productes.find({"name":"Bota Ski", "stock":true})
	- db.productes.find( {"marca":"Nitro","stock":true}, {"_id":0,"marca":1,"mides":1}

Retorna totes botes marca GLobal o Nitro: (OR)
	- db.productes.find( {$or: [ {"name":"Global"},{"name":"Nitro"} ] } )

Retorna totes botes en stock de les marcas donades: (AND + OR)
	- db.productes.find(  {"stock":true}, {$or: [ {"marca":"Global"},{"marca":"Nitro"} ] }  )

Retorna noms Persones ordenades per edat ascendent:
	- db.persones.find({},{"_id":0, "name":1}).sort({"age":1})

Retorna fabricants amb companyia amb seu a SWI:
	- db.inventari.find( {"fabricant.pais":"SWI"}, {"_id":0} )

Retorna nom marca amb mides [41,42 i 43]
    - db.productes.find( {mides:[41,42,43]}, {marca:1, mides:1, _id:0} )

Retorna totes els noms marcas que tenen el numero 42 i está en stock:
    - db.productes.find( {mides:42, stock:true}, {marca:1, _id:0} )

Conta nombre productes a inventari:
    - db.inventari.count()

Select by ID:
    - db.persones.find({_id: ObjectId("572b7d8959f5365e14044179")}).pretty()

UPDATES
------------
db.productes.update( {"marca":"QuickSilver"}, { $set : {"marca":"Zero"} } )

 */