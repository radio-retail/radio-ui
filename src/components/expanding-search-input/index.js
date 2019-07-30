import React, { Component } from 'react'

import { ContainerAlt, InputAlt } from './styles'
import { Magnify } from '@lessondesk/material-icons'

import theme from '../theme.js'

const IconAltStyling = {
  position: 'absolute',
  right: '14px',
  borderRadius: '100%',
  padding: '9px',
  fontSize: '32px',
}

const ExpandedIconStyles = {
  boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.09)'
}

class ExpandingSearchInput extends Component {
  state = {
    expanded: false,
    value: ''
  }

  toggleExpanded = () => {
    const { expanded, value } = this.state
    this.setState({
      expanded: !expanded,
      value: expanded ? value : ''
    })

    if (!expanded) {
      this.input.focus()
    }
  }

  render () {
    const { expanded } = this.state
    return (
      <ContainerAlt>
        <InputAlt
          style={{ padding: '0 1em' }}
          placeholder='Search...'
          expanded={expanded}
          ref={input => (this.input = input)}
          onBlur={e => {
            if (e.target.value === '' && expanded) {
              this.toggleExpanded()
            }
          }}
          {...this.props}
        />
        <Magnify
          onClick={this.toggleExpanded}
          style={{
            ...IconAltStyling,
            ...(expanded && ExpandedIconStyles)
          }}
          bg={'white'}
          size={theme.fontSizes.large}
          color={theme.colors.gray.dark}
        />
      </ContainerAlt>
    )
  }
}

export default ExpandingSearchInput