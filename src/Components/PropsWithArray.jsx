function PropsWithArray({collage})
{
  console.log(collage)
  return (

    <>
    <h1>{collage[1]}</h1>
       <h1>{collage[0]}</h1>
          <h1>{collage[3]}</h1>
             <h1>{collage[4]}</h1>
                <h1>{collage[2]}</h1>
    </>
  )
}

export default PropsWithArray