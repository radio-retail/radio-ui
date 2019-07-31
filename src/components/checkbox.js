/* eslint no-use-before-define: 0 */
import * as React from 'react'
import styled from 'styled-components'
import { space, layout } from 'styled-system'

const StyledInput = styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
  z-index: -1;
  position: absolute;
  left: -10px;
  top: -8px;
  display: block;
  margin: 0;
  border-radius: ${props => props.theme.radii.full};
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: none;
  outline: none;
  opacity: 0;
  transform: scale(1);
  pointer-events: none;
  transition: opacity 0.3s, transform 0.2s;

  &:checked,
  &:indeterminate {
    background-color: ${props => props.theme.colors.primary};
  }

  &:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
  }

  &:active + span::before {
    border-color: ${props => props.theme.colors.primary};
  }

  &:checked:active + span::before {
    border-color: transparent;
    background-color: rgba(0, 0, 0, 0.6);
  }

  &:disabled {
    opacity: 0;
  }

  &:disabled + span {
    color: rgba(0, 0, 0, 0.3);
    cursor: initial;
  }

  &:disabled + span::before {
    border-color: rgba(0, 0, 0, 0.3);
  }
`

const StyledLabel = styled.label`
  z-index: 0;
  position: relative;
  display: inline-block;
  color: rgba(0, 0, 0, 0.87);
  font-family: ${props => props.theme.fonts[0]};
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: ${props => props.theme.lineHeights.normal};

  &:hover > ${/* sc-selector */ StyledInput} {
    opacity: 0.04;
  }

  &:hover > ${/* sc-selector */ StyledInput}:focus {
    opacity: 0.16;
  }

  ${space}
  ${layout}
`

const StyledSpan = styled.span`
  display: inline-block;
  width: 100%;
  cursor: pointer;

  &::before {
    content: '';
    display: inline-block;
    box-sizing: border-box;
    margin: ${({ hasChildren }) => hasChildren ? '3px 1px' : '3px 11px 3px 1px'};
    border: solid 2px; /* Safari */
    border-color: rgba(0, 0, 0, 0.6);
    border-radius: ${props => props.theme.radii.xsmall};
    width: 18px;
    height: 18px;
    vertical-align: top;
    transition: border-color 0.2s, background-color 0.2s;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 4px;
    left: 2px;
    width: 10px;
    height: 5px;
    border: solid 2px transparent;
    border-right: none;
    border-top: none;
    transform: translate(3px, 4px) rotate(-45deg);
  }

  ${/* sc-selector */ StyledInput}:checked + &::before,
  ${/* sc-selector */ StyledInput}:indeterminate + &::before {
    border-color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.primary};
  }

  ${/* sc-selector */ StyledInput}:checked + &::after,
  ${/* sc-selector */ StyledInput}:indeterminate + &::after {
    border-color: rgb(255, 255, 255);
  }

  ${/* sc-selector */ StyledInput}:indeterminate + &::after {
    border-left: none;
    transform: translate(4px, 3px);
  }
`

class Checkbox extends React.PureComponent {
  render() {
    const { children, onClick, onChange, value, onBlur, disabled, ...props } = this.props
    return (
      <StyledLabel hasLabel={!!children} {...props}>
        <StyledInput
          onClick={onClick}
          onChange={onChange}
          onBlur={onBlur}
          checked={value}
          disabled={disabled}
        />
        <StyledSpan>{children}</StyledSpan>
      </StyledLabel>
    )
  }
}

export default Checkbox
