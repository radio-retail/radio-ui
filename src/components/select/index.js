import React from 'react'
import { useFormContext } from 'react-hook-form'
import ReactSelect from 'react-select'
import InputWrapper from '../input-wrapper'
import { colors, radii, fontSizes, fonts } from '../theme'

const styleOverride = ({ fontSize, width, shape, variant, hasShadow }) => ({
  indicatorSeparator: () => ({
    display: 'none',
  }),
  control: (provided, state) => {
    const backgroundColor =
      state.isDisabled || variant === 'light' ? colors.white : colors.gray.xlight

    return {
      ...provided,
      backgroundColor: backgroundColor,
      border: state.isDisabled && !hasShadow ? `border: 1px solid ${colors.gray.default}` : 'none',
      borderColor: state.isDisabled ? colors.gray.default : null,
      fontFamily: fonts.Montserrat,
      fontSize: fontSize ? fontSizes[fontSize] : fontSizes.small,
      borderRadius: shape === 'rounded' ? radii.full : radii.small,
      width: width || '100%',
      boxShadow: hasShadow ? 'rgba(0, 0, 0, 0.15) 0px 0px 1em 1px' : 'none',
      padding: '0 0.8em',
      overflow: 'hidden',
      ...(variant === 'light' && {
        border: `solid 1px ${colors.gray.default}`,
      }),
    }
  },

  placeholder: () => ({
    color: colors.gray.default,
  }),
  singleValue: () => ({
    color: colors.gray.xxdark,
  }),
  indicatorsContainer: (provided, state) => ({
    display: state.isDisabled ? 'none' : 'flex',
  }),
  option: (defaultStyles, { isSelected, isFocused }) => {
    let color = colors.white
    if (isFocused) {
      color = colors.xlight
    }
    if (isSelected) {
      color = colors.gray.light
    }

    return {
      ...defaultStyles,
      fontSize: fontSizes.small,
      color: colors.black,
      backgroundColor: color,
      ':active': {
        ...defaultStyles[':active'],
        backgroundColor: colors.gray.xlight,
      },
    }
  },
})

const Select = ({
  shape,
  variant,
  hasShadow,
  disabled,
  disableEmpty,
  options,
  value,
  onBlur,
  onChange,
  placeholder,
  fontSize,
  bordered,
  multiple,
  alertText: alertTextOverride,
  name,
  required,
  ...otherProps
}) => {
  const { register, errors, setValue, triggerValidation } = useFormContext()
  return (
    <InputWrapper alertText={alertTextOverride || errors[name] ? errors[name].message : ''} required={required} {...otherProps}>
      <ReactSelect
        onChange={async ({ value }) => {
          setValue(name, value)
          await triggerValidation({ name })
          onChange({ value })
        }}
        onBlur={async () => await triggerValidation({ name })}
        placeholder={placeholder}
        styles={styleOverride({ shape, variant, fontSize, bordered, hasShadow })}
        name={name}
        options={options}
        isDisabled={disableEmpty ? disabled || options.length === 0 : disabled}
        isMulti={multiple}
        required={required}
        ref={register({ name })}
        {...otherProps}
      />
    </InputWrapper>
  )
}

Select.defaultProps = {
  containerStyle: {},
  onChange: () => { }
}

export default Select
