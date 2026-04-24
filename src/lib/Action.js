export const createAtask = async (fromdata) => {
    'use server'
    const name = fromdata.get('name')
    console.log("name", fromdata)
}