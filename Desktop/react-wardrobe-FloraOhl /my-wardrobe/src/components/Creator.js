import { useState } from 'react';
import { Link } from "react-router-dom"
import { useFormik, Field } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';

const Creator = () => {
  const [error, setError] = useState(false)
  const [messageUpload, setMessageUpload] = useState(false)

  const createNewEntry = async (item) => {

    // upload image to cloudinary: 
    let preset = 'wardrobe_flora'
    let cloudName = 'daiahcanm'
    let cloudpath = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
    const data = new FormData()
    data.append('file', item.url[0])
    data.append('upload_preset', preset)
    data.append('cloud_name', cloudName)

    let cloudResponse = await fetch(cloudpath, {
      method: 'POST',
      body: data,
    })
    // response from cloudinary with the url of the uploaded image
    let imageData = await cloudResponse.json()


    // send all values form the from and the url of the image to the backden to store in our db
    let path = `${process.env.REACT_APP_WARDROBE_API}/wardrobe/`
    try {
      let response = await fetch(path, {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ ...item, url: imageData.url })
      })
      if (response.status === 201) {
        setMessageUpload(response.statusText)
      } else {
        let error = new Error(`${response.statusText}: ${response.url}`)
        error.status = response.status
        throw error
      }
    } catch (error) {
      console.log("There was an error when updating data", error);
      setError(error.message)
    }
  }
  const formik = useFormik({

    initialValues: {
      descrshort: '',
      descrlong: '',
      color: '',
      price: '',
      currency: '',
      size: '',
      material: '',
      season: '',
      url: '',
    },
    validationSchema: Yup.object({
      descrshort: Yup.string().min(2, 'Min 2 letters').required('Required'),
      descrlong: Yup.string().min(2, 'Min 2 letters').required('Required'),
      color: Yup.string().min(2, 'Min 2 letters').required('Required'),
      price: Yup.number().positive().required('Required'),
      currency: Yup.string().min(2, 'Min 2 letters').required('Required'),
      size: Yup.string().min(1, 'Min 1 letters').required('Required'),
      material: Yup.string().min(2, 'Min 2 letters').required('Required'),
      season: Yup.string().oneOf(['spring', 'summer', 'fall', 'winter']).required('Required'),
      url: Yup.string().required('Required')
    }),

    onSubmit: (values) => {
      console.log(values);
      // dont pass empty values
      // Send a request to api to create item!
      createNewEntry(values)
    },
  });
  return (
    < div className="Creator m-5 ">
      {error ? (<h2>{error}</h2>) : (null)}

      <form onSubmit={formik.handleSubmit} className='m-5 border border-solid p-5'>
        {/* Loop over props to build inputs */}
        {Object.keys(formik.initialValues).map(itemKey => {
          if (itemKey === 'id' || itemKey === 'url') { return null }
          return (

            <div key={itemKey} className='d-flex flex-column'>

              <label htmlFor={itemKey}> {`${itemKey} of item`} </label>
                <input
                  id={itemKey}
                  name={itemKey}
                  type="text"
                  placeholder={`Edit the ${itemKey} of the item!`} value={formik.values[itemKey]}
                  onChange={formik.handleChange}
                />
              
              {formik.touched[itemKey] && formik.errors[itemKey] ? (
                <div className='text-danger'>{`${itemKey} is ${formik.errors[itemKey]}`}</div>
              ) : null
              }

            </div>)
        })}
        <div className='ImageUpload d-flex flex-column'>
          <label htmlFor="url">Change image</label>
          <input
            id="url"
            name="url"
            type="file"
            onChange={(event) => {
              const file = event.target.files;
              console.log(file, file[0].name);
              formik.setFieldValue("url", file);
            }}
          />
          {formik.touched.url && formik.errors.url ? (
            <div className='text-danger'>{`url is ${formik.errors.url}`}</div>
          ) : null
          }
        </div>

        <Button variant="primary" type='submit' >
          Add new item!
        </Button>

      </form>

      {messageUpload ? (
        <>

          <h2>{messageUpload} </h2>
          <Link to="/"> Go back to main page</Link>
        </>
      ) : (null)}
    </div>
  )
}


export default Creator