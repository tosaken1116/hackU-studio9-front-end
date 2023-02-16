import { Button } from "@mui/material";

function messagelist() {

    const demouser = [
        {
            username: "example1"
        },
        {
            username: "example2"
        },
        {
            username: "example3"
        },
        {
            username: "example4"
        },
        {
            username: "example5"
        }
    ];

    return (
        <div>
            <ul>
                {demouser.map((name) => (
                    <Button href={name.username}>{name.username}</Button>
                ))}
            </ul>
        </div>
    );
}

export default messagelist;