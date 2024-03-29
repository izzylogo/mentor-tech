"use client"

import React, { useState } from 'react'
import { 
    Radio, 
    RadioGroup,
    FormGroup,
    FormControl, 
    FormControlLabel,
    FormLabel,
    InputLabel,
    Select, 
    SelectChangeEvent, 
    MenuItem,
    Checkbox,
} from '@mui/material'
import Link from 'next/link';

const page = () => {
    const [language, setLanguage] = useState("English");
    const [time, setTime] = useState("16:00 PM");
    const [days, setDays] = React.useState({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
    })

    const {monday, tuesday, wednesday, thursday, friday, saturday, sunday} = days

    const handleChange = (event) => {
        setLanguage(event.target.value);
      };
    const handleTime = (event) => {
        setTime(event.target.value);
      };

      const handleDays = (event) => {
        setDays({
          ...days,
          [event.target.name]: event.target.checked,
        });
      };


  return (
    <div className='p-4'>
        <div>
            <h4 className='capitalize'>select session</h4>
            <div>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="group" control={<Radio color='success'/>} label="Group Sessions" />
                    <FormControlLabel value="individual" control={<Radio color='success'/>} label="Individual Sessions" />
                </RadioGroup>
            </div>

            <div>
                <div className='block w-full'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: "95%" }}>
                        <InputLabel id="demo-simple-select-standard-label">SELECT LANGUAGE</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={language}
                            onChange={handleChange}
                            label="Age"
                            className='w-full'
                        >
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="French">French</MenuItem>
                        <MenuItem value="Latina">Latina</MenuItem>
                        {/* <MenuItem value="">Thirty</MenuItem> */}
                        </Select>
                    </FormControl>
                </div>
                <div className='block w-full'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: "95%" }}>
                        <InputLabel id="demo-simple-select-standard-label uppercase">AVAILABLE TIME</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={time}
                            onChange={handleTime}
                            label="Time"
                            className='w-full'
                        >
                        <MenuItem value="17:00">17:00 PM</MenuItem>
                        <MenuItem value="19:00">19:00 PM</MenuItem>
                        <MenuItem value="20:00">20:00 PM</MenuItem>
                        {/* <MenuItem value="">Thirty</MenuItem> */}
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className="checkbox_days">
                <h4>Available Days</h4>
                <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox checked={monday} onChange={handleDays} name="moday" />
                        }
                        label="Monday"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={tuesday} onChange={handleDays} name="tuesday" />
                        }
                        label="Tuesday"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={wednesday} onChange={handleDays} name="wednesday" />
                        }
                        label="Wednesday"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={thursday} onChange={handleDays} name="thursday" />
                        }
                        label="Thursday"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={friday} onChange={handleDays} name="friday" />
                        }
                        label="Friday"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={saturday} onChange={handleDays} name="saturday" />
                        }
                        label="Saturday"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={sunday} onChange={handleDays} name="sunday" />
                        }
                        label="Sunday"
                    />
                </FormGroup>
            </div>
            <Link href="/product/tutor">
                <button className='uppercase p-3 bg-[#009A84] mt-4 w-full text-white rounded'>Search Tutor</button>
            </Link>
        </div>
    </div>
  )
}

export default page