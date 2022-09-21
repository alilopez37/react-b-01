import '../index.css'

function Card(props) {

    return (
        <div className='card'>
            <h1>{props.user.name} {props.user.lastName}</h1>
        </div>
    )

}

export default Card