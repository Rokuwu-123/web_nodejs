var client = require('./koneksi')
var sql_func = require('./sql_func')

const product =
    [
        {
            "id": 1,
            "Name": "Pen",
            "Price": "200",
            'Stock': "false"
        },
        {
            "id": 2,
            "Name": "Pencil",
            "Price": "200",
            "Stock": "false"
        },
    ];

//mengkoneksikan ke database
var vkoneksi = client.connect();
//console.log(client)
var resp = null

//fucntion ambil data hasil query (GET)
exports.getProducts = function (req, res) {
    
}


// fungsi tambah/insert  data
exports.addProduct = function (req, res) {
   // var data = req.body;
   // product.push(data);
   // res.send(product);

    var vbody       = req.body
    var norek       = vbody.rekening
    var kode_mutasi = vbody.kode_mutasi
    var nilai       = vbody.nilai
    var perangkat   = vbody.perangkat
    var userid      = vbody.userid
    var valid       = true

    var vQuery = `insert into tran_mobile (tnrt,ttg_mut,perangkat,user_input,posting,tkd_mut,tnilai) values('${norek}',current_date,'${perangkat}','${userid}',false,${kode_mutasi},${nilai})`
    
    client.query(vQuery, (err, res) => {
        if (!err) {
            resp = {"status":true, "message":"Data berhasil disimpan"}
        } else {
            valid = false
            vErr = JSON.stringify(err.message)
            resp = { "status": false, "message": vErr }
            
        }
        client.end
    })

    setTimeout(() => {
        if (valid == false) {
            res.status(400); // bad request
        }
        res.send(resp);
    }, 2500);
}

exports.deleteProduct = function (req, res) {

    var id = parseInt(req.params.id) - 1;
    var itemdeleted = product.splice(id, 1)
    if (itemdeleted === undefined) {
        res.send("Not Deleted");
    }
    else {
        ;
        res.send(product);
    }
}


exports.updateProduct = function (req, res) {
    var id = parseInt(req.params.id) - 1;
    var productToUpdate = product[id];
    var data = req.body;

    if (productToUpdate === undefined) {
        res.send("Not Updated");
    }
    else {
        productToUpdate.productName = data.productName;
        productToUpdate.productPrice = data.productPrice;
        productToUpdate.productStock = data.productStock;

        res.send(product);
    }
}