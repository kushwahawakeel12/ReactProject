function PropsWithClick({add})
{
  return(


    <>
    <button onClick={add}>click me</button>
    <h1>{add}</h1>
    
    </>
  )
}
export default PropsWithClick