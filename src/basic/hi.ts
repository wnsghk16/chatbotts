export default function hi(name:string):string{
    return `Hello ${name}`
}
export function goodbye(name:string):string{
    return `Goodbye ${name}`
}

export function birthday(name:string, year:number): object {

    const profile:object={
        name : name, age : new Date().getFullYear()-year
    }

    return profile;
}

export function add(num1:number, num2:number): number {
    return num1+num2
}