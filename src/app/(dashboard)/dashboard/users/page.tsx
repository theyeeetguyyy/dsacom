import Link from 'next/link';

const page = () => {
    return (
      <div>
        <h1>Dashboard/Users</h1>
        <li> <Link href="users/1"> User 1</Link> </li>
        <li> <Link href="users/2"> User 2</Link> </li>




      </div>
    )
  }
  
  export default page