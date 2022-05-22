document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, options);
  });

  $(document).ready(function(){
    $('.datepicker').datepicker();
  });

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.querySelector('#first_name').value;
    let lastName = document.querySelector('#last_name').value;
    let email = document.querySelector('#email').value;
    let date = document.querySelector('#date').value;
    //mostrar datos en html
    let html = `
    <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Fecha de Nacimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${name}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${date}</td>
          </tr>
        </tbody>
      </table>
    `;
    document.querySelector('#data').innerHTML = html;
});

