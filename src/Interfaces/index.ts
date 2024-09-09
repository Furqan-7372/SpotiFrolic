type TAddress = {
    country: string,
    city: string,
    state: string,
    zip:number
}

interface IUser {
  name: string,
  contact: string,
  picture: string,
  address: TAddress
}

interface IRestaurant {
  name: string,
  address: TAddress
}

interface IHotel {
  name: string,
  address: TAddress[]
}
