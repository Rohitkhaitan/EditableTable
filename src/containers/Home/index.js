import React, {useState} from 'react'
import Header from '../../components/Header';
import Table from '../../components/Table';


export default function Home() {
    const [data, setData] = useState([{version:"Version 1.0", progress:"100", "start date":"2020-10-18",
    "release date":"2020-10-23", description:"Awesome", action:""},
    {version:"Version 1.2", progress:"20", "start date":"2020-10-19",
    "release date":"", description:"Version 1.2", action:""}])

    const handleInput = (value) => {
        setData([...data, value])
    }

    const handleDelete = (value) => {
        setData(value);
    }

    const handleEdit = (value) => {
        setData(value)
    }

    return (
        <div>
            <Header/>
            <Table data={data} insert ={handleInput} deleteData={handleDelete} editDatafunction={handleEdit}/>
        </div>
    )
}
