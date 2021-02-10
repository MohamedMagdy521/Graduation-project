import { Button } from "./Button";

export function Tabel(props) {
    console.log(props.data);

    return (
        <>
            <div className="row wow fadeIn" id={props.id}>
                <div className="col-md-12 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-hover">


                                <thead className="blue-grey lighten-4">
                                    <tr>
                                        <th>Index</th>
                                        <th>ID</th>
                                        <th>firstName</th>
                                        <th>Email</th>
                                        <th>Banned</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                        <th>Ban</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {props.data.map((item, index) => {

                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.person._id}</td>
                                                <td>{item.person.firstName}</td>
                                                <td>{item.person.email}</td>
                                                <td>{String(item.banned)}</td>

                                                <td>
                                                    <Button className="page-link" parameter={item} key={index + 1} handelClick={props.handelClickEdit}
                                                        name={<i style={{ fontSize: '20px' }} className='fas fa-pen ml-1'></i>}>
                                                    </Button>
                                                </td>

                                                <td>
                                                    <Button className="page-link" parameter={item.person._id} key={index + 1} handelClick={props.handelClickDelete}
                                                        name={<i style={{ fontSize: '20px' }} className='fas fa-trash ml-3'></i>}>

                                                    </Button>
                                                </td>

                                                <td>
                                                    <Button className="page-link" parameter={item} key={index + 1} handelClick={props.handelClick}
                                                        name={<i style={{ fontSize: '20px' }} className="fas fa-ban"></i>}>

                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>


                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

