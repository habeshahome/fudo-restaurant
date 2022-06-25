import {GetStaticProps, NextPage} from 'next'
import { useEffect } from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Banner from '../components/Banner'
import InfoCard from '../components/InfoCard'
import RegForm from '../components/RegForm'
//import MenuSlider from '../components/MenuSlider'
//import MenuItemCard from '../components/MenuItemCard'
import ProductSlider from '../components/ProductSlider'

import Tabs from '../components/Tabs'

interface Props {
    Contact: {
      message: string;
      statusCode: number;
      data: [
        id: number,
        slug: string,
        title: string,
        description: string,
        icon: string,
      ]
    },

}

interface Category {
    slug: string,
    name: string,
    icon: string,
}

interface Categories {
    categories: Category[]
}

interface Product {
    id: string,
    slug: string,
    title: string,
    category: string,
    image: string,
    price: number,
    currency: string,
    availableQuantity: number,
}

interface Products {
    products: Product[]
}

interface Store {
    store: Products[]
}

interface CartItem {
  cid: string;
  products: Array<{
    id: number;
    qty: number;
  }>
}

const Home: NextPage<Props> = (props) => {
  //console.log(props)
  const Contact = props.contactData.data
  //console.log(Contact)
  const Category = props.categoryData.data
  //console.log(Category)

  let ContactSection = Contact.map((info, index) => {
      return (
        <InfoCard 
          key={index + info.slug} 
          id={index}
          slug={info.slug}
          title={info.title}
          description={info.description}
          icon={info.icon}
          />
      )
  })

  /*
  let CategorySection = Category.map((cat) => {
      return (
        <MenuSlider 
          key={cat.slug}
          slug={cat.slug}
          name={cat.name}
          icon={cat.icon}
          />
      )
  })
*/

  const tabContent = [
    {
      title: "Uno",
      content: "Uno Content",
    },
    {
      title: "Duo",
      content: "Duo Content",
    },
    {
      title: "Tres",
      content: "Tres Content",
    },
    {
      title: "Quatres",
      content: "The Quatres Group Content",
    },
  ]

  const categories = props.categoryData.data
  //creating store with all products
  const store = [ 
    props.pizzaData.data, 
    props.friesData.data,
    props.burgerData.data,
    props.drinksData.data,
  ]
  //console.log(store)

  let TabConfig = categories.map((tab, index) => {
        return (
            <Tabs.TabsPane 
              key={index}
              tab={tab}>
                <ProductSlider 
                    products={store[index]} 
                />
            </Tabs.TabsPane>
        )
    })


  return (
    <div className="max-w-scroll-lg" id="fudo">
      <Head>
        <title> Fudo Restaurant </title>
        <meta name="description" content="Fudo Restaurant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      <main className="grid grid-cols-1 gap-1" >
         
         <div>
           <Banner />
         </div>
         
          <div  id="info-section" className="grid grid-cols-3 gap-4 py-8">
            {
              ContactSection
            }
          </div> 

          <div className="flex py-8"> 
            <RegForm 
              title="Receive payments quickly from anywhere"
              tagline="Why kept very ever home mrs. Considered sympathize ten
              uncommonly occasional assistance sufficient not. Letter of on
              become he tended active enable to."
            />
          </div>

          <div id="menu-section">
            <div className="w-3/5 flex flex-col"> 
                <div className="pb-2"> 
                    <h1 className="font-bold"> Our Popular Menu </h1>
                </div>
                <div> 
                    <p className="font-light text-gray-700"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet tempus
                        dolor sed auctor. Volutpat facilisi in imperdiet quam penatibus ut 
                    </p> 
                </div>
            </div>

            <div> 
              <Tabs 
                active="0"
                >
                  {
                    TabConfig
                  }
              </Tabs>
            </div>
          
          {/*
            <div className="border-b border-gray-200 dark:border-gray-700 pt-4">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    
                  { CategorySection }

                </ul>
            </div>
            
            <div className="pt-4">
              <MenuItemCard 
                title="Food Name"
                item={[]}/>
            </div>
            */}
          </div> 
         
      </main>

      
    </div>
  )
}

export default Home


//Preparing - Props
export const getStaticProps: GetStaticProps<typeof GetStaticProps> = async () => {
  //fetching contact info
  const contactRes = await fetch('http://localhost:3000/api/contact')
  const contactData = await contactRes.json()

  //fetching tab categories
  const categoryRes = await fetch('http://localhost:3000/api/category')
  const categoryData = await categoryRes.json()

  //fetching pizza list
  const pizzaRes = await fetch('http://localhost:3000/api/category/pizza')
  const pizzaData = await pizzaRes.json()

  //fetching fries list
  const friesRes = await fetch('http://localhost:3000/api/category/fries')
  const friesData = await friesRes.json()

  //fetching drinks list
  const drinksRes = await fetch('http://localhost:3000/api/category/drinks')
  const drinksData = await drinksRes.json()

  //fetching burger list
  const burgerRes = await fetch('http://localhost:3000/api/category/burger')
  const burgerData = await burgerRes.json()

  return {
      props: { 
            contactData, 
            categoryData, pizzaData, friesData, drinksData, burgerData
      } 
  }
}
