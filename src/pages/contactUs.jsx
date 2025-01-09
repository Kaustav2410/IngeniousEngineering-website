import React, { useState } from 'react';
import Values from "@/components/custom/values";
import image from "../assets/chip.jpeg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    state: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
    "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
    "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
    "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
    "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
    "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia (formerly Macedonia)", "Norway", "Oman",
    "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
    "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
    "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
    "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      // Add form submission logic here
    }
  };

  return (
    <section className="bg-gray-100">

      {/* Hero Section */}
      <div 
        className="bg-cover bg-center text-white text-center py-24" 
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 className="text-5xl font-bold">Start the Conversation</h1>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row justify-center gap-10 py-12 px-6 bg-gray-200">
        {/* Form */}
        <div className="w-full max-w-3xl">
          <p className="text-sm text-gray-600 mb-6">* indicates required fields</p>
          <form className="bg-gray-200 p-10 rounded-lg" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block font-bold text-gray-700">First Name *</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  placeholder="First Name" 
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full mt-3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="block font-bold text-gray-700">Last Name *</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  placeholder="Last Name" 
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full mt-3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="email" className="block font-bold text-gray-700">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label htmlFor="phone" className="block font-bold text-gray-700">Phone</label>
                <input 
                  type="text" 
                  id="phone" 
                  name="phone" 
                  placeholder="Phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="company" className="block font-bold text-gray-700">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  placeholder="Company" 
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full mt-3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label htmlFor="country" className="block font-bold text-gray-700">Country</label>
                <select 
                  id="country" 
                  name="country" 
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full mt-3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Please select</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="state" className="block font-bold text-gray-700">State</label>
                <input 
                  type="text" 
                  id="state" 
                  name="state" 
                  placeholder="State" 
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full mt-3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block font-bold text-gray-700">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Message" 
                rows="6" 
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button 
              type="submit" 
              className="mt-6 bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="w-full max-w-lg text-right text-gray-700">
          <h2 className="text-xl font-semibold mb-2"> Ingenious Engineering Pvt. Ltd</h2>

          <h3 className="text-xl font-semibold">Address</h3>
          <p className="mt-2"> Plot NO. 49-P2, Jakkasandra Industrial Area, <br />
          Bengaluru -563130</p>

          <h3 className="text-xl font-semibold">Phone</h3>
          <p className="mt-2">+61 1800 987 525</p>

          <h3 className="text-xl font-semibold mt-4">Fax</h3>
          <p className="mt-2">+61 1300 33 8482</p>

          <h3 className="text-xl font-semibold mt-4">Email</h3>
          <p className="mt-2">customerservice@crmining.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
