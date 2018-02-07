(function (root) {

  function POSTForm(fileLocation, infoToSend, idBtn, cbSucces, cbWrong = null) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        cbSucces();
      } else {
        cbWrong();
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

  function GET(fileLocation, cbSucces, cbWrong) {
      const request = new XMLHttpRequest();
      let receivedInfoJSON = {};

      request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
          receivedInfoJSON = JSON.parse(request.responseText);
          cbSucces();
        } else {
          cbWrong();
        }
      };

      request.open('GET', fileLocation);
      request.send();
      return receivedInfoJSON;
  }

  root.ServerFunctions = {
    POSTForm,
    GET,
  };
}(this));
