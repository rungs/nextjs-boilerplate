//if use server must return res.data
//if use client can use res
"use server"
import api from '@apis/service'
const URL = 'https://dummyjson.com'

export const getAllUser = async () => {
  try {
   
    const url = `${URL}/users`
    const res = await api.get(url)
    console.log('getAllUser res', res)

    return res.data
  } catch (error) {
    console.error('getAllUser catch =', error)
    throw error
  }
}

