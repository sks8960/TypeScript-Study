// let data = {
//     name:'내 식당',
//     category: 'oriental',
//     adress:{
//       city:'Seoul',
//       detail:'somewhere',
//       zipcode: 123123
//     },
//     menu:[{name:"Kimchi", price: 1000, category:"Sub"}, {name:"Rice", price: 1000, category:"Main"}]
//   }

export type Restaurant = {
    name: string,
    category: string,
    adress:Adress,
    menu:Menu[]
}

export type Adress = {
    city: string,
    detail: string,
    zipcode?: number // 있어도 되고 없어도 되는 것
}

export type Menu = {
    name: string,
    price: number,
    category: string
}

export type AdressWithoutZip = Omit<Adress, 'zipcode'> // adress에서 zipcode 뺀 것

export type RestaurantOnlyCategory = Pick<Restaurant, 'category'> // restaurant에서 category만 사용

export type ApiResoponse<T> = { // 제네릭을 통해 타입을 유동적으로 지정 가능
    data:T[], // 아래 예제를 보면 Restaurant의 타입으로 자동 지정이 됨
    totalPage:number,
    page:number
}

export type RestaurantResponse = ApiResoponse<Restaurant>

export type numberResponse = ApiResoponse<number>