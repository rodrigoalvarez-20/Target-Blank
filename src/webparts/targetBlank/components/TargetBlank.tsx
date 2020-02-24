import * as React from 'react';
import styles from './TargetBlank.module.scss';
import { ITargetBlankProps } from './ITargetBlankProps';
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";


class TargetBlank extends React.Component<ITargetBlankProps, {}>{

  constructor(props : ITargetBlankProps) {
    super(props);
  }

  public render(){
    //var label = `Abrir documento: ${this.props.title_document}`;
    return (<div className={ styles.targetBlank }>
    <div style={{ textAlign:"center"}}>
      <div className={ styles.row }>
        <div className={ styles.column }>
          <PrimaryButton text={this.props.title_document} onClick={()=>{
            window.open(this.props.link_document, '_blank');
          }} />
        </div>
      </div>
    </div>
  </div>);
  }
}

export default TargetBlank;



