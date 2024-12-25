import Users from '@/components/Users'
import React from 'react'

// const page =async () => {
//   const users = await getData("https://dummyjson.com/users");
//   return (
//     <div>
//       {users.map((user)=> {
//         return(

//         )
//       })}
//     </div>
//   )
// }

const page = () => {  
  return (
    <div className=' p-10'>
      <Users/>
    </div>
  )
}

export default page