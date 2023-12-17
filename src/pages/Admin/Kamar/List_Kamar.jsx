import { Sidebar } from "../../../components";
import Table from 'react-bootstrap/Table';
import { BsSearch } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function ListKamar() {
    return (
      <div className="row w-100 min-vh-100 d-flex" style={{backgroundColor: "#E8F3F9"}}>
        <Sidebar className={'col'}/>
        <div className="col" style={{marginLeft: "15%", marginTop: "2%"}}>
          <div className="container-fluid">
            <h1>Kamar</h1>

            <div className="d-flex justify-content-between">
                <InputGroup className="my-3 w-50">
                    <InputGroup.Text id="inputGroup-sizing-default" className="rounded-start-4 border-0" style={{
                        backgroundColor : '#fff'
                    }}>
                    <BsSearch />
                    </InputGroup.Text>
                    <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Cari"
                    className="border-0 rounded-end-4"
                    />
                </InputGroup>
                <div className="d-flex align-items-center">
                  <button className="btn text-white" style={{backgroundColor:"#138FD4"}}>Tambah Kamar</button>
                </div>
            </div>

            <Table striped="columns">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div>
            <button className="btn btn-primary" style={{marginLeft: "80%"}}>Tambah Kamar</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ListKamar;