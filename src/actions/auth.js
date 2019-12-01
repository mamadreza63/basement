import axios from 'axios';


export const Login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = ({username, password}) =>  {
    console.log(username);
    axios({
        method: "get",
        url: `https://api.github.com/users/${username}`,
        headers: {
            "Content-Type": "application/json"
        },
        // auth: {
        //     username,
        //     password
        // }
    }).then(response => console.log(response));
    return {
        type: 'TEST'
    }
}