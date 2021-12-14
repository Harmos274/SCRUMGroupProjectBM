import { Input, Flex, Select, Button, Spacer } from '@chakra-ui/react'
import { FormControl, FormLabel } from '@chakra-ui/react'
import SizeInputField from './SizeInputField'
import moment from 'moment';
import {
  Alert,
  AlertIcon,
} from '@chakra-ui/react'

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { useState } from 'react';

const AddItem = (props) => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [height, setHeight] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [weight, setWeight] = useState('');
    const [formError, setFormError] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);

    var {onAddItem, ...other} = props;
    
    const addItemHandler = (e) => {
      if (name && type && quantity && expirationDate && height && length && width && weight) {
        onAddItem(name, type, quantity, moment(expirationDate).toISOString(), height, length, width, weight);
        setFormError(false)
        setFormSuccess(true)
        setTimeout(() => {
          setFormSuccess(false);
        }, 3500);
      } else {
        setFormError(true)
      }  
    };

    return (
        <Flex position="relative" direction='column' alignItems='center' maxWidth='505px' {...other}>
  
          <FormControl id='item_name' mb="2%" isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Christmas Tree, Candies..." type="text" onChange={e => setName(e.currentTarget.value)}/>
          </FormControl>
  
          <Flex flexDirection='row' width="100%" mb="2%">
            <FormControl id='item_type' marginRight="10%" isRequired>
              <FormLabel>Type</FormLabel>
              <Select placeholder='Select type' onChange={e => setType(e.currentTarget.value)}>
                <option value='Essential'   >Essential</option>
                <option value='Luxury'      >Luxury</option>
                <option value='Gift'        >Gift</option>
              </Select>
            </FormControl>
  
            <FormControl id='item_quantity' mb="2%" isRequired>
              <FormLabel>Quantity</FormLabel>
              <NumberInput defaultValue={0} min={0} onChange={e => {setQuantity(e)}}>
                <NumberInputField/>
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Flex>
  
          <FormControl id='expiration_date' mb="2%" isRequired>
            <FormLabel>Expiration date</FormLabel>
            <Input 
              placeholder="10/12/2021" 
              type="date"
              onChange={e => {setExpirationDate(e.currentTarget.value)}}
            />
          </FormControl>
  
          <Flex flexDirection='row' alignItems='center' mb="3%">
            <FormControl id="height" marginEnd="2%" isRequired>
              <FormLabel>Height (cm)</FormLabel>
              <SizeInputField 
                defaultValue={0} 
                min={0} 
                precision={2} 
                step={0.5} 
                onChange={e => setHeight(e)}
              />
            </FormControl>
  
            <FormControl id="lenght" marginEnd="2%" isRequired>
              <FormLabel>Length (cm)</FormLabel>
              <SizeInputField
                defaultValue={0}
                min={0}
                precision={2}
                step={0.5}
                onChange={e => setLength(e)}
              />
            </FormControl>
  
            <FormControl id="width" marginEnd="2%" alignSelf="end" isRequired>
              <FormLabel>Width (cm)</FormLabel>
              <SizeInputField
                defaultValue={0}
                min={0}
                precision={2}
                step={0.5}
                onChange={e => setWidth(e)}
              />
            </FormControl>
  
            <FormControl id="Weight" alignSelf="end" isRequired>
              <FormLabel>Weight (g)</FormLabel>
              <SizeInputField
                defaultValue={0}
                min={0}
                precision={1}
                step={0.5}
                onChange={e => setWeight(e)}
              />
            </FormControl>
  
          </Flex>
          <Spacer />
          <Button colorScheme="teal" variant="solid" width="100%" onClick={addItemHandler}>
            Add Item
          </Button>
          { formError === true && 
            <Alert status='error'>
              <AlertIcon />
                All the fields are mandatory
              </Alert>
          }
          { formSuccess === true && 
            <Alert status='success'>
              <AlertIcon />
                Successfully added new item
              </Alert>
          }
      
        </Flex>
    )
  }

  export default AddItem;