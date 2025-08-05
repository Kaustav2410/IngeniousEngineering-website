import awardImage from "/Images/Others/AwardsImage.png"
import { z } from "zod"
export const contactUsSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required." }),
    lastName: z.string().min(1, { message: "Last name is required." }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().optional(),
    company: z.string().optional(),
    state: z.string().optional(),
    country: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  })

  export const careerSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required." }),
    lastName: z.string().min(1, { message: "Last name is required." }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().optional(),
    resume: z.string().optional(),
    state: z.string().optional(),
    country: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  })
export const SectionEnum = {
    AWARDS:"AWARDS",
    PRODUCTS:"PRODUCTS",
    HOME:"HOME"
  };
export const FormEnum = {
    CAREER:"CAREER",
    CONTACT:"CONTACT",
  };
export const ClientData= [
    {
        title:"TRACKLINE - UK",
        imageUrl:"/Images/Logos/trackline.jpeg"
    },
    {
        title:"MASTER MACHINERIES - NZ",
        imageUrl:"/Images/Logos/master.jpeg"
    },
    {
        title:"SMI - US",
        imageUrl:"/Images/Logos/smi.png"
    },
    {
        title:"DIAMOND Z - US",
        imageUrl:"/Images/Logos/diamondz.png"
    },
    {
        title:"TESAB - UK",
        imageUrl:"/Images/Logos/tesab.jpeg"
    },
    {
        title:"Metso(Finland,canada,france)",
        imageUrl:"/Images/Logos/metso.png"
    },
    {
        title:"FIORI INDIA PVT LTD",
        imageUrl:"/Images/Logos/flori.png"
    },
    {
        title:"TATA Advanced Systems Ltd.",
        imageUrl:"/Images/Logos/tata.jpg"
    },
    {
        title:"Metso India Pvt Ltd.",
        imageUrl:"/Images/Logos/metso.png"
    },
    {
        title:"TLD MAINI",
        imageUrl:"/Images/Logos/tld.png"
    },

]
export const HomeCardData = [
    {
        title:"Product",
        imageUrl:"/Images/Others/1.svg",
        description:"We manufacture OEM equipment to specifications,supported by in-house engineering and design",
        tagline:"Explore more",
        url:"/products"
    },
    // {
    //     title:"Strategy",
    //     imageUrl:"/Images/Others/2.svg",
    //     description:"Success through precision,efficiency, and continuous improvement.",
    //     tagline:"Explore more",
    //     url:"/strategy"
    // },
    // {
    //     title:"Awards",
    //     imageUrl:"/Images/Others/3.svg",
    //     description:"Honored with awards for innovation, quality, and leadership.",
    //     tagline:"Explore more"
    // },
]
export const ProductData= [
     // {
    //     title:" Rolling Machine",
    //     imageUrl:"/Images/Website/Pictures/Products/RollingMachine.JPG",
    // },
    //  {
    //     title:"SMI Chamber",
    //     imageUrl:"/Images/Website/Pictures/Products/SMIChamber.JPG",
    // },
    //    {
    //     title:"DrawBar",
    //     imageUrl:"/Images/Website/Pictures/Products/Drawbar.JPG",
    // },
    {
        title:"Defence Products",
        id:"Defence_Products",
        products:[
            {
                title:"ATAGS Chassis",
                id:"ATAGS_Chassis",
                imageUrl:"/Images/Website/Pictures/Products/ATAGSChassis.jpeg",
            },

            {
                title:"ATAGS Saddle",
                id:"ATAGS_Saddle",
                imageUrl:"Images/Website/Pictures/Products/ATAGSSaddle.jpeg",
            },
        ]
    },
     {
        title:"Airport ground handling equipment",
        id:"Airport_ground_handling_equipment",
        products:[
            {
                title:"TLD TMX150",
                id:"TLD_TMX150",
                imageUrl:"/Images/Website/Pictures/Products/TLDTM-.jpeg",
            },
            {
                title:"Jet-16 Chassis",
                id:"Jet_16_Chassis",
                imageUrl:"/Images/Website/Pictures/Products/Jet-16Chassis_.jpeg",
            }
        ]
    },
    {
        title:"Mining Equipment",
        id:"Mining_Equipment",
        products:[
            {
                title:"NP1213 Frame",
                id:"NP1213_Frame",
                imageUrl:"/Images/Website/Pictures/Products/NP12-.jpeg",
            },
        ]
    },
    {
        title:"Heavy Machinery",
        id:"Heavy_Machinery",
        products:[
            {
                title:"SS Vaccum Tank",
                id:"SS_Vaccum_Tank",
                imageUrl:"/Images/Website/Pictures/Products/SSVac.jpeg",
            },
        ]
    },
    {
         title:"Excavator Attachments",
        id:"Excavator_Attachments",
        products:[
            {
                 title:"BUCKETS",
                id:"BUCKETS",
                imageUrl:"/Images/Website/Pictures/Products/BUCKETS.png",
            },
            {
                 title:"CHUBB THUMB",
                id:"CHUBB_THUMB",
                imageUrl:"/Images/Website/Pictures/Products/CHUBB_THUMB.png",
            },
            {
                 title:"EAR ASSY",
                id:"EAR ASSY",
                imageUrl:"/Images/Website/Pictures/Products/EAR ASSY.png",
            },
            {
                 title:"TILT COUPLERS",
                id:"TILT COUPLERS",
                imageUrl:"/Images/Website/Pictures/Products/TILT COUPLERS.png",
            },
        ]
    }


]
// export const sliderImages=["/Images/Website/Pictures/Products/ATAGSChassis2.JPG","Images/Website/Pictures/Products/ATAGSSaddle.JPG","/Images/Website/Pictures/Products/TLD.JPG","/Images/Website/Pictures/Products/NP1213Frame.JPG","/Images/Website/Pictures/Products/SSVaccumTankForITER.JPG"]
export const sliderImages=["/Images/Website/Pictures/Products/ATAGSChassis.jpeg","Images/Website/Pictures/Products/ATAGSSaddle.jpeg","/Images/Website/Pictures/Products/TLDTM-.jpeg","/Images/Website/Pictures/Products/NP12-.jpeg","/Images/Website/Pictures/Products/Jet-16Chassis_.jpeg","/Images/Website/Pictures/Products/SSVac.jpeg","/Images/Website/Pictures/Products/BUCKETS.png","/Images/Website/Pictures/Products/TILT COUPLERS.png"]
export const leadershipTeamData =[
    {
      imageUrl:'/Images/Website/Pictures/Management/0D6A5819.JPG',
      banner:"/Images/Logos/RAJESH GOEL.png",
      Name:"RAJESH GOEL",
      Designation:"Managing Director",
      Description:`I, Mr. Rajesh Goel, an MBA Graduate and a successful Business man, is the promoter of Ingenious Engineering Pvt. Ltd.,  for more than 15 years catering the needs of OEMs and export of fabricated structures.
                Now, after being successful in managing the family business in running an Industry for more than a decade, I have started a new Industry independently, in the name of "Ingenious Engineering Pvt. Ltd.,
                Two of his senior management persons from his earlier company have joined hands with Mr. Rajesh Goel, in establishing the new company.`
    },
    {
      imageUrl:'/Images/Website/Pictures/Management/0D6A5827.JPG',
      banner:"/Images/Logos/SOMANATHA REDDY.png",
      Name:"SOMANATHA REDDY",
      Designation:"Senior General Manager",
      Description:"The second senior management person, a production expert, having more than 20 years of experience in production of fabricated structures. He has also worked with Mr. Rajesh Goel for more than 15 years in the earlier company."
    },
    {
        imageUrl:'/Images/Website/Pictures/Management/Keshav_Murthy.jpg',
        banner:"/Images/Logos/KESHAVA MURTHY.png",
        Name:"KESHAVA MURTHY",
        Designation:"Senior General Manager",
        Description:" Mr. Keshava Murthy, one of them, having more than 50 years of Industrial experience, and having worked in Larsen Toubro Ltd in their heavy fabrication and Excavator manufacturing units, for more than 30 years. He has the expertise in development of manufacturing processes for both fabrication and machining operations. He has worked with Mr. Rajesh Goel in his earlier company, for more than 15 years."
    },
    {
      imageUrl:'/Images/Website/Pictures/Management/Mahammed_Ghouspeer.jpg',
      banner:"/Images/Logos/Mahammed Ghouspeer.png",
      Name:"Mahammed Ghouspeer",
      Designation:"General Manager",
      Description:` Mr. Mahammed Ghouspeer serves as the General Manager - PPC at Ingenious Engineering Pvt. Ltd., where he oversees end-to-end operations related to production planning, process development, and manufacturing execution. With over 15 Years of experience in the Heavy fabrication industry, he plays a key role in aligning
       operational performance with the company's strategic objectives`
    },
    {
      imageUrl:'',
      banner:"/Images/Logos/Raj Kasera.png",
      Name:"Raj Kasera",
      Designation:"Director",
      Description:"With over 30 years of global leadership, Raj Kasera is a strategic investor empowering Indian enterprises worldwide. At Unex Ventures, he drives U.S. market entry via investment and partnerships. As Director of Ingenious Engineering, he elevates Indian manufacturing in Engineering, Mining, Recycling, and Defence to world-class standards."
    },
]

  export const AwardsData = [
    {
      title: "Volvo India Private Limited",
      imageUrl:"/Images/Logos/processed_image_3.3.png",
      timelineData: [
        {
          year: 2010,
          details: [
            {
              name: "For Performace on Delivery in year 2010-11",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
              image: awardImage,
            },
          ],
        },
        {
          year: 2011,
          details: [
            {
                name: "For Performace on Delivery in year 2011-12",
              description: "Another milestone achieved!",
              image: awardImage,
            },
          ],
        },
        {
          year: 2012,
          details: [
            {
                name: "For Performace on Delivery in year 2012-13",
              description: "Another milestone achieved!",
              image: awardImage,
            },
          ],
        },
        {
          year: 2013,
          details: [
            {
                name: "For Performace on Delivery in year 2013-14",
              description: "Another milestone achieved!",
              image: awardImage,
            },
          ],
        },
        {
          year: 2015,
          details: [
            {
                name: "For Performace on Delivery in year 2015-16",
              description: "Another milestone achieved!",
              image: awardImage,
            },
          ],
        },
        {
          year: 2016,
          details: [
            {
                name: "**For Performace on Delivery in year 2016-15",
              description: "Another milestone achieved!",
              image: awardImage,
            },
          ],
        },
      ],
    },
    {
      title: "Koblaco India Private Limited",
      imageUrl:"/Images/Logos/processed_image_2.2.png",
      timelineData: [
        {
          year: 2022,
          details: [
            {
              name: "Award 21k",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
              image: awardImage,
            },
          ],
        },
        {
          year: 2023,
          details: [
            {
              name: "Award 23k",
              description: "Another milestone achieved!",
              image: awardImage,
            },
          ],
        },
        {
          year: 2024,
          details: [
            {
              name: "Award 24k",
              description: "Another milestone achieved!",
              image: awardImage,
            },
          ],
        },
      ],
    },
    // {
    //   title: "TELCON",
    //   timelineData: [
    //     {
    //       year: 2010,
    //       details: [
    //         {
    //           name: "For Performance on Delivery in year 2010-11",
    //           description:
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
    //           image: image,
    //         },
    //         {
    //           name: "For Performance on Quality in year 2010-11",
    //           description:
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
    //           image: image,
    //         },
    //       ],
    //     },
    //     {
    //       year: 2011,
    //       details: [
    //         {
    //             name: "For Performance on Quality in year 2011-12",
    //           description: "Another milestone achieved!",
    //           image: image,
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      title: "Bharat Heavy Electricals Limited(BHEL)",
       imageUrl:"/Images/Logos/processed_image_1.1.png",
      timelineData: [
        {
          year: 2011,
          details: [
            {
              name: "For Performance on Delivery in year 2011-12",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
              image: awardImage,
            },
          ],
        },
        {
            year: 2012,
            details: [
              {
                name: "For Performance on Delivery in year 2012-13",
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
                image: awardImage,
              },
            ],
          },
          {
            year: 2013,
            details: [
              {
                name: "For Performance on Delivery in year 2013-14",
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
                image: awardImage,
              },
            ],
          },
          {
            year: 2022,
            details: [
              {
                name: "For Performance on Delivery in year 2011-12",
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
                image: awardImage,
              },
            ],
          },
          {
            year: 2023,
            details: [
              {
                name: "For Performance on Delivery in year 2011-12",
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
                image: awardImage,
              },
            ],
          },
          {
            year: 2024,
            details: [
              {
                name: "For Performance on Delivery in year 2011-12",
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
                image: awardImage,
              },
            ],
          },

      ],
    },
    {
      title: "BHEL",
       imageUrl:"/Images/Logos/processed_image_1.1.png",
      timelineData: [
        {
          year: 2018,
          details: [
            {
              name: "Vendor Meet-2018",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
              image: awardImage,
            },
            {
              name: "Best performance on Vendor-2018",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
              image: awardImage,
            },
          ],
        },
        {
          year: 2019,
          details: [
            {
              name: "Appreciation for performance-2019",
              description: "Another milestone achieved!",
              image: awardImage,
            },
            {
              name: "Award 22",
              description: "Another milestone achieved!",
              image: awardImage,
            },
          ],
        },
      ],
    },
    {
      title: "Kobelco",
      imageUrl:"/Images/Logos/processed_image_2.2.png",
      timelineData: [
        {
          year: 2022,
          details: [
            {
              name: "Quality Excellence award 2022-Kobelco",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
              image: awardImage,
            },
          ],
        },

      ],
    },
    {
      title: "Volvo",
      imageUrl:"/Images/Logos/processed_image_3.3.png",
      timelineData: [
        {
          year: 2016,
          details: [
            {
              name: "Supplier of the Month March-2016",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
              image: awardImage,
            },
          ],
        },

      ],
    },

  ];
//   export const machinesData = [
//     {
//       slNo: 1,
//       name: "6 axes CNC Floor Mounted Horizontal Boring Machine. Make: FERMAT - Czech Republic",
//       qty: 1,
//       sizeAndCapacity: `X: 9,500mm, Y: 3,500mm, W+Z: 1,500mm, V: 1,400mm,
//                         Table size: 2,000 x 2,400, Table Travel: 1500mm, Table capacity: 25MT,
//                         Spindle diameter: 130mm, 4 heads`,
//       imageUrl: "Images/Others/10.svg",
//     },
//     {
//       slNo: 2,
//       name: "CNC Gas / Plasma cutting machine Make: Messers",
//       qty: 1,
//       sizeAndCapacity: "20,000mm (L) x 3,500mm (W), Kjellberg Q3000+",
//       imageUrl: "Images/Others/12.svg",
//     },
//     {
//       slNo: 3,
//       name: "CNC Press Brake Make: Hindustan Hydraulics",
//       qty: 1,
//       sizeAndCapacity: "140 MT, 3,000mm width",
//       imageUrl: "Images/Others/15.svg",
//     },
//     {
//       slNo: 4,
//       name: "Radial Drilling Machines",
//       qty: 1,
//       sizeAndCapacity: "Drilling capacity 50mm solid. Radial arm 1,800mm",
//       imageUrl: "Images/Others/13.svg",
//     },
//     {
//       slNo: 5,
//       name: "Welding Machine",
//       qty: 12,
//       sizeAndCapacity: "KR-500, Panasonic",
//       imageUrl: "Images/Others/17.svg",
//     },
//     {
//       slNo: 6,
//       name: "Gouging machine",
//       qty: 1,
//       sizeAndCapacity: "Panasonic",
//       imageUrl: "Images/Others/14.svg",
//     },
//     {
//       slNo: 7,
//       name: "Shot Blasting Chamber",
//       qty: 1,
//       sizeAndCapacity: "13m (L) x 6m (W) x 3.5m (H)",
//       imageUrl: "Images/Others/16.svg",
//     },
//     {
//       slNo: 8,
//       name: "Airless Spray-Painting Booth",
//       qty: 1,
//       sizeAndCapacity: "13m (L) x 5m (W) x 3.5m (H)",
//       imageUrl: "Images/Others/11.svg",
//     },
//     {
//       slNo: 9,
//       name: "Drying Oven - Electric",
//       qty: 1,
//       sizeAndCapacity: "5.2m (L) x 2.9m (W) x 2.5m (H)",
//       imageUrl: "Images/Others/18.svg",
//     },
//     {
//       slNo: 11,
//       name: "Forklift",
//       qty: 1,
//       sizeAndCapacity: "3T Capacity with 6,000mm lift height",
//       imageUrl: "Images/Others/8.svg",
//     },
//     {
//       slNo: 12,
//       name: "Cranes",
//       qty: 2,
//       sizeAndCapacity: "Maximum capacity 10 MT",
//       imageUrl: "Images/Others/9.svg",
//     },
//   ];
