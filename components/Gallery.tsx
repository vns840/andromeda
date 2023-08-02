import Image from "next/image";

export default function Gallery(){
  return(
    <section id="gallery" className="h-screen  text-ver-galaxy">
      <h2 className="flex items-center justify-center h-[225px]">Gallery</h2>
      <div className="flex flex-wrap justify-center items-center gap-5">
        <Image className="rounded-md" src="/images/card-galaxy.jpg" alt="" width={400} height={400} />
        <Image className="rounded-md" src="/images/card-galaxy.jpg" alt="" width={400} height={400} />
        <Image className="rounded-md" src="/images/card-galaxy.jpg" alt="" width={400} height={400} />
        <Image className="rounded-md" src="/images/card-galaxy.jpg" alt="" width={400} height={400} />
        <Image className="rounded-md" src="/images/card-galaxy.jpg" alt="" width={400} height={400} />
        <Image className="rounded-md" src="/images/card-galaxy.jpg" alt="" width={400} height={400} />
        <Image className="rounded-md" src="/images/card-galaxy.jpg" alt="" width={400} height={400} />
        <Image className="rounded-md" src="/images/card-galaxy.jpg" alt="" width={400} height={400} />
        <Image className="rounded-md" src="/images/card-galaxy.jpg" alt="" width={400} height={400} />
      </div>
    </section>
  )
}