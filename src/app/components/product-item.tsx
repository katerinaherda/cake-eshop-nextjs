import Image from "next/image"

type Props = {
  item: Array<{
    productName: string
    image: string
    price: string
  }>
}

export default function ProductItem({ item }: Props) {
  return (
    <>
      {item.map((product, index) => (
        <div
          key={index}
          className="flex flex-col items-center pt-6 lg:pt-20 max-w-[300px] mx-auto"
        >
          <h2 className="text-2xl font-bold pb-6">{product.productName}</h2>
          <Image
            className="w-[300px]"
            src={product.image}
            width="800"
            height="1200"
            alt=""
          />
          <div className="sm:flex w-full justify-between mt-4">
            <span className="font-bold">{product.price}</span>
            <a href="/">
              <button className="uppercase">buy</button>
            </a>
          </div>
        </div>
      ))}
    </>
  )
}
