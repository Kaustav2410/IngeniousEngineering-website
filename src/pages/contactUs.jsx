import React, { useState } from 'react';
import image from "/Images/Banner/Conversation.png";
import Forms from '@/components/custom/forms';
import { contactUsSchema } from '@/constants/data'
import { FormEnum } from '@/constants/data';
const ContactUs = () => {
    const fields = [
        { name: "firstName", label: "First Name", required: true, placeholder: "First Name" },
        { name: "lastName", label: "Last Name", required: true, placeholder: "Last Name" },
        { name: "email", label: "Email", required: true, type: "email", placeholder: "Email" },
        { name: "phone", label: "Phone", required: false, placeholder: "Phone" },
        { name: "company", label: "Company", required: false, placeholder: "Company" },
        { name: "state", label: "State", required: false, placeholder: "State" },
        { name: "country", label: "Country", required: false, placeholder: "Country" },
        { name: "message", label: "Message", required: true, type: "textarea", placeholder: "Message" },
      ];
  const onSubmit  = (data) => {
    console.log("Contact Us Form Submitted", data);
  };

//   const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
//     "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
//     "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
//     "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
//     "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
//     "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
//     "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
//     "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
//     "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
//     "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)",
//     "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia (formerly Macedonia)", "Norway", "Oman",
//     "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
//     "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
//     "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
//     "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
//     "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
//     "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];



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
      <div className="flex flex-col md:flex-row justify-center md:items-baseline items-end gap-10 py-12 px-6 bg-gray-200">

        <Forms
            schema={contactUsSchema}
            fields={fields}
            handleSubmit={onSubmit}
            formType={FormEnum.CONTACT}
            />

        {/* Contact Details */}
        <div className="w-full max-w-[1200px] px-10 text-right text-gray-700">
          <h2 className="text-2xl font-semibold mb-2"> Ingenious Engineering Pvt. Ltd</h2>

          <h3 className="text-2xl font-semibold">Address</h3>
          <p className="mt-2 text-lg"> Plot NO. 49-P2, Jakkasandra Industrial Area, <br />
          Bengaluru -563130</p>

          <h3 className="text-2xl font-semibold">Phone</h3>
          <p className="mt-2 text-lg">+91-080-27971482, 83</p>

          <h3 className="text-2xl font-semibold mt-4">Fax</h3>
          <p className="mt-2 text-lg">+91-80-27971428</p>

          <h3 className="text-2xl font-semibold mt-4">Email</h3>
          <p className="mt-2 text-lg">info@ferrum.co.in</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
