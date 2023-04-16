import axios from "axios";

const instance =
    axios.create({ baseURL: 'http://localhost:4000/api/change' })

const changeState = async (state) => {
    try {
        const { data: { msg } }
            = await instance.get('/change', { params: { state } })
        return msg
    }
    catch (error) {
        //check error message
        console.log(`Error: ${error}`)
    }
}

export { changeState }