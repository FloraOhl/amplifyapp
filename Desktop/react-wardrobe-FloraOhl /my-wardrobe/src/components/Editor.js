import { useFormik } from 'formik';
import * as Yup from 'yup';



import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Editor = (props) => {
  let itemsForInputs = Object.keys(props.item)
  const formik = useFormik({
    // dont include url yet and never id as possible fields to change
    initialValues: {
      descrshort: props.item.descrshort,
      descrlong: props.item.descrlong,
      color: props.item.color,
      price: props.item.price,
      currency: props.item.currency,
      size: props.item.size,
      material: props.item.material,
      season: props.item.season,
      url: props.item.url
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
      console.log('values in onsubmit', values);
      // check url:
      let changedUrl = false
      if (values.url !== props.item.url) {
        changedUrl = true
      }
      props.updateWardrobe(values, props.item.id, changedUrl)
      props.handleClose()
    },
  });
  return (
    < div className="Editor">
      <form onSubmit={formik.handleSubmit}>
        <Modal.Body >
          {/*Instead of writing the input by hand for each field, we can loop over each property and build inputs in the map */}
          {itemsForInputs.map(itemKey => {
            if(itemKey === 'id' || itemKey === 'url') { return null }
            return (
              <div key={itemKey} className='d-flex flex-column'>
                <label htmlFor={itemKey}> {`${itemKey} of item`} </label>
                <input
                  id={itemKey}
                  name={itemKey}
                  type="text"
                  placeholder={`Edit the ${itemKey} of the item!`} 
                  value={formik.values[itemKey]}
                  // use callback from formik
                  onChange={formik.handleChange}
                />
                {formik.touched[itemKey] && formik.errors[itemKey] ? (
                  <div className='text-danger'>{`${itemKey} is ${formik.errors[itemKey]}`}</div>
                ) : null 
                }
              </div>)
          })}
         <div className='imageupload'>
          <label htmlFor="url">Change image</label>
          <input 
          id='url' 
          name='url' 
          type="file" 
          onChange={(event)=> {
            const fileToUpload = event.target.files 
            formik.setFieldValue('url', fileToUpload)
          }}
          />
          {formik.touched.url && formik.errors.url ? (
            <div className='text-danger'>{`Url is ${formik.errors.url}`}</div> 
          ) : null 
          }
        </div> 
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose} >
            Cancel
          </Button>
          <Button variant="primary" type='submit'>
            Update
          </Button>
        </Modal.Footer>
      </form>
    </div>
  )
}


export default Editor