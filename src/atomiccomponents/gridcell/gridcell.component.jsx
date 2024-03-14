

export function GridCell(props){
    let values=Object.values(props.values)
    return(
          <>
          {
             values.map((item)=><th>{item}</th>)
          }
          </>
    )
}