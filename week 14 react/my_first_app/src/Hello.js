const Hello = (props) =>{
    console.log(props)
    return(
        <div>
            <h1>Hello{props.name}</h1>
            <p>text text {props.text}</p>
            {props.abc}
            {props.mail}
        </div>
    )
}
export default Hello