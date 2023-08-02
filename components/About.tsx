import Image from "next/image";

export default function About(){
  return(
    <section id="about" className="h-screen pb-4 text-ver-galaxy max-sm:h-auto">
      <h2 className="flex items-center justify-center h-[230px]">About</h2>
      <div className="flex justify-around items-center max-sm:flex-col max-sm:gap-6">
        <div>
          <Image className="" src="/images/galaxy-about.png" alt="" width={300} height={386} />
        </div>
        <div className="w-[50%]">
          <p>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  )
}