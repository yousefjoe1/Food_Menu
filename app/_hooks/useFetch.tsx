import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

let url = process.env.NEXT_PUBLIC_DB


const getData = async (apiRoute:string) => {
    try {
      let res = await axios.get(`${url}${apiRoute}`)
      return res.data;
    } catch (er) {
      console.log(er);
      return er
    }
  }

const useFetch = (url:string, apiName:string, fetchAgain:any,isPaginate:boolean) => {

    let { data, isLoading, isRefetching, isError,refetch } = useQuery({
        queryKey: [apiName, fetchAgain],
        queryFn: () => {
             return getData(url)
        },
        refetchOnWindowFocus: false,
    });



    return {data, isLoading, isRefetching, isError,refetch }
}

export default useFetch