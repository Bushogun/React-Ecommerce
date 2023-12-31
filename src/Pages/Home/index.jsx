import { useState, useEffect } from 'react'
import { apiUrl } from '../../api/'
import Layout  from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

function Home(){
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => setItems(data))
    // .finally
  },[])//Por si toca enviarle información al useEffect por dentro

  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {
        items?.map(item => (
          <Card
          key={item.id}
          data={item}
          />
        ))
      }

      </div>
      <ProductDetail/>
    </Layout>
  )
}

export default Home