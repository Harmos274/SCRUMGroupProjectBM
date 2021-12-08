import { Input, Flex, Text, Select, Stack , Button, Spacer} from '@chakra-ui/react'
import { FormControl, FormLabel, FormHelperText } from '@chakra-ui/react'
import SizeInputField from '../components/SizeInputField'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
import theme from "../utils/theme";

export default function StockPage() {
    return (
        <div center="0">
        <Stack position="absolute" direction='column' alignItems='center' maxWidth='500px' margin='15%'>

            <FormControl id='item_name'>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Christmas Tree, Candies..."/>
            </FormControl>

            <Flex flexDirection='row' width="100%">
                <FormControl id='item_type' marginRight="10%">
                    <FormLabel>Type</FormLabel>
                    <Select placeholder='Select type'>
                        <option value='Essential'   >Essential</option>
                        <option value='Luxury'      >Luxury</option>
                        <option value='Gift'        >Gift</option>
                    </Select>
                </FormControl>

                <FormControl id='item_quantity'>
                    <FormLabel>Quantity</FormLabel>
                    <NumberInput defaultValue={0} min={0}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
            </Flex>

            <FormControl id='expiration_date'>
                <FormLabel>Expiration date</FormLabel>
                <Input placeholder="10/12/2021"/>
            </FormControl>

            <Flex flexDirection='row' alignItems='center'>
                <FormControl id="heights" marginEnd="2%">
                    <FormLabel>Height</FormLabel>
                    <SizeInputField defaultValue={0} min={0} precision={2} step={0.5} />
                </FormControl>

                <FormControl id="lenght" marginEnd="2%">
                    <FormLabel>Length</FormLabel>
                    <SizeInputField defaultValue={0} min={0} precision={2} step={0.5} />
                </FormControl>

                <FormControl id="width" marginEnd="10%">
                    <FormLabel>Width</FormLabel>
                    <SizeInputField defaultValue={0} min={0} precision={2} step={0.5} />
                </FormControl>

                <FormControl id="Weight" alignSelf="end">
                    <FormLabel>Weight</FormLabel>
                    <SizeInputField defaultValue={0} min={0} precision={1} step={0.5} />
                </FormControl>

            </Flex>
            <Spacer/>
            <Button colorScheme="teal" variant="solid" width="100%">
                Add Item
            </Button>
        </Stack>
        </div>
    )
}