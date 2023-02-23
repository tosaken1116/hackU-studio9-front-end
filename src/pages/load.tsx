import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { CircularProgress, Grid, Box } from "@mui/material"

type UserType = {
    id: number,
    name: string,
    email: string,
    gender: "male" | "female" | "unknown",
    status: "active" | "inactive"
}

const sleep = (sec: number) => new Promise(resolve =>
    setTimeout(resolve, sec * 1000));

const App = () => {
    const [users, setUsers] = useState<UserType[]>([])
    const [hasMore, setHasMore] = useState(true)

    const loadUser = async (page: number) => {
        const URL = `https://gorest.co.in/public/v2/users?&page=${page}`

        await sleep(1.0)
        const response = await fetch(URL)
        const usersData: UserType[] = await response.json()
        const count = usersData.length

        console.log(`GET ${URL}  count=${count}`)
        setUsers([...users, ...usersData])
        setHasMore(count > 0)
    }

    const loader = (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center">
            <CircularProgress />
        </Grid>);

    const root_style = {
        marginLeft: "50px",
        marginTop: "50px",
    }

    return (
        <Box sx={{ height: "45%", width: "50%" }}>
            <InfiniteScroll
                loadMore={loadUser}
                loader={loader}
                hasMore={hasMore}>
                <ul className="list">
                    {users.map((user, ix) =>
                        <li className="list-item p-2"
                            style={{ borderBottom: "solid 1px #ccc" }} key={ix}>
                            {user.name}
                        </li>
                    )}
                </ul>
            </InfiniteScroll>
        </Box>
    );
}

export default App;