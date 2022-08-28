import { Storage, Drivers } from "@ionic/storage";

let storage: Storage;

export const createLocalDb = (name = "__mydb") => {

    //adding priority to indexed db
    storage = new Storage({
        name,
        driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    });

    storage.create();
}


export const setToLocalDb = (key: string, val: any) => {

    storage.set(key, val);
}

export const getfromLocalDb = async (key: string) => {

    const val = await storage.get(key);
    return val;
}

export const removeFromLocalDb = async (key: string) => {

    await storage.remove(key);
}

export const clearLocalStore = async () => {

    await storage.clear();
}

export const setitem2LocalDbList = async (key: any, id: any, val: any) => {

    const all = await storage.get(key);
    const objIndex = await all.findIndex((a: any) => parseInt(a.id) === parseInt(id));

    all[objIndex] = val;
    setToLocalDb(key, all);
}

export const removeItem4mLocalDbList = async (key: string, id: any) => {

    const all = await storage.get(key);
    const objIndex = await all.findIndex((a: any) => parseInt(a.id) === parseInt(id));

    all.splice(objIndex, 1);
    setToLocalDb(key, all);
}

export const getItemFromLocalDbList = async (key: string, id: any) => {

    const all = await storage.get(key);
    const obj = await all.filter((a: any) => parseInt(a.id) === parseInt(id))[0];
    return obj;
}