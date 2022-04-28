import React from 'react';
import styled from 'styled-components';
import {get} from 'lodash';

const StyledHorizontalContainer = styled.View`
  background-color: ${props => props.bgColor};
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
`;

export class HorizontalContainer extends React.Component {
  render() {
    let bgColor = get(this.props, 'bgColor', 'white');
    let justifyContent = get(this.props, 'justifyContent', 'center');
    
    return (
      <StyledHorizontalContainer
        bgColor={bgColor}
        justifyContent={justifyContent}>
        {this.props.children}
      </StyledHorizontalContainer>
    );
  };
};