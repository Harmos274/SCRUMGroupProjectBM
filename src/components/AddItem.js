import { Input, Flex, Select, Button, Spacer } from '@chakra-ui/react'
import { FormControl, FormLabel } from '@chakra-ui/react'
import SizeInputField from './SizeInputField'
import moment from 'moment';

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { useState } from 'react';

const AddItem = (props) => {

    const [name, setName] = useState('None');
    const [type, setType] = useState('None');
    const [quantity, setQuantity] = useState('0');
    const [expirationDate, setExpirationDate] = useState('12/24/2030');
    const [height, setHeight] = useState('.0');
    const [length, setLength] = useState('.0');
    const [width, setWidth] = useState('.0');
    const [weight, setWeight] = useState('.0');

    var {onAddItem, ...other} = props;
    
    const addItemHandler = (e) => {
      onAddItem(name, type, quantity, moment(expirationDate).toISOString(), height, length, width, weight);
    };

    return (
        <Flex position="relative" direction='column' alignItems='center' maxWidth='500px' {...other}>
  
          <FormControl id='item_name' mb="2%">
            <FormLabel>Name</FormLabel>
            <Input placeholder="Christmas Tree, Candies..." type="text" onChange={e => setName(e.currentTarget.value)}/>
          </FormControl>
  
          <Flex flexDirection='row' width="100%" mb="2%">
            <FormControl id='item_type' marginRight="10%">
              <FormLabel>Type</FormLabel>
              <Select placeholder='Select type' onChange={e => setType(e.currentTarget.value)}>
                <option value='Essential'   >Essential</option>
                <option value='Luxury'      >Luxury</option>
                <option value='Gift'        >Gift</option>
              </Select>
            </FormControl>
  
            <FormControl id='item_quantity' mb="2%">
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
  
          <FormControl id='expiration_date' mb="2%">
            <FormLabel>Expiration date</FormLabel>
            <Input 
              placeholder="10/12/2021" 
              type="date"
              onChange={e => {setExpirationDate(e.currentTarget.value)}}
            />
          </FormControl>
  
          <Flex flexDirection='row' alignItems='center' mb="3%">
            <FormControl id="height" marginEnd="2%">
              <FormLabel>Height</FormLabel>
              <SizeInputField 
                defaultValue={0} 
                min={0} 
                precision={2} 
                step={0.5} 
                onChange={e => setHeight(e)}
              />
            </FormControl>
  
            <FormControl id="lenght" marginEnd="2%">
              <FormLabel>Length</FormLabel>
              <SizeInputField
                defaultValue={0}
                min={0}
                precision={2}
                step={0.5}
                onChange={e => setLength(e)}
              />
            </FormControl>
  
            <FormControl id="width" marginEnd="10%">
              <FormLabel>Width</FormLabel>
              <SizeInputField
                defaultValue={0}
                min={0}
                precision={2}
                step={0.5}
                onChange={e => setWidth(e)}
              />
            </FormControl>
  
            <FormControl id="Weight" alignSelf="end">
              <FormLabel>Weight</FormLabel>
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
        </Flex>
    )
  }

  export default AddItem;