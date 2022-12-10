export interface Icard {
    name: string,
    url: string,
}

export interface IgetPokemonsResponse {
results: [Icard],
next : string,
}

export interface IPokemon{
    height: number,
    name: string,   
    sprites: {
        front_default: string,
    } 
    abilities: [Iability]
}
export interface Iability{
       ability: Icard,
       is_hidden: boolean,
       slot: number,
}

 

 