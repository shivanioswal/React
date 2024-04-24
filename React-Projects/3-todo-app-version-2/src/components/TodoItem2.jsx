function TodoItem2()
{
  let todoItem='Go to college';
  let todoDate='4/12/2023';
  return(
    <div className="container text-center">
        

  <div className="row kg-row">
    <div className="col-6">
      {todoItem}
    </div>
    <div className="col-4">
      {todoDate}
    </div>
    <div className="col-2"><button type="button" className="btn btn-danger kg-button">Delete</button></div>
  </div>
  </div>
  )

}
export default TodoItem2