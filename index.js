

function transform_manifest_prune(file) {
    try {
        var obj = JSON.parse(file.raw);
        file.raw = JSON.stringify({main: obj.main});
    } catch(e) {

    }
}

module.exports = transform_manifest_prune;
