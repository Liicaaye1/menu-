function Menu({tittle ,des , money , src}){
  // console.log(props)
    return <div className="flex gap-4 py-2 px-4 ">
      <img className="h-[150px] w-[200px] rounded " src={src} alt="" />
     <div className="">
      <h1 className="text-[20px] font-bold pb-2">{tittle}</h1>
      <p className="text-[15px] pb-3 ">{des}</p>
      <h1 className="text-[15px] pb-3">{money}</h1>
      <button className="bg-yellow-400 py-2 px-4 rounded-[8px]">Order now</button>
     </div>
    </div>
     
  }
  export default Menu