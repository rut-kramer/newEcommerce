import produce from 'immer';
import createReducer from './reducerUtils';

const initialState = {
        coins: [
                {
                        "name": "AED",
                        "country": "United Arab Emirates Dirham"
                },
                {
                        "name": "AFN",
                        "country": "Afghan Afghani"
                },
                {
                        "name": "ALL",
                        "country": "AAlbanian Lek"
                },
                {
                        "name": "AMD",
                        "country": "Armenian Dram"
                },
                {
                        "name": "ANG",
                        "country": "Netherlands Antillean Guilder"
                },
                {
                        "name": "AOA",
                        "country": "Angolan Kwanza"
                },
                {
                        "name": "ARS",
                        "country": "Argentine Peso"
                },
                {
                        "name": "AUD",
                        "country": "Australian Dollar"
                },
                {
                        "name": "AWG",
                        "country": "Aruban Florin"
                },
                {
                        "name": "AZN",
                        "country": "Azerbaijani Manat"
                },
                {
                        "name": "BAM",
                        "country": "Bosnia-Herzegovina Convertible Mark"
                },
                {
                        "name": "BBD",
                        "country": "Barbadian Dollar"
                },
                {
                        "name": "BDT",
                        "country": "Bangladeshi Taka"
                },
                {
                        "name": "BGN",
                        "country": "Bulgarian Lev"
                },
                {
                        "name": "BHD",
                        "country": "Bahraini Dinar"
                },
                {
                        "name": "BIF",
                        "country": "Burundian Franc"
                },
                {
                        "name": "BMD",
                        "country": "Bermudan Dollar"
                },
                {
                        "name": "BND",
                        "country": "Brunei Dollar"
                },
                {
                        "name": "BOB",
                        "country": "Bolivian Boliviano"
                },
                {
                        "name": "BRL",
                        "country": "Brazilian Real"
                },
                {
                        "name": "BSD",
                        "country": "Bahamian Dollar"
                },
                {
                        "name": "BTC",
                        "country": "Bitcoin"
                },
                {
                        "name": "BTN",
                        "country": "Bhutanese Ngultrum"
                },
                {
                        "name": "BWP",
                        "country": "Botswanan Pula"
                },
                {
                        "name": "BYN",
                        "country": "Belarusian Ruble"
                },
                {
                        "name": "BZD",
                        "country": "Belize Dollar"
                },
                {
                        "name": "CAD",
                        "country": "Canadian Dollar"
                },
                {
                        "name": "CDF",
                        "country": "Congolese Franc"
                },
                {
                        "name": "CHF",
                        "country": "Swiss Franc"
                },
                {
                        "name": "CLF",
                        "country": "Chilean Unit of Account (UF)"
                },
                {
                        "name": "CLP",
                        "country": "Chilean Peso"
                },
                {
                        "name": "CNH",
                        "country": "Chinese Yuan (Offshore)"
                },
                {
                        "name": "CNY",
                        "country": "Chinese Yuan"
                },
                {
                        "name": "COP",
                        "country": "Colombian Peso"
                },
                {
                        "name": "CRC",
                        "country": "Costa Rican Colón"
                },
                {
                        "name": "CUC",
                        "country": "Cuban Convertible Peso"
                },
                {
                        "name": "CUP",
                        "country": "Cuban Peso"
                },
                {
                        "name": "CVE",
                        "country": "Cape Verdean Escudo"
                },
                {
                        "name": "CZK",
                        "country": "Czech Republic Koruna"
                },
                {
                        "name": "DJF",
                        "country": "Djiboutian Franc"
                },
                {
                        "name": "DKK",
                        "country": "Danish Krone"
                },
                {
                        "name": "DOP",
                        "country": "Dominican Peso"
                },
                {
                        "name": "DZD",
                        "country": "Algerian Dinar"
                },
                {
                        "name": "EGP",
                        "country": "Egyptian Pound"
                },
                {
                        "name": "ERN",
                        "country": "Eritrean Nakfa"
                },
                {
                        "name": "ETB",
                        "country": "Ethiopian Birr"
                },
                {
                        "name": "EUR",
                        "country": "Euro"
                },
                {
                        "name": "FJD",
                        "country": "Fijian Dollar"
                },
                {
                        "name": "FKP",
                        "country": "Falkland Islands Pound"
                },
                {
                        "name": "GBP",
                        "country": "British Pound Sterling"
                },
                {
                        "name": "GEL",
                        "country": "Georgian Lari"
                },
                {
                        "name": "GGP",
                        "country": "Guernsey Pound"
                },
                {
                        "name": "GHS",
                        "country": "Ghanaian Cedi"
                },
                {
                        "name": "GIP",
                        "country": "Gibraltar Pound"
                },
                {
                        "name": "GMD",
                        "country": "Gambian Dalasi"
                },
                {
                        "name": "GNF",
                        "country": "Guinean Franc"
                },
                {
                        "name": "GTQ",
                        "country": "Guatemalan Quetzal"
                },
                {
                        "name": "GYD",
                        "country": "Guyanaese Dollar"
                },
                {
                        "name": "HKD",
                        "country": "Hong Kong Dollar"
                },
                {
                        "name": "HNL",
                        "country": "Honduran Lempira"
                },
                {
                        "name": "HRK",
                        "country": "Croatian Kuna"
                },
                {
                        "name": "HTG",
                        "country": "Haitian Gourde"
                },
                {
                        "name": "HUF",
                        "country": "Hungarian Forint"
                },
                {
                        "name": "IDR",
                        "country": "Indonesian Rupiah"
                },
                {
                        "name": "ILS",
                        "country": "Israeli New Sheqel"
                },
                {
                        "name": "IMP",
                        "country": "Manx pound"
                },
                {
                        "name": "INR",
                        "country": "Indian Rupee"
                },
                {
                        "name": "IQD",
                        "country": "Iraqi Dinar"
                },
                {
                        "name": "IRR",
                        "country": "Iranian Rial"
                },
                {
                        "name": "ISK",
                        "country": "Icelandic Króna"
                },
                {
                        "name": "JEP",
                        "country": "Jersey Pound"
                },
                {
                        "name": "JMD",
                        "country": "Jamaican Dollar"
                },
                {
                        "name": "JOD",
                        "country": "Jordanian Dinar"
                },
                {
                        "name": "JPY",
                        "country": "Japanese Yen"
                },
                {
                        "name": "KES",
                        "country": "Kenyan Shilling"
                },
        ],
        picture: ""
}

const coins = {
        setPicture(state, action) {
                debugger
                state.picture = action.payload;
        },

}

export default produce((state, action) => createReducer(state, action, coins), initialState);