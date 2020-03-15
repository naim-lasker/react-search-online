import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        'Authorization': 'Client-ID __jaTsnPsVbelB09Fq6prQezZ0YVejY_L2EfH-1_FV4'
    }
})