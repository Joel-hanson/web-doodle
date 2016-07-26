function register() {
    if (document.getElementById("name").value)
        if (document.getElementById("cname").value)
            if (document.getElementById("tname").value)
                if (document.getElementById("phone").value) {
                    document.getElementById("startbutton").innerHTML = "Loading";
                    var e = database.ref("users/").push();
                    e.set({
                        name: document.getElementById("name").value,
                        email: email,
                        phone: document.getElementById("phone").value,
                        college: document.getElementById("cname").value,
                        teamname: document.getElementById("tname").value
                    }).then(function (e) {
                        window.location.reload(!1)
                    }, function (e) {
                        document.getElementById("startbutton").innerHTML = "Start", console.error(e), Materialize.toast("" + e, 1e3)
                    })
                } else Materialize.toast("Please enter Phone.", 1e3);
    else Materialize.toast("Please enter Team name.", 1e3);
    else Materialize.toast("Please enter College Name.", 1e3);
    else Materialize.toast("Please enter name.", 1e3)
}

function upload() {
    if(document.getElementById("file").files[0]){
    document.getElementById("uploadbutton").innerHTML = "Uploading";
    var e = firebase.storage().ref(),
        t = document.getElementById("file").files[0],
        n = {
            contentType: t.type
        },
        a = e.child(email + "/" + (new Date).getTime() + t.name).put(t, n);
    a.on("state_changed", null, function (e) {
        console.error("Upload failed:", e), document.getElementById("uploadbutton").innerHTML = "Upload", Materialize.toast("" + e, 1e3)
    }, function () {
        document.getElementById("uploadbutton").innerHTML = "Upload", Materialize.toast("Uploaded successfully!", 1e3), console.log("Uploaded", a.snapshot.totalBytes, "bytes."), console.log(a.snapshot.metadata);
        var e = a.snapshot.metadata.downloadURLs[0];
        console.log("File available"), document.getElementById("ur").innerHTML = e, document.getElementById("linkbox").innerHTML = '<a href="' + e + '">Click For File</a>'
    });
    }
    else{
        Materialize.toast("No file selected!", 1e3);
    }
}

function signout() {
    firebase.auth().signOut().then(function () {
        window.location.href = "login.html"
    }, function (e) {
        Materialize.toast("" + e, 1e3)
    })
}
var name = document.getElementById("name").value,
    teamname;
window.onload = function () {}, undefinedundefinedundefined;