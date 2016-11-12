import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle
} from '@microsoft/sp-client-preview';

import styles from './HelloWorld.module.scss';
import * as strings from 'helloWorldStrings';
import { IHelloWorldWebPartProps } from './IHelloWorldWebPartProps';

import 'reflect-metadata';
require('zone.js');

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    this.domElement.innerHTML = `

          <my-app title="${this.properties.description}"> </my-app>
          <div>${this.properties.description}</div>`;

    platformBrowserDynamic().bootstrapModule(AppModule);


  }

  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('name', {
                  label: strings.NameFieldLabel
                }),
                PropertyPaneCheckbox('isActive', {
                  text: "Is active"
                }),
                PropertyPaneDropdown('countries', {
                  label:strings.CountryDropdownFieldLabel,
                  options:[
                    {key:1, text:'Austria'}
                  ]
                })

              ]
            }
          ]
        }
      ]
    };
  }
}
