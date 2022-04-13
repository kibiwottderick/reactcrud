const Button = ({content, icon, event, elementWidth}) => {
return(
<div className = 'btn btn-sm btn-danger h-25 col-2 ms-2 float-end d-flex'  onClick = { event } style={{width: elementWidth}}>{content}&nbsp;< span className={icon}></span></div>
)
}
export default Button;