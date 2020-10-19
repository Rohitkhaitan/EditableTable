import React, { useState, useEffect, useRef } from 'react'
import Button from '@material-ui/core/Button';
import './inputform.css';


export default function InputForm(props) {
  const [startDate , setStartDate] = useState(props.startDate || "")
  const [releaseDate, setReleaseDate] = useState(props.releaseDate || "")
  const [version, setVersion] = useState(props.version || "")
  const [description, setDescription] = useState(props.description || "")
  const [progress, setProgress] = useState(props.progress || 0)

  const refVersion = useRef();
  useEffect (()=>
  refVersion.current.focus(),[]
  )

  // useEffect(() => {
  //   const {current} = refVersion;
  //   const valid = props.data.some(index=> index.version === version)
  //   if(valid) {
  //     current.focus()
  //   }
  // }, [version])

  const handleStartDate = (event) => {
    let date= event.target.value.split(' ')
    if(new Date(date)> new Date(releaseDate)){
      return alert("Start date can't be more than Release date")
    }
    setStartDate(date)
  }

  const handleReleaseDate = (event) =>{
    let date= event.target.value.split(' ')
    // console.log(startDate.length && new Date(startDate)> new Date(date))
    if(!startDate.length) {
      setStartDate(date)
    }
    setReleaseDate(date)
  }

  const handleVersion =(event) => {
    document.getElementsByClassName("error")[0].style.display ="none"
    setVersion(event.target.value)
  }
  const handleProgress =(event)=>{
    setProgress(event.target.value)
  }

  const handleDescription =(event) => {
    setDescription(event.target.value)
  }

  const handleSubmit = (event) => {
    const {current} = refVersion;
    const valid = props.data.some(index=> index.version === version)
    if(valid) {
      document.getElementsByClassName("error")[0].style.display ="inline"
      current.focus()
    }
    else {
      if(props.editmode) {
        props.editingDatafunction([...props.data, {version:version, progress:progress, "start date":startDate[0],
        "release date":releaseDate[0], description:description}])
      }
      else {
        props.insert({version:version, progress:progress, "start date":startDate[0],
       "release date":releaseDate[0], description:description})
      }
      setStartDate("")
      setReleaseDate("")
      setVersion("")
      setDescription("")
      setProgress(0)
      
    }
    event.preventDefault()
    // event.stopPropagation();
  }

    return (
      <form className="table_form" onSubmit={handleSubmit}>
        <input 
          ref={refVersion}
          type="text" 
          placeholder="Version name" 
          name="" 
          id="version" 
          className="version_field input_style"
          value={version}
          onChange={handleVersion}
          required
          style={{flexGrow: "2"}}
          />
          <p className={"error"}stylw={{position:"relative"}}>Version name is already Exist!</p>
          
        {props.editmode && <input 
          id="progress" className="input_style"
          placeholder="StartDate" 
          type="number"
          min={0} 
          max={100}
          value={progress}
          onChange={event => handleProgress(event)} 
        />}
        <input 
          id="start_date" className="date_picker_field input_style box_size"
          placeholder="StartDate" 
          type="date"
          min={new Date().toISOString().split('T')[0]} 
          value={startDate}
          onChange={event => handleStartDate(event)}
          required 
          pattern="\d{4}-\d{2}-\d{2}"
        />
        

        <input 
          id="release_date" className="date_picker_field input_style box_size"
          placeholder="ReleaseDate" 
          type="date" 
          min={new Date(startDate) > new Date()? startDate : new Date().toISOString().split('T')[0]}
          value={releaseDate}
          onChange={event => handleReleaseDate(event)}
          />

          <input 
          className="description_field input_style box_size"
          type="text" 
          placeholder="Description" 
          name="" 
          id="description" 
          value={description}
          onChange={handleDescription}
          />

        <Button className="button_style" type={"submit"} variant="contained" color="primary">{props.editmode?"Edit":"Add"}</Button>
      </form>
    )
}
