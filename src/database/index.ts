import IndexedDB from '@/utils/indexedDB'
import languageObjectStore from './objectStores/language'
import usersObjectStore from './objectStores/users'

// 数据库实例
export const airbnbDB = new IndexedDB('airbnb')

export { usersObjectStore, languageObjectStore }
