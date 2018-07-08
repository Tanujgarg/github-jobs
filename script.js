function jobs() {
	fetch(`http://127.0.0.1:3000/india/python`)
        .then(function (response) {
            //return response;
            return response.json();
        })
        .then(function (result) {
            document.querySelector("body").innerHTML = result;
	    console.log(result);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
