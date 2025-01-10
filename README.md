

---

# Currency Converter

A web-based Currency Converter application that allows users to convert an amount from one currency to another using real-time exchange rates. This project fetches live exchange rate data via an API and provides an interactive UI to select different currencies and input amounts. The application displays the equivalent value based on the current exchange rates.

## Features

- **Live Currency Exchange Rates**: Fetches up-to-date exchange rates from an API.
- **Interactive Dropdowns**: Select currencies from a dropdown list with corresponding flags.
- **Responsive Design**: The interface adapts to different screen sizes for better usability.
- **Real-Time Conversion**: Displays the conversion rate in real-time based on the selected currencies.
- **Error Handling**: Displays an error message in case of issues fetching exchange rates.

## Technologies Used

- **HTML**: Structuring the content of the Currency Converter page.
- **CSS**: Styling the page and creating a responsive design.
- **JavaScript**: Handling dynamic currency selection, conversion logic, and fetching live exchange rates from an API.
- **API**: Currency exchange rates fetched from `currencyapi.com` using the provided API key.
- **Font Awesome**: Used for icons like the currency exchange arrow.

## API Details

The live exchange rates are fetched from [CurrencyAPI](https://currencyapi.com/), a service that provides exchange rate data for over 150 currencies. Please note the following:

- **API Endpoint**:  
  `https://api.currencyapi.com/v3/latest?apikey=cur_live_RUO8Wxs1yX3IReh7upSwSPE46ahnagGNqZTaonUj`

- **API Limitations**:  
  The free version of the CurrencyAPI service is limited to  300 requests per month  . As of today, **73 requests have been used**, leaving **227 remaining**. If the limit is reached, the app may stop functioning until the request count resets every month on 26th . Please be aware of this limitation when using the app frequently.

## How It Works

1. **Currency Dropdown**: Two dropdowns allow users to select the "From" and "To" currencies. Each dropdown is populated with currencies and their respective country flags.
2. **Amount Input**: The user enters the amount they want to convert.
3. **Get Exchange Rate**: When the "Get Exchange Rate" button is clicked, the application fetches the live exchange rate from the API.
4. **Result Display**: The conversion result is displayed below the button, showing the original amount, currency, and its equivalent in the target currency.

### Currency List

The following currencies are available for conversion (a sample list):

- USD (United States Dollar)
- INR (Indian Rupee)
- EUR (Euro)
- GBP (British Pound)
- JPY (Japanese Yen)
- AUD (Australian Dollar)

And many others...

### Example of Conversion:
- 1 USD = 80 INR

## Installation

To run this project locally, follow the steps below:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SachinCoder11/Currency-Converter.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd currency-converter
   ```

3. **Open the `index.html` file in your browser**:
   Simply double-click the `index.html` file to view the currency converter in action.

4. **Start editing**: You can modify the `styl.css` for custom styles and the `crncy.js` file to add more functionalities or improve the API logic.

## Files Structure

- `index.html`: The HTML structure of the currency converter app.
- `styl.css`: The CSS file for styling the page and making it responsive.
- `crncy.js`: The JavaScript file that handles currency conversion logic and API calls.
- `README.md`: This documentation file.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request to merge your changes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [CurrencyAPI](https://currencyapi.com/) for providing the exchange rate data.
- [Font Awesome](https://fontawesome.com/) for the icons used in the project.
- The open-source community for inspiration and guidance.

---

