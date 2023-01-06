export default function Card(props){
    return <div className="card ">
        <div className="card-image"></div>
        <p>{props.data.title}</p>
        <p>{props.data.description}</p>
        <p>{props.data.image}</p>
        <p>{props.data.category}</p>
    </div>
}