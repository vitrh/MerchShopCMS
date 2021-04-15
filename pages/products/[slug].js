import Image from "next/image"

let client = require("contentful").createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN
  });
  

export async function getStaticPaths(){
    let data = await client.getEntries({
        content_type: "product"
    })

    return {
        paths: data.items.map((item) => ({
            params: { slug: item.fields.slug },
        })),
        fallback: true,
    };
}

export async function getStaticProps({ params }){
    let data = await client.getEntries({
        content_type: "product",
        "fields.slug": params.slug,
    });
    let alldata = await client.getEntries({
        conten_type: "title",
    })

    return{
        props: {
            product: data.items[0],
            product: alldata.items
        },
      revalidate: 1
    }
}

export default function Product({ product }){

    if (!product) return <div>404</div>
    console.log(product);
    return <div>
        <h1>{product.fields.title}</h1>
        <div>{(product.fields.description)}</div>
        <Image src={"https:" + product.fields.bild.fields.file.url}
        alt="Bild" 
        width={product.fields.bild.fields.file.details.image.width}
        height={product.fields.bild.fields.file.details.image.height}></Image>
       
    </div>;
}