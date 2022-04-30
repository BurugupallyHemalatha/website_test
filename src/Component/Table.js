import React from 'react'
const Table = () => {
  const data = [{ id: "31", Name: "sam", Designation: "Ui Developer", CTC: "12", JoiningDate: "21/04/2022", Email: "sa@gmail.com", Resume: "INV35137043.pdf", Status: "senc confirmation Email" }]
  const[state,setState]=React.useState(data)
  return (
    <div>
      <div>
        <nav class="navbar navbar-inverse">
          <h2 style={{ display: "flex" }} class="text-light">Resource One IT Solutions</h2>
          <select id="expirence" name="experiance">
            <option value="experienced">Experianced</option>
            <option value="Fresher">Fresher</option>
          </select>
          <a class="active text-light" href="#home">Onboaring Process</a>
          <a href="#news" class="text-light">News</a>
          <a href="#logout" class="text-light">Log Out</a>
          <a href="#recuiter" class="text-light">recuiter</a>
        </nav>
      </div>
      <table class="container table table-striped">
        {/* <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Designation</th>
            <th scope="col">CTC</th>
            <th scope="col">Joining Date</th>
            <th scope="col">Email id</th>
            <th scope="col">Resume</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">31</th>
            <td>sam</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>sa@gmail.com</td>
            <td>INV1366898008</td>
            <td>senc conformation Email</td>
            <td>On </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Ui Developer</td>
            <td>12</td>
            <td>21/04/2022</td>
            <td>sa@gmail.com</td>
            <td>INV1366898008</td>
            <td>senc conformation Email</td>
            <td>On </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>sa@gmail.com</td>
            <td>INV1366898008</td>
            <td>senc conformation Email</td>
            <td>On </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Ui Developer</td>
            <td>12</td>
            <td>21/04/2022</td>
            <td>sa@gmail.com</td>
            <td>INV1366898008</td>
            <td>senc conformation Email</td>
            <td>On </td>
          </tr>

          <tr>
            <th scope="row">31</th>
            <td>sam</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>sa@gmail.com</td>
            <td>INV1366898008</td>
            <td>senc conformation Email</td>
            <td>On </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Ui Developer</td>
            <td>12</td>
            <td>21/04/2022</td>
            <td>sa@gmail.com</td>
            <td>INV1366898008</td>
            <td>senc conformation Email</td>
            <td>On </td>
          </tr>

          <tr>
            <th scope="row">31</th>
            <td>sam</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>sa@gmail.com</td>
            <td>INV1366898008</td>
            <td>senc conformation Email</td>
            <td>On </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Ui Developer</td>
            <td>12</td>
            <td>21/04/2022</td>
            <td>sa@gmail.com</td>
            <td>INV1366898008</td>
            <td>senc conformation Email</td>
            <td>On </td>
          </tr>

          <tr>
            <th scope="row">31</th>
            <td>sam</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>sa@gmail.com</td>
            <td>INV1366898008</td>
            <td>senc conformation Email</td>
            <td>On </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Ui Developer</td>
            <td>12</td>
            <td>21/04/2022</td>
            <td>sa@gmail.com</td>
            <td>INV1366898008</td>
            <td>senc conformation Email</td>
            <td>On </td>
          </tr>

        </tbody> */}
        
      </table>

    </div>
  )
}
export default Table;