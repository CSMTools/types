import { Sticker as GOSticker } from 'globaloffensive';

export type SetIndex = {
    [skinIdentifier: string]: { // skinIdentifier is like [hy_blueprint_white]weapon_bizon ([paint_kit.name]item_class)
        set: ItemSet;
        rarity: number;
    }
}

export type ItemSet = {
    name: string;
    set_description: string;
    original_name: string;
    is_collection: "1" | "0";
    items: {
        [item: string]: "1";
    }
}

export type Sticker = GOSticker & {
    tint_id: number | null
} & {
    codename?: string;
    material?: string;
    name?: string;
    image?: string;
    rarityname?: string;
}

export type ItemData = {
    delay?: number,
    itemid: string,
    defindex: number,
    paintindex: number,
    rarity: number,
    quality: number,
    killeaterscoretype: number | null,
    killeatervalue: number,
    customname: string | null,
    paintseed: number | null,
    paintwear: number,
    origin: number,
    fadePercentage: number | null,
    s: string,
    a: string,
    d: string,
    m: string,
    stickers: Sticker[],
    additional?: {
        imageurl: string;
        floatData: {
            min: number,
            max: number
        };
        weapon_type: string;
        item_name: string;
        rarity_name: string;
        quality_name: string;
        origin_name: string;
        wear_name: string;
        full_item_name: string;
    }
}

export type API_RESPONSE_ERROR = string;
export type API_RESPONSE<T> = {
    data: T | null,
    errors: API_RESPONSE_ERROR[]
}

export type InspectResponse = API_RESPONSE<ItemData>;

export type StaticSticker = {
    name: string;
    description: string;
    material: string;
    codename: string;
    image: string;
}

export type StaticWeapon = {
    weaponName: string;
    skinName: string;
    rarity: number;
    rarityName: string;
    setImage: string;
}