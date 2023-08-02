export default function Contatc(){
  return(
    <section id="contact" className="mt-[400px] text-ver-galaxy mb-12 max-sm:mt-auto">
      <h2 className="flex items-center justify-center h-[225px]">Contatc</h2>
        <div className="flex items-center justify-center ">
          <form className="flex flex-col w-[50%] gap-3">
            <label>Name:</label>
            <input className="rounded-md" type="text" />
            <label className="rounded-md" >E-mail:</label>
            <input className="rounded-md" type="email" />
            <label>Mensagen:</label>
            <textarea className="rounded-md" name="" id="" cols={30} rows={10}></textarea>
            <button className="bg-ver-galaxy border rounded-md p-4 text-white">Submit</button>
          </form>
        </div>
    </section>
  )
}