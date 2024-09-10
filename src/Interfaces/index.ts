type TAddress = {
    country: string,
    city: string,
    state: string,
    zip:number
}

export interface IUser {
  name: string,
  contact: string,
  picture: string,
  address: TAddress
}
export interface IWelcomeScreen {
  
}

export interface IRestaurant {
  name: string,
  address: TAddress
}

export interface IHotel {
  name: string,
  address: TAddress[]
}
