import { Link } from 'react-router-dom'

export default function Packages(props) {

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                <ul>
                    {props.packages.map((eachPackage, index) => <li key={index}><Link to={`/packages/${index}`}>{eachPackage}</Link></li>)}
                </ul>
            </div>
        </div>
    )
}