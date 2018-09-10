'use strict';
function deleteByEmail() {
    let targetEmail = document.getElementsByName('email')[0].value;
    let tableRows = document.getElementsByTagName('tr');

    for (let i = 1; i < tableRows.length; i++) {
      if (targetEmail === tableRows[i].children[1].textContent) {
          tableRows[i].parentNode.removeChild(tableRows[i]);
          document.getElementsByName('email')[0].value = '';
          document.getElementById('result').textContent = 'Deleted.';
          return;
      }
    }

    document.getElementsByName('email')[0].value = '';
    document.getElementById('result').textContent = 'Not found.';
}
