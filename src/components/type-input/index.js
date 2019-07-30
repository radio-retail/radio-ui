import React from 'react'
import { connect } from 'formik'

import createDefaultInputProps from '../../utils/create-input-defaults'
import InputWrapper from '../input-wrapper'

import { Container, Value } from './styles'

function formikChangeHandler (formik, name, value) {
  const { values, setFieldValue } = formik
  const currentValue = values[name] || []
  const shouldRemove = currentValue.includes(value)

  return setFieldValue(
    name,
    shouldRemove
      ? currentValue.filter(v => v !== value)
      : currentValue.concat(value)
  )
}

const TypeInput = ({
  containerStyle,
  options,
  selected,
  value,
  formik,
  placeholder,
  onToggle,
  onLanguagesChange,
  alertText: alertTextOverride,
  ...otherProps
}) => {
  const {
    id = otherProps.name,
    label,
    inputStyle,
    name
  } = otherProps

  const { alertText, hasFormik, ...inputDefaults } = createDefaultInputProps({
    alertText: alertTextOverride,
    value,
    name,
    formik,
  })

  const typeValues = inputDefaults.value || value
  const selectedValues = selected || (hasFormik && formik.values[name])

  return (
    <InputWrapper alertText={alertText} {...otherProps}>
      <Container>
        {options && options.map(({ label, value, selected }) => (
          <Value
            key={value}
            selected={Array.isArray(selectedValues) && selectedValues.includes(value)}
            onClick={() =>
              onToggle
                ? onToggle(value)
                : hasFormik && formikChangeHandler(formik, name, value)
            }
            value={typeValues}
          >
            {label}
          </Value>
        ))}
      </Container>
    </InputWrapper>
  )
}

export default connect(TypeInput)