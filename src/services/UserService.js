import api from './api'
import urls from './urls'

export default function UserService() {
  const url = urls()

  const getUsers = async () => {
    const result = await api.get(url.user.list)
    
    return result.data
  }

  const getUserDetail = async (slug) => {
    const result = await api.get(url.article.detail.replace('{slug}',slug))

    return result.data
  }


  return { getUsers, getUserDetail}
}