(function (root) {

  function postForm(fileLocation, infoToSend, idBtn, cbSucces, cbWrong = null) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          cbSucces();
        } else {
          cbWrong();
        }
      }
    };
    request.open('POST', fileLocation);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    function sendDataForm(ev) {
      ev.preventDefault();
      const formattedJsonData = JSON.stringify(infoToSend);
      request.send(formattedJsonData);
    }
    idBtn.addEventListener('click', sendDataForm);
  }

  function get(fileLocation, successCb, errorCb) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState === 4){
        if (request.status === 200) {
          const receivedInfoJSON = JSON.parse(request.responseText);
          successCb(receivedInfoJSON);
        } else {
          errorCb && errorCb();
        }
      }
    };

    request.open('GET', fileLocation);
    request.send();
  }

  root.serverFunctions = {
    postForm,
    get,
  };
}(this));
