import { useParams } from "react-router-dom"

export default function Package(props) {
    const {id } = useParams()

    console.log(id)
    return (
        <h1>{props.packages[id]}</h1>
    )
}