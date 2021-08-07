const axios = require('axios').default

const token = "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkY3MDE1Q0VFM0M5RTFFMDZCOUE0MzVDRUY2ODE5OUQwNzkyQUNCQjAiLCJ0eXAiOiJKV1QifQ.eyJ1bmlxdWVfbmFtZSI6InJpY2hhcmQrdWF0QHNwZW5uLmNvbSIsInN1YiI6IjAzNmEzNDQxLTA4NDEtNDc2My1hNWUwLTViOTc1YzY5NjY4MyIsImxhc3RMb2dpbiI6IjgvNy8yMDIxIDY6MTc6MzAgQU0iLCJ0eXBlIjoidXNlciIsInRva2VuSWQiOiIzZWM0ZjRmOC00MTc2LTQ3NzQtOGFiMi1lN2ZkYjYxYThhOTUiLCJ1c2VyR3VpZCI6IjY4NGJkOTYwLTc0ODUtNDE4YS1hYWE1LTc2ZDExMDljNjYxMyIsIm5iZiI6MTYyODMxNzA1MCwiZXhwIjoxNjI4NDAzNDUwLCJpYXQiOjE2MjgzMTcwNTAsImlzcyI6Imh0dHBzOi8vb2F1dGguaWRlbnRpdHkuY29tIiwiYXVkIjoiU3Blbm5CdXNpbmVzcyJ9.JHPfZ1bzYX1kyV9TLyZzCGZQuYCsstFdMkD5ecBN9mh3SgySlWtT4kDP_9UZODmBKchw8hWj_s7r5YaW3FyNdis3XyhHsKTs0_1aNR483z0pwRrg2xMTeBUj6PE8lN7vujSLS3hopeaqxp2TWonNUDSH0eOtvGnZX386Gh49VeLk4Hj6WXsen1sdp69mIPHO1wJ7ivQGoCiAON20erD3OI7VLV2i9DtRgsruWUBzSXXsSvcFwWmrPgP6dG57fVgw-nqikWw_WtyaUcXx65Khq52wU7sXs7Msp3Y2slpeymxeCpBnASm9L2V9bXfpULzjXljUB4cZEZtkg29eOBiVQw"
const requestCustomer = async(phone, amount)=>{
    const spennRequest = await axios({
        method: 'post',
        url: 'https://uat-businessapi.spenn.com/api/Partner/transaction/request',
        data: {
             phoneNumber: "+250788596281",
             amount: 1,
             message: "Genuine Reflexology Center",
             callbackUrl: "http://localhost:3000/success"
         },
         headers: {
             Authorization: token
         }
    })

    return spennRequest.data
} 

const isPayed = async(requestId)=>{
    const checkStatus = await axios({
        method: 'get',
        url: `https://uat-businessapi.spenn.com/api/Partner/transaction/request/${requestId}/status`,
        headers: {
            Authorization: token
        }
    })

    const statusresponse = checkStatus.data

    const { requestStatus } = statusresponse

    return requestStatus; 
}
module.exports = { requestCustomer, isPayed }