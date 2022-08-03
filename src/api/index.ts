// Mock 接口
import indexDB from "@/utils/indexDB";
const airbnb = new indexDB('airbnb')

export const addOrUpdateDB = async(updateIndex = null) => {
    await airbnb.openStore('elephant', 'id', ['nose', 'ear'])
    !updateIndex ?
        airbnb.updateItem('elephant', {
            nose: '10m',
            ear: 'big'
        }) : airbnb.updateItem('elephant', {
            id: updateIndex,
            nose: '20m',
            ear: 'big'
        })

}

export const getElephant = async(storeName: string) => {
    await airbnb.openStore(storeName, 'id', ['nose', 'ear'])
    return await airbnb.getData(storeName);
}
