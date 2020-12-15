import React from "react"
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Text } from "../../components"

interface MyApiProps {	
  title: string
  }
  
const MyApi = ({ title }: MyApiProps) => {
const [data, setData] = useState([]);

  useEffect(()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((apidata)=>{
      setData(apidata.data);
      console.log(apidata);
    })
    .catch(() => console.log("error"));
  }, []);

  return (
    <Box>
      {data.map((temp) => (
        <Box>
          <Text>
            {temp.title}
            </Text>
            </Box>
      ))}
    </Box>
    );
};


export default MyApi;