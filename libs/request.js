(function (root) {

  function post(fileLocation, JSONData, successCb, errorCb, event) {
    event.preventDefault();
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          successCb();
        } else {
          errorCb();
        }
      }
    };
    request.open('POST', fileLocation);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    const formattedJsonData = JSON.stringify(JSONData);
    request.send(formattedJsonData);
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
    post,
    get,
  };
}(this));
