let CurrentTime=()=>
{
  let myDate=new Date();
  let ampm=myDate.getHours()>=12?'PM':'AM';
  return(
   
 
  <div className="row">
  <div className="col-md-12">
    <p>This is the current time: {myDate.getDate()}/{myDate.getMonth()+1}/{myDate.getFullYear()}  - {myDate.getHours()}:{myDate.getMinutes()}:{myDate.getSeconds()} {ampm}</p>
  </div>
</div>
  )
  
    
    
 
  
}
export default CurrentTime