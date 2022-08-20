import IndexedDB from '@/utils/indexedDB'
import languageObjectStore from './objectStores/language'
import usersObjectStore from './objectStores/users'
import reservationsObjectStore from '@/database/objectStores/reservations'
import historyObjectStore from '@/database/objectStores/history'

// 数据库实例
export const airbnbDB = new IndexedDB('airbnb')

export {
    usersObjectStore,
    languageObjectStore,
    reservationsObjectStore,
    historyObjectStore
}
