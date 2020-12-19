import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Box, Text } from '../../components'

interface IUser {
  id: number;
  name: string;
  email: string;
  username: string;
  street: string;
  address: string;
  suite: string | number;
  zipcode: number;
}

export default function Users() {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {

    
    axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        setUsers(data)
        setLoading(false)
        console.log(data);
      })
      .catch(() => console.log("error"));
    }, 3000)
  }, []);
  
  return (
    <Box marginVertical="m" style={{ padding: 50 }}>
      <Text>
        {loading && <Text>Loading...</Text>}
        {!loading && (
          <>
        
        {users.map((user: IUser) => (
          <Text key={user.id}>
            {user.id}
            {user.name}
            {user.username}
            {user.email}
            </Text>
        ))}
        </>
        )}
      </Text>
    </Box>
  )
}