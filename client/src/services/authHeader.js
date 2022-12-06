export default function authHeader() {
    const jwtToken = JSON.parse(localStorage.getItem("jwtToken"));


    if (jwtToken) {
        return { Authorization: "Bearer" + jwtToken };
    }

}