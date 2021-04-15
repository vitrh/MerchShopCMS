import Head from 'next/head'
import Link from "next/link"

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps(){
  let data = await client.getEntries({
    content_type: "product"
  })

  return {
    props: {
      products: data.items
    }
  }
}

export default function Home({ products }) {
  console.log(products);
  return (
    <div>
      <Head>
        <title>CMS Website with contentful</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div>
      
        {products.map(product => (
          <h1 key={product.sys.id}>
            <Link href={"/products/" + product.fields.slug}>
            {product.fields.title}
            </Link>
          </h1>
        ))}
      
    </div>
    </div>
  )
}
