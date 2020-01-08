import React, { Component, Fragment } from 'react';
import { SectionAction, SectionContent, SectionTitle } from './styled';

type Props = {
  title: string;
  titleColor?: string;
  action?: () => void;
};

class Section extends Component<Props> {

  renderAction = () => {
    if (this.props.action) {
      return <SectionAction onClick={this.props.action}>Click Me!</SectionAction>;
    }
  }

  render() {
    return (
      <Fragment>
        <SectionTitle titleColor={this.props.titleColor}>{this.props.title}</SectionTitle>
        <SectionContent>{this.props.children}</SectionContent>
        {this.renderAction()}
      </Fragment>
    );
  }
}

export default Section;