import React, { useState } from 'react'
import voca from 'voca'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import FormContainer from '../styledComponents/FormContainer'

const v = voca
function Voca() {
    const [slug, setSlug]= useState("")
    const slugify = (event:any) =>{
        event.preventDefault()
        const initialString = event.target.textToSlug.value;
        const slugifiedString = v.kebabCase(initialString);
        setSlug(slugifiedString)
    }
  return (<>
                
        <FormContainer>
            <Form onSubmit={slugify} className="p-3 my-2 text-muted bg-light">
            <h2 id="slugify" className='py-2'>Slugify</h2>
            <FormGroup floating>
              <Input
                id="textToSlug"
                name="textToSlug"
                placeholder="textToSlug"
                type="text"
              />
              <Label for="textToSlug">
                text to slug
              </Label>
            </FormGroup>
            <Button className='slugify-submit bg-success'>
              Slug It
            </Button>
        <h2>{slug}</h2>
          </Form>
        </FormContainer>
  </>
  )
}

export default Voca