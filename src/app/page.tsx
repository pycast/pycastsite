import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <div className="font-semibold text-2xl uppercase">Super site !!!</div>
      <Image
      src="/assets/img/eyebrowcat.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      </div>
  );
}
