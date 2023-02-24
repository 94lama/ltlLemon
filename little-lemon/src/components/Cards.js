import { Card, CardHeader, CardBody, CardFooter, Text, Image, Button } from "@chakra-ui/react";

function Specials ({logo, title, price, description}) {
    return (
        <box>
            <header>
                <img src={""} alt="Logo"/>
            </header>
            <body>
                <h2>{title}</h2>
                <h2>price</h2>
                <p>description</p>
            </body>
            <footer>
                <button>Add</button>
            </footer>
        </box>
    )}

export default Specials;