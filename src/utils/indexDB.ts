export default class DB {
    private readonly dbName: string
    private db: any

    constructor(dbName: string) {
        this.dbName = dbName
    }

    // 创建/打开数据库
    openStore(storeName: string, keyPath: string, indexs?: Array<string>) {
        const request = window.indexedDB.open(this.dbName, 1)
        return new Promise((resolve, reject) => {
            request.onsuccess = (event:any) => {
                console.log('数据库打开成功')
                this.db = event.target.result
            }
            request.onerror = (event) => {
                console.log('数据库打开失败')
            }
            request.onupgradeneeded = (event) => {
                console.log('数据库升级成功')
                const { result } : any = event.target
                const store = result.createObejectStore(storeName, {
                    autoIncrement: true,
                    keyPath
                })

                // 添加索引
                indexs && indexs.length > 0 && indexs.map(item => {
                    store.createIndex(item, item, {
                        unique: false
                    })
                })
                store.transaction.oncomplete = (event: any) => {
                    console.log('创建对象仓库成功')
                }
            }
        })
    }

    // 新增或修改数据库数据
    updateItem(storeName: string, data: any) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.put({
            ...data,
            updatedTime: new Date().getTime()
        })
        request.onsuccess = (event: any) => {
            console.log('数据库写入成功')
        }
        request.onerror = (event: any) => {
            console.log('数据库写入失败')
        }
    }

    // 删除数据库数据
    deleteItem(storeName: string, keyPath: number | string) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.delete(keyPath)
        request.onsuccess = (event: any) => {
            console.log('数据库删除成功')
        }
        request.onerror = (event: any) => {
            console.log('数据库删除失败')
        }
    }

    // 查询数据库数据
    getData(storeName: string, mode: string = 'one', key: string | number = '') {
        const store = this.db.transaction([storeName]).objectStore(storeName)
        return new Promise((resolve, reject) => {
            let request = mode === 'one' ? store.get(key) : store.getAll()
            resolve(request)
        })
    }
}
