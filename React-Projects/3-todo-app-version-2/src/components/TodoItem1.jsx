function TodoItem1()
{
  let todoItem='Buy Milk';
  let todoDate='4/10/2023';
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
export default TodoItem1