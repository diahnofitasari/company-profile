export const getTeams = async () => {
    const res = await fetch ('https://randomuser.me/api/?results=12')
    const data = await res.json()

    return data
}