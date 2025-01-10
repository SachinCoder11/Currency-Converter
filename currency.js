// Define the base URL for the currency API, including the API key.
 const BASE_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_RUO8Wxs1yX3IReh7upSwSPE46ahnagGNqZTaonUj";

// Select all dropdown elements (currency selectors) in the HTML form.
const dropdowns = document.querySelectorAll(".dropdown select");
// Select the "Get Exchange Rate" button.
const btn = document.querySelector("form button");
// Select the specific "From" and "To" currency dropdowns.
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
// Select the message area to display conversion results or errors.
const msg = document.querySelector(".msg");

// Object mapping currency codes to their respective country abbreviations.
const countryList = {
   AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

// Populate the dropdowns with currency options and their country flags.
for (let select of dropdowns) {
   // Loop through the countryList object to create options for each currency.
   for (const [currCode, countryName] of Object.entries(countryList)) {
     // Create a new option element for the dropdown.
     const option = document.createElement("option");
     option.value = currCode;
     // Set the text content of the option as the country name and currency code.
     option.textContent = `${countryName} (${currCode})`;

     // Set default selections for 'From' and 'To' currencies.
     if (select.name === "from" && currCode === "USD") {
       option.selected = true;
     } else if (select.name === "to" && currCode === "INR") {
       option.selected = true;
     }

     // Append the option element to the current dropdown.
     select.appendChild(option);
   }

   // Event listener for changes in the dropdown to update the flag.
   select.addEventListener("change", (event) => {
     updateFlag(event.target);
   });
}

// Function to update the flag image when the user selects a new currency.
const updateFlag = (element) => {
   // Get the selected currency code.
   const currCode = element.value;
   // Get the country name associated with the currency code.
   const countryName = countryList[currCode];
   // Find the image element within the select container.
   const img = element.parentElement.querySelector("img");
   // Set the new image source to the appropriate flag based on the country name.
   img.src = `https://flagsapi.com/${countryName}/flat/64.png`;
};

// Function to update the exchange rate based on user input.
const updateExchangeRate = async () => {
   // Get the value entered by the user for the amount to be converted.
   const amountInput = document.querySelector(".amount input");
   let amountValue = parseFloat(amountInput.value) || 1; // Default to 1 if the input is invalid.
   amountInput.value = amountValue; // Set the value of the input field.

   try {
     // Fetch exchange rate data from the API.
     const response = await fetch(BASE_URL);
     const data = await response.json();

     // Get the exchange rate for the 'From' and 'To' currencies.
     const fromRate = data.data[fromCurr.value]?.value || 1; // Default to 1 if no rate found.
     const toRate = data.data[toCurr.value]?.value || 1; // Default to 1 if no rate found.

     // Calculate the conversion rate.
     const rate = toRate / fromRate;
     // Compute the final converted amount and round it to 2 decimal places.
     const finalAmount = (amountValue * rate).toFixed(2);

     // Display the conversion result in the message area.
     msg.textContent = `${amountValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
   } catch (error) {
     // Handle errors if fetching data fails.
     console.error("Error fetching exchange rate:", error);
     msg.textContent = "Error fetching exchange rate. Please try again.";
   }
};

// Event listener for the button click to trigger the conversion process.
btn.addEventListener("click", (event) => {
   event.preventDefault(); // Prevent form submission.
   updateExchangeRate(); // Call the function to update the exchange rate.
});

// Event listener to update the exchange rate when the page loads.
window.addEventListener("load", updateExchangeRate);
