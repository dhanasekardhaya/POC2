import axios from 'axios'

const url="http://localhost:8080"

export const adding=async(object)=>{
    const t = await axios.post(`${url}/newacc`,object)
    return t;
}

export const stepIn=async(object)=>{
    const v = await axios.post(`${url}/login`, null, {params:{"cid":object.user,"ps":object.pass}})
    return v;
}
