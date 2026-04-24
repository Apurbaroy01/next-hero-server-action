import { revalidatePath } from "next/cache"
import { postTask } from "./task"
import { redirect } from "next/navigation"

export const createAtask = async (fromdata) => {
    'use server'
    const newtask = Object.fromEntries(fromdata.entries())
    console.log("newtask", newtask)

    const res = await postTask(newtask)
    if (res.success) {
        revalidatePath('/task')
    }
    return res;
}


export const postAtask = async (postAtask) => {
    'use server'
    const newtasks = Object.fromEntries(postAtask.entries())
    console.log("add task", newtasks)

    const res = await postTask(newtasks)
    if (res.success) {
        revalidatePath('/task')
        redirect('/task')
    }
    return res;
}

