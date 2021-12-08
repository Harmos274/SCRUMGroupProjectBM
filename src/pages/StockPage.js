import { Input, Flex } from '@chakra-ui/react'
import SizeInputField from '../components/SizeInputField'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'

export default function StockPage() {
    return (
        <div>
            <Flex direction='column'>
                {/*Name*/}
                <Input/>
                {/*Type*/}
                <Input/>
                {/*Quantity*/}
                <NumberInput defaultValue={0} min={0}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                {/*Expiration Date*/}
                <Input/>
                <Flex>
                    {/*Height*/}
                    <SizeInputField defaultValue={0} min={0} precision={2} step={0.5}/>
                    {/*Width*/}
                    <Input/>
                    {/*Length*/}
                    <Input/>
                </Flex>
            </Flex>
        </div>
    )
}