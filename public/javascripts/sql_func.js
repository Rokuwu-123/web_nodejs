exports.bgtr = function (vkoneksi) {
    vkoneksi.query(`begin;`)
}

exports.entr = function (vkoneksi) {
    vkoneksi.query(`commit;`)
}

exports.backtr = function (vkoneksi) {
    vkoneksi.query(`rollback;`)
}