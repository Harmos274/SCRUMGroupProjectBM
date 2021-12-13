import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'

const SizeInputField = (props) => {

    const {onChange, ...other} = props;

    return (
        <NumberInput {...other}>
            <NumberInputField type="number" onChange={onChange}/>
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
    )
}

export default SizeInputField;