import IndexedDB from '@/utils/indexedDB'
import languageObjectStore from './objectStores/language'
import usersObjectStore from './objectStores/users'
import reservationsObjectStore from '@/database/objectStores/reservations'

// 数据库实例
export const airbnbDB = new IndexedDB('airbnb')

export { usersObjectStore, languageObjectStore, reservationsObjectStore }
