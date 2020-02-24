import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import TargetBlank from './components/TargetBlank';
import { ITargetBlankProps } from './components/ITargetBlankProps';

export interface ITargetBlankWebPartProps {
  link_document: string;
  title_document: string;
}

export default class TargetBlankWebPart extends BaseClientSideWebPart<ITargetBlankWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ITargetBlankProps > = React.createElement(
      TargetBlank, 
      {
        link_document: this.properties.link_document,
        title_document: this.properties.title_document
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Ajustes de WebPart"
          },
          groups: [
            {
              groupName: "Configuracion",
              groupFields: [
                PropertyPaneTextField('link_document', {
                  label: "Link del documento"
                }),
                PropertyPaneTextField("title_document",{
                  label: "Titulo del documento"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
