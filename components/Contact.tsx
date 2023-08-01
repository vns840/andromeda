export default function Contatc(){
  return(
    <section id="contact" className="mt-[400px]">
      <h2 className="flex items-center justify-center h-[225px]">Contatc</h2>
        <div>
          <form>
            <label>Name</label>
            <input type="text" />
            <label>E-mail</label>
            <input type="email" />
            <label>Mensagen</label>
            <textarea name="" id="" cols={30} rows={10}></textarea>
            <button>Submit</button>
          </form>
        </div>
    </section>
  )
}