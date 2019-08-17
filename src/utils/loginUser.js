const users = [];

const login = ({username, password}) => {
    username.trim().toLowerCase()

    if (!username || !password) {
        return {
            error: "Username and password are required"
        }
    }
}