const axios = require('axios').default

const requestCustomer = async(phone, amount)=>{
    const spennRequest = await axios({
        method: 'post',
        url: 'https://uat-businessapi.spenn.com/api/Partner/transaction/request',
        data: {
             phoneNumber: "+250783054874",
             amount,
             message: "pay product for TEST-SHOP",
             callbackUrl: "http://localhost:3000/success"
         },
         headers: {
             Authorization: "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkY3MDE1Q0VFM0M5RTFFMDZCOUE0MzVDRUY2ODE5OUQwNzkyQUNCQjAiLCJ0eXAiOiJKV1QifQ.eyJ1bmlxdWVfbmFtZSI6InJpY2hhcmQrdWF0QHNwZW5uLmNvbSIsInN1YiI6IjAzNmEzNDQxLTA4NDEtNDc2My1hNWUwLTViOTc1YzY5NjY4MyIsImxhc3RMb2dpbiI6IjgvNC8yMDIxIDg6MjU6MTYgQU0iLCJ0eXBlIjoidXNlciIsInRva2VuSWQiOiJjNzc1Zjk5My1kMDA4LTQ1YmYtOTVkYi0yZmQzNTFjMTBkOWIiLCJ1c2VyR3VpZCI6IjY4NGJkOTYwLTc0ODUtNDE4YS1hYWE1LTc2ZDExMDljNjYxMyIsIm5iZiI6MTYyODA2NTUxNSwiZXhwIjoxNjI4MTUxOTE1LCJpYXQiOjE2MjgwNjU1MTYsImlzcyI6Imh0dHBzOi8vb2F1dGguaWRlbnRpdHkuY29tIiwiYXVkIjoiU3Blbm5CdXNpbmVzcyJ9.Iaw9YEYlMr5lxGzwLtxxUUVUGS6rdAsIeuFU4qrQBEOBCoBK77OeVNDjjScK0GKQX4Nuvm0IFOuZQnc1wOCajNwY2gUyTdg6dplYpP9C2_ISw5wMPLttBD1aUrpyQNRP325KK2_gQUnfVJibw-RAYKRVkggxHsHicO_WoHb5ZOVdgg5EKPXsKEbUupO72OxVzlIHs7qambBYpsYMIfdH3EPM9iGpFWkFt582hPfWWngF4_pxdAZZo-jVIZCc2B6_jlde6QA4ZZmXlDyT4rMl2Y0t7YZRm8KFfX62rspim67Q8RE8rnVMM79nraG3Cytrllqn5uXLzTNbg6pG6fPqXQ"
         }
    })

    return spennRequest.data
} 

const isPayed = async(requestId)=>{
    const checkStatus = await axios({
        method: 'get',
        url: `https://uat-businessapi.spenn.com/api/Partner/transaction/request/${requestId}/status`,
        headers: {
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkY3MDE1Q0VFM0M5RTFFMDZCOUE0MzVDRUY2ODE5OUQwNzkyQUNCQjAiLCJ0eXAiOiJKV1QifQ.eyJ1bmlxdWVfbmFtZSI6InJpY2hhcmQrdWF0QHNwZW5uLmNvbSIsInN1YiI6IjAzNmEzNDQxLTA4NDEtNDc2My1hNWUwLTViOTc1YzY5NjY4MyIsImxhc3RMb2dpbiI6IjgvNC8yMDIxIDg6MjU6MTYgQU0iLCJ0eXBlIjoidXNlciIsInRva2VuSWQiOiJjNzc1Zjk5My1kMDA4LTQ1YmYtOTVkYi0yZmQzNTFjMTBkOWIiLCJ1c2VyR3VpZCI6IjY4NGJkOTYwLTc0ODUtNDE4YS1hYWE1LTc2ZDExMDljNjYxMyIsIm5iZiI6MTYyODA2NTUxNSwiZXhwIjoxNjI4MTUxOTE1LCJpYXQiOjE2MjgwNjU1MTYsImlzcyI6Imh0dHBzOi8vb2F1dGguaWRlbnRpdHkuY29tIiwiYXVkIjoiU3Blbm5CdXNpbmVzcyJ9.Iaw9YEYlMr5lxGzwLtxxUUVUGS6rdAsIeuFU4qrQBEOBCoBK77OeVNDjjScK0GKQX4Nuvm0IFOuZQnc1wOCajNwY2gUyTdg6dplYpP9C2_ISw5wMPLttBD1aUrpyQNRP325KK2_gQUnfVJibw-RAYKRVkggxHsHicO_WoHb5ZOVdgg5EKPXsKEbUupO72OxVzlIHs7qambBYpsYMIfdH3EPM9iGpFWkFt582hPfWWngF4_pxdAZZo-jVIZCc2B6_jlde6QA4ZZmXlDyT4rMl2Y0t7YZRm8KFfX62rspim67Q8RE8rnVMM79nraG3Cytrllqn5uXLzTNbg6pG6fPqXQ"
        }
    })

    const statusresponse = checkStatus.data

    const { requestStatus } = statusresponse

    return requestStatus === "Pending" ? false: true 
}
module.exports = { requestCustomer, isPayed }