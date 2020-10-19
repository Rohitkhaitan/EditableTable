import React, {useState} from 'react'
import Header from '../../components/Header';
import Table from '../../components/Table';


export default function Home() {
    const [data, setData] = useState([{version:"1", status:"inprogress", progress:"0", "start date":"2020-10-23",
    "release date":"2020-10-23", description:"Awesome Awesome Awesome Awesome", action:""},
    {version:"2", status:"inprogress", progress:"20", "start date":"2020-10-23",
    "release date":"", description:"AwesomeAwesomeAwesomeAwesome", action:""}])

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
